import React from "react";
import { Card } from "react-bootstrap";
import ToolHelper from "../ToolHelper";


function DataCardHeader(props) {
  const toolHelperContent =
    "Product database results summarizing each product by ASIN.";

  return (
    <Card.Header>
      <Card.Title>
        {props.title}
        <ToolHelper id="DataCard" content={toolHelperContent} />
      </Card.Title>
    </Card.Header>
  );
}

export default DataCardHeader;
