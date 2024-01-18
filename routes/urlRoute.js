const express = require("express");
const router = express.Router();
const {
  createNewShortURL,
  OpenUrlUsingShortId,
  getAnalyticsOfUrl,
  getAllAnalytics,
} = require("../controllers/urlController");

router.route("/").post(createNewShortURL);
router.route("/:shortId").get(OpenUrlUsingShortId);
router.route("/analytics/all").get(getAllAnalytics);
router.route("/analytics/:shortId").get(getAnalyticsOfUrl);
module.exports = router;
