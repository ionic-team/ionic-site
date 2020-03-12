const { REDIS_URL } = require('../config');

const hbs = require('../hubspot');
const shortid = require('shortid');

// Don't allow _ or -
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

let redisClient;
if (REDIS_URL) {
  redisClient = require('redis').createClient(REDIS_URL);
}

// Expire after 1 week
const EXPIRE_TIME = (1000 * 60 * 60 * 1) * 24 * 7;

const appKey = (appId) => `wizard-app-${appId}`;

const generateId = () => {
  return shortid.generate();
}

const save = async (data) => {
  if (!redisClient) {
    return;
  }

  // tid is the hubspot id we can just piggy-back on as our session id
  // since they already did the hard work for us
  const appId = data.appId || generateId();

  const tid = data.tid;

  const email = data.email;

  let canonicalId;
  try {
    let hubspotProfile;
    if (email) {
      hubspotProfile = await hbs.getByEmail(email);
    } else {
      hubspotProfile = await hbs.getByToken(tid);
    }
    canonicalId = hubspotProfile['canonical-vid'];
  } catch (e) {
  }

  if (canonicalId) {
    data['cid'] = canonicalId;
  }

  return new Promise((resolve, reject) => {
    redisClient.set(appKey(appId), JSON.stringify(data), (err) => {
      if (err) return reject(err);

      // Expire the key after a bit
      redisClient.expireat(appKey(appId), (+new Date) + EXPIRE_TIME, (err) => {
        if (err) return reject(err);
        resolve({
          appId
        });
      })
    });
  })
}

const getApp = (appId) => {
  if (!redisClient) {
    return null;
  }

  return new Promise((resolve, reject) => {
    redisClient.get(appKey(appId), (err, value) => {
      if (err) return reject(err);
      resolve(value);
    });
  })
}

module.exports = {
  getApp: async (req, res) => {
    const appId = req.params.appId;
    const app = await getApp(appId);
    res.status(200);
    res.json(JSON.parse(app));
  },
  save: async (req, res) => {
    const app = req.body;
    let data = {};
    if (redisClient) {
      const ip = req.header('CF-Connecting-IP');
      app['ip'] = ip;

      data = await save(app);
    }
    res.status(200);
    res.json(data);
  }
}