import React from "react";

import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(faChevronRight);
fontawesome.library.add(faChevronLeft);

function PDBRelatedQueriesShowing(props) {
  return (
    <div className="text-center mt-3">
      <FontAwesomeIcon
        className="mr-3"
        icon="chevron-left"
        onClick={props.prevOnClick}
      />
      <span>
        Showing {Math.min(props.bottom + 1, props.length)}-
        {Math.min(props.top, props.length)} of {props.length} queries
      </span>
      <FontAwesomeIcon
        className="ml-3"
        icon="chevron-right"
        onClick={props.nextOnClick}
      />
    </div>
  );
}

export default PDBRelatedQueriesShowing;
