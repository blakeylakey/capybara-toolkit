import React from "react";

// Bootstrap Components
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import NicheFormCategories from "./NicheFormCategories";
import NicheFormFilters from "./NicheFormFilters";
import NicheFormKeywords from "./NicheFormKeywords";

import "react-input-range/lib/css/index.css";

function NicheForm() {
  return (
    <Form action="/tools/niche/results" method="get">
      <Container fluid>
        <Row>
          <Col md={12} lg={12} xl={6}>
            <NicheFormCategories />
          </Col>

          <Col md={12} lg={12} xl={6}>
            <NicheFormFilters />
            <NicheFormKeywords />
            <Button type="submit" variant="primary" id="niche-form-button">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
export default NicheForm;
