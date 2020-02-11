const googleTrends = require('google-trends-api');

function grelated(keywords) {
    var d = new Date();
    d.setMonth(d.getMonth() - 12);
    return googleTrends.relatedQueries({
        keyword: keywords.join(' '),
        startTime: d,
        property: 'froogle'
    });
}

module.exports = grelated;