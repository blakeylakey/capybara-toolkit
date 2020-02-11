import React from "react";
import { Row, Col } from "react-bootstrap";

import NicheFormCategoriesListing from "./NicheFormCategoriesListing";

function NicheFormCategoriesList(props) {
  return (
    <Row className="mx-2">
      <Col xs={12} md={6} className="my-2 h100">
        {props.categories.map((el, idx) => {
          if (idx % 2 === 0) {
            return <NicheFormCategoriesListing idx={idx} value={el} />;
          }
          return null;
        })}
      </Col>
      <Col xs={12} md={6} className="my-2 h100">
        {props.categories.map((el, idx) => {
          if (idx % 2 === 1) {
            return <NicheFormCategoriesListing idx={idx} value={el} />;
          }
          return null;
        })}
      </Col>
    </Row>
  );
}

export default NicheFormCategoriesList;
