import React from "react";

import { Card, Row } from "react-bootstrap";
import ToolHelper from "../../ToolHelper";
import "react-image-lightbox/style.css";

import { quickChecks } from "./LAQuickChecksCard.config";
import LAQuickChecksCardItem from "./LAQuickChecksCardItem";

function LAQuickChecksCard(props) {
  const quickChecksToolHelper =
    "This card displays some of our quick checks using our anaylsis toolkit. There may be issues with our scraping methods depending on the ASIN, if you don't see any information or see 0s, this may be the case.";
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Product Quick Checks
          <ToolHelper
            id="quickChecksToolHelper"
            content={quickChecksToolHelper}
          />
        </Card.Title>
      </Card.Header>

      <Card.Body className="text-center">
        <Row>
          {Object.keys(quickChecks).map((key, idx) => (
            <LAQuickChecksCardItem
              key={key}
              value={props.checks[key]}
              title={quickChecks[key].title}
              description={quickChecks[key].description}
            />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default LAQuickChecksCard;
