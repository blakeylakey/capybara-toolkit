module.exports = function summaryHelper(data) {
  // Number of Products Returned
  let nProducts = data.length;

  // Average Number of Reviews
  let arrayReviewCount = data
    .map(el => parseInt(el.review_count))
    .filter(Boolean);
  let arrayReviewCountSum =
    arrayReviewCount.length > 0
      ? arrayReviewCount.reduce((previous, current) => (current += previous))
      : 0;
  let avgReviewCount = arrayReviewCountSum / arrayReviewCount.length;
  avgReviewCount = parseFloat(avgReviewCount.toFixed(0)).toLocaleString();

  // Average Review Score
  let arrayReviewScore = data
    .map(el => parseFloat(el.review_score))
    .filter(Boolean);
  let arrayReviewScoreSum =
    arrayReviewScore.length > 0
      ? arrayReviewScore.reduce((previous, current) => (current += previous))
      : 0;
  let avgReviewScore = arrayReviewScoreSum / arrayReviewScore.length;
  avgReviewScore = parseFloat(avgReviewScore.toFixed(1)).toLocaleString();

  // Average Price
  let arrayPrice = data.map(el => el.price);
  let arrayPriceSum =
    arrayPrice.length > 0
      ? arrayPrice.reduce((previous, current) => (current += previous))
      : 0;
  let avgPrice = arrayPriceSum / arrayPrice.length;
  avgPrice = `$${parseFloat(avgPrice.toFixed(2)).toLocaleString()}`;

  // Average BSR
  let arrayBSR = data.map(el => el.rank);
  let arrayBSRSum =
    arrayBSR.length > 0
      ? arrayBSR.reduce((previous, current) => (current += previous))
      : 0;
  let avgBSR = arrayBSRSum / arrayBSR.length;
  avgBSR = `#${parseFloat(avgBSR.toFixed(0)).toLocaleString()}`;

  // Average Sales/Day Estimated
  let arraySales = data
    .map(el => {
      let pos = el.rank;
      let p = (pos - el.minimum_range) / (el.maximum_range - el.minimum_range);
      return p * (el.maximum_sales - el.minimum_sales) + el.minimum_sales;
    })
    .filter(Boolean);
  let arraySalesSum =
    arraySales.length > 0
      ? arraySales.reduce((previous, current) => (current += previous))
      : 0;
  let avgSales = arraySalesSum / arraySales.length;
  avgSales = parseFloat(avgSales.toFixed(2)).toLocaleString();

  return {
      "numProducts": nProducts,
      "avgReviewCount": avgReviewCount,
      "avgReviewScore": avgReviewScore,
      "avgPrice": avgPrice,
      "avgBSR": avgBSR,
      "avgSales": avgSales
  }
};
