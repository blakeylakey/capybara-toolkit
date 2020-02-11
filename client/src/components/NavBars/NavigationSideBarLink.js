import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavigationSideBarLink(props) {
  const active = props.active ? "active " : "";
  const style = {color: props.color};

  return (
    <li className="nav-item mt-2 sidebar-nav-item">
      <a className={active + "nav-link sidebar-nav-link"} href={props.href} style={style}>
        <FontAwesomeIcon
          icon={props.icon}
          className="mx-3"
          color={props.color}
        />
        {props.title}
      </a>
    </li>
  );
}

export default NavigationSideBarLink;