export const laResults = {
  success: false,
  results: {
    screenshot: "",
    productInfo: {
      pageTitle: "",
      features: [],
      description: "",
      altImgsCount: 0,
      reviewScore: 0,
      reviewCount: 0,
      productDetails: [],
      bsr: [],
      keyphrases: []
    },
    checks: {
      titleLength: { value: 0 },
      descLength: { value: 0 },
      avgFeatLength: { value: 0 },
      imgCount: { value: 0 },
      revScore: { value: 0, info: null },
      bsrRank: { value: 0, info: null }
    }
  }
};

export const laRelated = { success: false, results: [] };
