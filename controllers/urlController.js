const shortid = require("shortid");
const URL = require("../models/urlModel");

async function createNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL not found" });
  }
  const shortID = shortid(8);

  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function OpenUrlUsingShortId(req, res) {
  const id = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortID: id,
    },
    {
      $push: {
        visitHistory: { timeStamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
}

async function getAllAnalytics(req, res) {
  const result = await URL.find({});
  return res.json(result);
}

async function getAnalyticsOfUrl(req, res) {
  const shortID = req.params.shortId;
  const result = await URL.findOne({ shortID });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  createNewShortURL,
  OpenUrlUsingShortId,
  getAnalyticsOfUrl,
  getAllAnalytics,
};
