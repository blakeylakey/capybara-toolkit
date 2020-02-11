import React from "react";

import { Row, Col, Button, Container, Jumbotron } from "react-bootstrap";

function HomeStartNow() {
  return (
    <Row>
      <Jumbotron fluid id="home-start-now">
        <Container className="text-center py-5 my-5">
          <Row>
            <Col>
              <h1 className="text-dark">
                What are you waiting for? Getting started for free{" "}
                <span className="font-italic">today</span>.
              </h1>
              <p className="text-muted">
                What do you have to lose? It's{" "}
                <span className="font-italic">free</span>
              </p>
              <Row>
                <Col sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                  <Row className="text-center">
                    <Col sm={12} md={4} className="py-2">
                      <Button
                        variant="primary"
                        className="start-now-buttons"
                        href="/tools/pdb"
                      >
                        product keywords
                      </Button>
                    </Col>
                    <Col sm={12} md={4} className="py-2">
                      <Button
                        variant="primary"
                        className="start-now-buttons"
                        href="/tools/niche"
                      >
                        niche explorer
                      </Button>
                    </Col>
                    <Col sm={12} md={4} className="py-2">
                      <Button
                        variant="primary"
                        className="start-now-buttons"
                        href="/tools/la"
                      >
                        listing analysis
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Row>
  );
}

export default HomeStartNow;
