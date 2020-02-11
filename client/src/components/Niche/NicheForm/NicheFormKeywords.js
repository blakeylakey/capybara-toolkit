import React from "react";

// Bootstrap Components
import { Form, Row, Col } from "react-bootstrap";
import ToolHelper from "../../ToolHelper";

class NicheFormKeywords extends React.Component {
  render() {
    const kwToolHelper =
      "Filter the products returned by inclusion or exclusion of certain keywords. Filters based upon product title, description, features, etc.";
    return (
      <div className="py-4">
        <Row>
          <Col xs={12}>
            <h3>
              Product Keywords
              <ToolHelper id="keyword-filter" content={kwToolHelper} />
            </h3>
          </Col>
        </Row>

        <Row className="mx-2">
          <Col xs={12} md={6} className="my-2 h100">
            <Form.Label>Include Keywords</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the keywords you would like to include..."
              name="include_keywords"
            />
          </Col>
          <Col xs={12} md={6} className="my-2 h100">
            <Form.Label>Exclude Keywords</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the keywords you would like to exclude..."
              name="exclude_keywords"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NicheFormKeywords;
