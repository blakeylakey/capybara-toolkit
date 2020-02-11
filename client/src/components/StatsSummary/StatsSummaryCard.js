import React from "react";
import { Card } from "react-bootstrap";

import StatsSummaryCardHeader from "./StatsSummaryCardHeader";
import StatsSummaryCardBody from "./StatsSummaryCardBody";

function StatsSummaryCard(props) {
  return (
    <Card className="h-100">
      <StatsSummaryCardHeader title={props.title} content={props.toolHelper} />
      <StatsSummaryCardBody data={props.data} wide={props.wide} />
    </Card>
  );
}

export default StatsSummaryCard;
