import React from "react";

import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

function HomeHero() {
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
                <Button
                  variant="primary"
                  className="hero-buttons"
                  href="/tools/pdb"
                >
                  product keywords
                </Button>
              </Col>
              <Col sm={12} md={4} className="py-2">
                <Button
                  variant="primary"
                  className="hero-buttons"
                  href="/tools/niche"
                >
                  niche explorer
                </Button>
              </Col>
              <Col sm={12} md={4} className="py-2">
                <Button
                  variant="primary"
                  className="hero-buttons"
                  href="/tools/la"
                >
                  listing analysis
                </Button>
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
