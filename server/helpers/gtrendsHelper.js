const googleTrends = require('google-trends-api');

function gtrends(keywords) {
    var d = new Date();
    d.setMonth(d.getMonth() - 12);
    return googleTrends.interestOverTime({
        keyword: keywords.join(' '),
        startTime: d,
        property: 'froogle'
    });
}

module.exports = gtrends;