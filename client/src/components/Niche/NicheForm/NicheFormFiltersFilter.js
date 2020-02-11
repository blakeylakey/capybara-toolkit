import React from "react";

import { Col, Form } from "react-bootstrap";
import InputRange from "react-input-range";

function NicheFormFiltersFilter(props) {
  return (
    <>
      <Col sm={12} className="my-2 h100">
        <p className="pb-1">{props.filter.title}</p>
        <InputRange
          draggableTrack
          maxValue={props.filter.range.max}
          minValue={props.filter.range.min}
          value={props.filter.value}
          onChange={value => props.handler(props.filter.name, value)}
          formatLabel={value => props.filter.format(value)}
        />
      </Col>

      <Form.Control
        type="text"
        name={`${props.filter.name}_min`}
        value={props.filter.value.min}
        style={{ display: "none" }}
      />
      <Form.Control
        type="text"
        name={`${props.filter.name}_max`}
        value={props.filter.value.max}
        style={{ display: "none" }}
      />
    </>
  );
}

export default NicheFormFiltersFilter;
