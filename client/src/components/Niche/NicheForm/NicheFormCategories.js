import React from "react";

// Bootstrap Components
import { Row, Col } from "react-bootstrap";
import ToolHelper from "../../ToolHelper";

import { categories } from "./NicheFormCategories.config";
import NicheFormCategoriesList from "./NicheFormCategoriesList";


function NicheFormCategories() {
  const catHelper =
    "Select the product categories you would like to explore in. Filter products returned by including the categories you are interested in.";
  return (
    <div className="pb-3">
      <Row>
        <Col>
          <h3>
            Product Categories
            <ToolHelper id="product-categories-helper" content={catHelper} />
          </h3>
        </Col>
      </Row>

      <NicheFormCategoriesList categories={categories} />
    </div>
  );
}

export default NicheFormCategories;
