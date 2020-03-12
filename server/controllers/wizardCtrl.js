const shortid = require('shortid');
const request = require('request');

const { REDIS_URL } = require('../config');

const hbs     = require('../hubspot');

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

const hbsSubmit = async (app) => {
  const formUrl = `https://forms.hubspot.com/uploads/form/v2/3776657/03342c92-c6a9-450c-b84b-c246588cf880`;

  const hsContext = {
    hutk: app.tid,
    pageUrl: 'https://ionicframework.com/start',
    pageName: 'Ionic Start Wizard',
    ipAddress: app.ip,
  };

  const payload = {
    email: app.email,
    'hs_context': JSON.stringify(hsContext),
    ...(app.utm || {}),
  };

  return new Promise((resolve, reject) => {
    request.post(formUrl, {
      form: payload
    }, (err, res, body) => {
      if (err) {
        console.error('Unable to post to hbs', err);
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

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
      resolve(JSON.parse(value));
    });
  })
}

module.exports = {
  getApp: async (req, res) => {
    const appId = req.params.appId;
    const app = await getApp(appId);
    res.status(200);
    res.json(app);
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
  },
  appStarted: async (req, res) => {
    const appId = req.params.appId;
    const app = await getApp(appId);
    await hbsSubmit(app);
    res.status(200);
    res.json(app);
  }
}