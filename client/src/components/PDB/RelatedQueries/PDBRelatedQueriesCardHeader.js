import React from "react";
import ToolHelper from "../../ToolHelper";
import { Card, Nav, NavDropdown } from "react-bootstrap";

function PDBRelatedQueriesCardHeader(props) {
  const toolHelperContent =
    "Related Keyphrases from Google Trends data. Top keyphrases represents the top related keyphrases from the past 12 months. Rising keyphrases represents the fastest growing keyphrases from the past 12 months.";
  return (
    <Card.Header>
      <Card.Title className="">
        <Nav variant="pills" activeKey="1" className="m-0">
          Related Keyphrases
          <NavDropdown
            title={props.active}
            id="nav-dropdown"
            className="pdbrelated-dropdown-menu ml-auto mr-4"
          >
            <NavDropdown.Item
              className="pdbrelated-dropdown-item"
              onClick={props.handler}
              id="Top"
            >
              Top
            </NavDropdown.Item>
            <NavDropdown.Item
              className="pdbrelated-dropdown-item"
              onClick={props.handler}
              id="Rising"
            >
              Rising
            </NavDropdown.Item>
          </NavDropdown>
          <ToolHelper
            id="PDBRelatedQueriesCard"
            content={toolHelperContent}
            ml
          />
        </Nav>
      </Card.Title>
    </Card.Header>
  );
}

export default PDBRelatedQueriesCardHeader;
