import React from "react";

import { Card } from "react-bootstrap";
import ToolHelper from "../../ToolHelper";

function LAScreenShotHeader(props) {
  return (
    <Card.Header>
      <Card.Title>
        {props.title}
        <ToolHelper content={props.content} />
      </Card.Title>
    </Card.Header>
  );
}

export default LAScreenShotHeader;