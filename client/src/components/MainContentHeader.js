import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainContentHeader(props) {
  const style = {color: props.color};
  return (
    <h1 className="pt-2 pb-3 pl-4">
      <FontAwesomeIcon icon={props.icon} className="mx-3" color={props.color} />
      {props.title}
      <span style={style}>{props.keywords}</span>
    </h1>
  );
}

export default MainContentHeader;