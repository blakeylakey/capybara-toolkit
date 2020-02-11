import React from "react";
import { ListGroup } from "react-bootstrap";

function PDBRelatedQueriesLinks(props) {
  return (
    <ListGroup.Item key={props.idx}>
      <span className="mr-4">
        <strong>{props.idx + props.bottom + 1}</strong>
      </span>
      <span>
        <a
          href={"/tools/pdb/results/?keywords=" + props.query.replace(" ", "+")}
          className="RelatedQueriesLink"
        >
          {props.query}
        </a>
      </span>
      <span className="pull-right TextFaded">{props.value}</span>
    </ListGroup.Item>
  );
}

export default PDBRelatedQueriesLinks;
