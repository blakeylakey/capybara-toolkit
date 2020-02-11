import React from "react";

import MainContentHeader from "../MainContentHeader";
import { Row, Col } from "react-bootstrap";
import DataCard from "../DataCard/DataCard";
import NicheStatsSummaryCard from "./NicheStatsSummaryCard";
import MainContent from "../MainContent";

function NicheMainContent(props) {
  return (
    <MainContent>
      <MainContentHeader
        icon="map-signs"
        color="#8A5B35"
        title="Niche Explorer Advanced Search Tool Results"
      />
      <Row>
        <Col>
          <NicheStatsSummaryCard
            data={props.nicheQueryResults.results.summary}
            success={props.nicheQueryResults.success}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataCard
            data={props.nicheQueryResults.results.data}
            success={props.nicheQueryResults.success}
            maxRows={250}
            minHeight={750}
          />
        </Col>
      </Row>
    </MainContent>
  );
}

export default NicheMainContent;
