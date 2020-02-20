import React from "react";

import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeHero() {
  const navStyle = {
    textDecoration: "none"
  };
  return (
    <Jumbotron fluid id="hero-jumbotron">
      <Container className="text-center pt-5">
        <h1>
          Free, easy to use Amazon toolkit so you can understand your keywords,
          research your niche, and optimize your listing
        </h1>
        <p className="text-muted">
          Easy-to-use, free Amazon toolkit to help you research the products and
          listings
        </p>
        <Row>
          <Col sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
            <Row className="text-center">
              <Col sm={12} md={4} className="py-2">
                <Link to="/tools/pdb" style={navStyle}>
                  <Button variant="primary" className="hero-buttons">
                    product keywords
                  </Button>
                </Link>
              </Col>
              <Col sm={12} md={4} className="py-2">
                <Link to="/tools/niche" style={navStyle}>
                  <Button variant="primary" className="hero-buttons">
                    niche explorer
                  </Button>
                </Link>
              </Col>
              <Col sm={12} md={4} className="py-2">
                <Link to="/tools/la" style={navStyle}>
                  <Button variant="primary" className="hero-buttons">
                    listing analysis
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <img
          src="/hero-lite.png"
          id="hero-lite"
          alt="MacBook Capybara Results"
        />
      </Container>
    </Jumbotron>
  );
}

export default HomeHero;
