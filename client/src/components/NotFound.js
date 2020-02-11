import React from "react";

// Components
import NavigationTopBar from "./NavBars/NavigationTopBar";
import { Container, Row, Col } from "react-bootstrap";
import FooterContent from "./FooterContent";

function NotFound(props) {
  const title = props.error ? 'Something went wrong' : '404';
  const id = props.error ? 'errored-header' : 'not-found-header';
  return (
    <div id="content">
      <NavigationTopBar noShadow />
      <div className="d-flex" style={{ height: "100vh" }}>
        <Container className="my-auto">
          <Row>
            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 8, offset: 2 }}
            >
              <h1 className="text-center" id={id}>
                {title}
              </h1>
              <a href="/">
                <p className="text-center text-light" id="not-found-p">
                  Click to return to homepage
                </p>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterContent noMarginTop />
    </div>
  );
}

export default NotFound;
