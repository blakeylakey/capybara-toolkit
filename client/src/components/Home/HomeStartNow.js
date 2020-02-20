import React from "react";

import { Row, Col, Button, Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeStartNow() {
  const navStyle = {
    textDecoration: "none"
  };
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
                    <Link to="/tools/pdb" style={navStyle}>
                        <Button variant="primary" className="start-now-buttons">
                          product keywords
                        </Button>
                      </Link>
                    </Col>
                    <Col sm={12} md={4} className="py-2">
                      <Link to="/tools/niche" style={navStyle}>
                        <Button variant="primary" className="start-now-buttons">
                          niche explorer
                        </Button>
                      </Link>
                    </Col>
                    <Col sm={12} md={4} className="py-2">
                      <Link to="/tools/la" style={navStyle}>
                        <Button variant="primary" className="start-now-buttons">
                          listing analysis
                        </Button>
                      </Link>
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
