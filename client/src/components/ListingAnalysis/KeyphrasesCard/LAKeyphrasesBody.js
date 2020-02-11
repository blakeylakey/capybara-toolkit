import React from "react";

import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LAKeyphrasesBody(props) {
  return (
    <Card.Body>
      <ListGroup variant="flush">
        {props.data.map((elem, idx) => (
          <ListGroup.Item key={idx}>
            <span className="mr-4">
              <strong>{idx + 1 + props.bottom}</strong>
            </span>
            <span>
              <a
                href={`/tools/pdb/results/?keywords=${elem.replace(/ /g, "+")}`}
                className="RelatedQueriesLink"
              >
                {elem}
              </a>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="text-center mt-3">
        <FontAwesomeIcon
          className="mr-3"
          icon="chevron-left"
          onClick={props.handlePrev}
        />
        <span>
          Showing {Math.min(props.bottom + 1, props.max)}-
          {Math.min(props.top, props.max)} of {props.max} keyphrases
        </span>
        <FontAwesomeIcon
          className="ml-3"
          icon="chevron-right"
          onClick={props.handleNext}
        />
      </div>
    </Card.Body>
  );
}

export default LAKeyphrasesBody;
