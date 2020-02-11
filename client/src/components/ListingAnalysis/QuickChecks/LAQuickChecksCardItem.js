import React from "react";

import { Col } from "react-bootstrap";

function LAQuickChecksCardItem(props) {
  return (
    <Col xs={12} md={6}>
      <h1>{props.value.value}</h1>
      <p>
        {props.title}
        <br />
        <small>{props.description(props.value.info)}</small>
      </p>
    </Col>
  );
}

export default LAQuickChecksCardItem;