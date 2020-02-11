import React from "react";
import { Col } from "react-bootstrap";

function StatsSummaryCardBodyElem(props) {
  let wideProps;
  if (props.wide) {
    wideProps = { lg: "4", md: "6", sm: "6", xs: "12" };
  } else {
    wideProps = { lg: "6", md: "6", sm: "6", xs: "12" };
  }

  return (
    <Col {...wideProps}>
      <h1 id="stats-summary-item">{props.value}</h1>
      <p id="stats-summary-desc">{props.title}</p>
    </Col>
  );
}

export default StatsSummaryCardBodyElem;
