var express = require('express');
var router = express.Router();

// Helpers
const pdbQuery = require('../helpers/pdbQueryHelper');
const summaryHelper = require('../helpers/summaryHelper');
const gtrends = require('../helpers/gtrendsHelper');
const grelated = require('../helpers/grelatedHelper');

// GET Individual APIs
// PDB Query API
router.get('/pdbquery', function(req, res, next) {
    let keywords = req.query.keywords.split(' ');
    let pdbQueryResults = pdbQuery(keywords)
        .then(results => {
            return {
                'data': results,
                'summary': summaryHelper(results)
            };
        })
        .then(results => {
            res.json({
                'success': true,
                'results': results
            });
        })
        .catch(error => {
            res.json({
                'success': false,
                'error': error
            });
        });
});

// Google Trends API
router.get('/gtrends', function(req, res, next) {
    let keywords = req.query.keywords.split(' ');
    let gtrendsResults = gtrends(keywords)
        // Parse Results as JSON
        .then(results => JSON.parse(results))
        // Clean up Results
        .then(results => {
            let timelineData = results.default.timelineData;
            timelineData = timelineData.map(elem => ({
                'timeInt': elem.time,
                'timeFormatted': elem.formattedTime,
                'value': elem.value[0]
            }));

            return {'data': timelineData};
        })
        .then(results => {
            res.json({
                'success': true,
                'results': results
            });
        })
        .catch(error => {
            res.json({
                'success': false,
                'error': error
            });
        });
});

// Google Related Queries API
router.get('/grelated', function(req, res, next) {
    let keywords = req.query.keywords.split(' ');
    let grelatedResults = grelated(keywords)
        // Parse Results as JSON
        .then(results => JSON.parse(results))
        // Clean up Results
        .then(results => {
            let top_list = results.default.rankedList[0].rankedKeyword;
            top_list = top_list.map(elem => ({"query": elem.query, "value": elem.value}));

            let rising_list = results.default.rankedList[1].rankedKeyword;
            rising_list = rising_list.map(elem => ({"query": elem.query, "value": elem.value}));

            return {'Top': top_list, 'Rising': rising_list};
        })
        // Return Results
        .then(results => {
            res.json({
                'success': true,
                'results': results
            });
        })
        // Handle any errors
        .catch(error => {
            res.json({
                'success': false,
                'error': error
            });
        });
});

module.exports = router;