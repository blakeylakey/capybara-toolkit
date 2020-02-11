var express = require("express");
var router = express.Router();

var rake = require("rake-js");
var fs = require("fs");

/* 
  Needs improvement, mainly with scraper and image stuff
  Image gets saved locally, pulled by client, and deleted after a little, 
    so not a great way of doing things
  Scraper has improvements in lascraperhelper
*/

// Helpers
const laScraper = require("../helpers/laScraperHelper");
const laQuery = require("../helpers/laQueryHelper");

// GET Individual APIs
// LA Related Products Query API
router.get("/laquery", function(req, res, next) {
  let laQueryResults = laQuery(req.query.asin.toUpperCase())
    .then(results => {
      res.json({
        success: true,
        results: results
      });
    })
    .catch(error => {
      res.json({
        success: false,
        error: error
      });
    });
});

// LA Scraper API
router.get("/lascrape", function(req, res, next) {
  const now = Date.now();
  let laScraperResults = laScraper.laBrowser(req.query.asin, now)
    .then(async browser => {
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
      await page.goto(`https://www.amazon.com/dp/${req.query.asin}`);
      await page.waitForSelector("body");
      const unique_name = `${now}.png`;
      await page.screenshot({ path: `screenshots/${unique_name}` });
      
      let productInfo = await page.evaluate(laScraper.laScraper);
      
      let results = {
        screenshot: `/img/${unique_name}`,
        productInfo: productInfo
      };

      await browser.close();

      return results;
    })
    .then(results => {
      let keyphrase_string = [
        results.productInfo.pageTitle,
        results.productInfo.description
      ]
        .concat(results.productInfo.formattedFeatures)
        .join(" ");
      let keyphrases = rake.default(keyphrase_string, { language: "english" });
      results.productInfo.keyphrases = keyphrases;

      return results;
    })
    .then(results => {
      results.checks = {
        titleLength: { value: results.productInfo.pageTitle.length },
        descLength: { value: results.productInfo.description.length },
        avgFeatLength: {
          value:
            results.productInfo.features.join("").length /
            results.productInfo.features.length
        },
        imgCount: { value: results.productInfo.altImgsCount },
        revScore: {
          value: results.productInfo.reviewScore,
          info: results.productInfo.reviewCount
        },
        bsrRank: {
          value: results.productInfo.bsr[0][0],
          info: results.productInfo.bsr[0][1]
        }
      };
      return results;
    })
    .then(results => {
      res.json({
        success: true,
        results: results
      });
      return results.screenshot;
    })
    .then(path => {
      setTimeout(() => {
        fs.unlinkSync(`screenshots/${now}.png`);
      }, 3000);
    })
    .catch(function(error) {
      setTimeout(() => {
        fs.unlinkSync(`screenshots/${now}.png`);
      }, 3000);
      res.json({
        success: false,
        error: error
      });
    });
});

module.exports = router;
