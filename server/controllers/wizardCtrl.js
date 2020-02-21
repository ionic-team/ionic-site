const { 
  REDIS_URL
} = require('../config');

let redisClient;
if (REDIS_URL) {
  redisClient = require('redis').createClient(REDIS_URL);
}

// Expire after 2 hours
const EXPIRE_TIME = 1000 * 60 * 60 * 2;

const appKey = (tid) => `wizard-app-${tid}`;

const save = (data) => {
  if (!redisClient) {
    return;
  }

  // tid is the hubspot id we can just piggy-back on as our session id
  // since they already did the hard work for us
  const tid = data.tid;

  return new Promise((resolve, reject) => {
    redisClient.set(appKey(tid), JSON.stringify(data), (err) => {
      if (err) return reject(err);

      // Expire the key after a bit
      redisClient.expireat(appKey(tid), (+new Date) + EXPIRE_TIME, (err) => {
        if (err) return reject(err);
        resolve();
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
    if (redisClient) {
      await save(app);
    }
    res.status(200);
    res.json({});
  }
}