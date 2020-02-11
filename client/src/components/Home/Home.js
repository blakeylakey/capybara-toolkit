import React from "react";

// Components
import { Container, Row } from "react-bootstrap";
import HomeHero from "./HomeHero";
import HomeOurTools from "./HomeOurTools";
import HomeStartNow from "./HomeStartNow";

function Home(props) {
  return (
    <Container fluid id="content-area">
      <Row>
        <HomeHero />
      </Row>
      <HomeOurTools />
      <HomeStartNow />
    </Container>
  );
}

export default Home;
