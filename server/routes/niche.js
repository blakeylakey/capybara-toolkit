var express = require("express");
var router = express.Router();

// Helpers
const nicheQuery = require("../helpers/nicheQueryHelper");
const summaryHelper = require("../helpers/summaryHelper");

// GET Individual APIs
// PDB Query API
router.get("/nichequery", function(req, res, next) {
  let nicheQueryResults = nicheQuery(req.query)
    .then(results => {
      return {
        data: results,
        summary: summaryHelper(results)
      };
    })
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

module.exports = router;
