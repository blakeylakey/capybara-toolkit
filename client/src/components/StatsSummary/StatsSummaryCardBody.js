import React from "react";
import { Card, Row } from "react-bootstrap";

import StatsSummaryCardBodyElem from "./StatsSummaryCardBodyElem";

function StatsSummaryCardBody(props) {
  return (
    <Card.Body className="text-center">
      <Row>
        {props.data.map(elem => 
            <StatsSummaryCardBodyElem title={elem.title} value={elem.value} wide={props.wide}/>
        )}
      </Row>
    </Card.Body>
  );
}

export default StatsSummaryCardBody;