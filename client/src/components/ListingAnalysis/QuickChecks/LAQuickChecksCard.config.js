export const quickChecks = {
    titleLength: {
        title: "Title Length",
        description: () => (`Max Length: 256`)
    },
    descLength : {
        title: "Description Length",
        description: () => (`Max Length: 2000`)
    },
    avgFeatLength : {
        title: "Feature Length",
        description: () => (`Max Length: 500`)
    },
    imgCount : {
        title: "Images Count",
        description: () => (`Max Images: 9`)
    },
    revScore : {
        title: "Review Score",
        description: (counted) => (`${counted} reviews counted`)
    },
    bsrRank: {
        title: "Best Sellers Rank",
        description: (category) => (`in ${category}`)
    }
}