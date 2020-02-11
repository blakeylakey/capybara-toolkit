import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

class FooterContent extends React.Component {
  render() {
    let noMarginTop = this.props.noMarginTop ? '' : 'mt-5';
    return (
      <Container fluid id="footer-content" className={`pt-3 ${noMarginTop}`}>
        <Row className="py-4">
          <Col xs={{ span: 10, offset: 1 }} >
            <Row>
              <Col xs={12} md={4}>
                <h3>Useful links</h3>
                <ListGroup className="footer-list-content">
                  <ListGroup.Item action href="/tools/pdb" className="footer-list-item">
                    Product Keyword DB
                  </ListGroup.Item>
                  <ListGroup.Item action href="/tools/niche" className="footer-list-item">
                    Niche Explorer
                  </ListGroup.Item>
                  <ListGroup.Item action href="/tools/la" className="footer-list-item">
                    Product Listing Analysis
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={4}>
                <h3>About this toolkit</h3>
                <p>
                  This toolkit was made with the intention of providing free
                  analysis for Amazon Sellers and people interested in selling
                  on Amazon.
                </p>
                <p>
                  Since this is a free product, it is not regularly updated nor
                  is it comprehensive in it's Amazon Listings. Approximately
                  3,000 products have been scraped, so if you don't find what
                  you're looking for, please check back later.
                </p>
              </Col>
              <Col xs={12} md={4}>
                  <h3>Look at my dog</h3>
                  <p>Look at my dog. He's super cute; his name is Carlos.</p>
                  <img src="/carlos.jpg" id="carlos-image" className="center" alt="Carlos the dog" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
            <Col className="text-center py-2" id="copyright-line">
              &copy; Blake
            </Col>
        </Row>
      </Container>
    );
  }
}

export default FooterContent;
