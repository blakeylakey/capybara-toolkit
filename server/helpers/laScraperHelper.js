const puppeteer = require("puppeteer");

function laBrowser(asin) {
  const now = Date.now();
  return puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--window-size=1920,1080",
      '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
    ]
  });
}

/* 
  Scraper needs more work
  Lots of differences between the types of products on amazon 
    have different results when scraped, they just need to be ironed out
    plus hella try catch statements is also not great
*/

function laScraper() {
  var pageTitle,
    features,
    formattedFeatures,
    description,
    altImgsCount,
    reviewScore,
    reviewCount,
    productDetails,
    bsr,
    cats;

  // Product Title
  try {
    pageTitle = document.querySelector("#productTitle").innerText;
  } catch (error) {
    pageTitle = '';
  }

  // Product Features
  try {
    features = document.body.querySelectorAll(
      "#feature-bullets ul li:not(.aok-hidden)"
    );
    formattedFeatures = [];

    features.forEach(feature => {
      formattedFeatures.push(feature.innerText);
    });
  } catch (error) {
    formattedFeatures = [];
  }

  // Gets description, doesn't work for trademarked products since they have a fancy description
  try {
    description = document.querySelector("#productDescription").innerText;
  } catch (error) {
    description = '';
  }

  // Counts the number of product images
  try {
    altImgsCount = document.querySelectorAll(
      "#altImages ul .imageThumbnail"
    ).length;
  } catch (error) {
    altImgsCount = 0;
  }

  // Gets the star rating
  try {
    reviewScore = parseFloat(
      document
        .querySelector("#averageCustomerReviews .a-icon-alt")
        .innerText.split(" ")[0]
    );
  } catch (error) {
    reviewScore = 0;
  }

  // Gets the number of reviews
  try {
    reviewCount = parseFloat(
      document
        .querySelector("#acrCustomerReviewText")
        .innerText.split(" ")[0]
    );
  } catch (error) {
    reviewCount = 0;
  }

  // Gets the product details, sometimes fails because of differences with product detail infromation
  // pulls bsr and category specifically
  try {
    productDetails = document.querySelectorAll(
      "#productDetails_detailBullets_sections1 tr"
    );
    cats = [];
    productDetails.forEach(el => {
      if (el.querySelector("th").innerText === "Best Sellers Rank") {
        bsr = el
          .querySelector("td")
          .innerText.split(/\r?\n/)
          .forEach(cat => {
            cats.push(cat.replace(/ *\([^)]*\) */g, "").split(" in "));
          });
      }
    });
  } catch (error) {
    bsr = [];
    productDetails = {};
  }

  return {
    pageTitle: pageTitle,
    features: formattedFeatures,
    description: description,
    altImgsCount: altImgsCount,
    reviewScore: reviewScore,
    reviewCount: reviewCount,
    productDetails: productDetails,
    bsr: cats
  };
}

module.exports = {
  laBrowser: laBrowser,
  laScraper: laScraper
};
