import React from "react";

import { Card, Row, Col, Button } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function LAScreenShotBody(props) {
  return (
    <Card.Body>
      <Row>
        <Col xs={12} md={6}>
          <Card.Img
            src={props.screenshot}
            onClick={() => props.handler("isOpen")}
            id="la-screenshot-card"
          />

          {props.isOpen && (
            <Lightbox
              mainSrc={props.screenshot}
              onCloseRequest={() => props.handler("isOpen")}
            />
          )}
        </Col>

        <Col xs={12} md={6}>
          <p>
            <b>{props.title}</b>
          </p>
          <ul>
            {props.handleList().map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <span>
            <Button
              variant="link"
              onClick={() =>
                props.handler("list_isOpen")
              }
              aria-controls="example-collapse-text"
              aria-expanded={props.list_isOpen}
            >
              {props.list_isOpen ? "Show less" : "Show more"}
            </Button>
          </span>
        </Col>
      </Row>
    </Card.Body>
  );
}

export default LAScreenShotBody;
