import React from "react";

import StatsSummaryCard from "../StatsSummary/StatsSummaryCard";

function NicheStatsSummaryCard(props) {
  const toolHelperContent =
    "Summary statistics for the results product database query. Represents the averages of all products return from database based upon the products relationship with the searched keyphrase.";

  let dataSet = props.success ? [
    { title: "Number of Results", value: props.data.numProducts },
    {
      title: "Avg. Price",
      value: props.data.avgPrice
    },
    {
      title: "Avg. Number of Reviews",
      value: props.data.avgReviewCount
    },
    {
      title: "Avg. Review Score",
      value: props.data.avgReviewScore
    },
    {
      title: "Avg. BSR Rank",
      value: props.data.avgBSR
    },
    { title: "Avg. Daily Sales", value: props.data.avgSales }
  ] : [];
  
  return (
    <StatsSummaryCard
      title="Results Statistics Summary"
      toolHelper={toolHelperContent}
      data={dataSet}
      wide={true}
    />
  );
}

export default NicheStatsSummaryCard;
