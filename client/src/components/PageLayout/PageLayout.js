import React from "react";
import {Container, Row } from "react-bootstrap";
import NavigationSideBar from "../NavBars/NavigationSideBar";

function PageLayout(props) {
  const sideBar = props.noSidebar ? null : <NavigationSideBar active={props.active}/>;
  return (
    <>
      <Container fluid id="content-area">
        <Row>
          {sideBar}
          {props.children}
        </Row>
      </Container>
    </>
  );
}

export default PageLayout;