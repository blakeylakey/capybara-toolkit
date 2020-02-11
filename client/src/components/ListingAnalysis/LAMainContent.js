import React from "react";

// Components
import { Row, Col } from "react-bootstrap";
import LAScreenShotCard from "./ScreenshotCard/LAScreenShotCard";
import LAQuickChecksCard from "./QuickChecks/LAQuickChecksCard";
import LAKeyphrasesCard from "./KeyphrasesCard/LAKeyphrasesCard";
import DataCard from "../DataCard/DataCard";
import MainContent from "../MainContent";
import MainContentHeader from "../MainContentHeader";

function LAMainContent(props) {
  return (
    <MainContent>
      <MainContentHeader
        icon={"chart-line"}
        color={"#137F68"}
        title={"Product Listing Anaylsis ToolKit Results for: "}
        keywords={props.params.asin}
      />
      <Row>
        <Col xs={12}>
          <LAScreenShotCard
            screenshot={props.laResults.results.screenshot}
            productInfo={props.laResults.results.productInfo}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mt-3" lg={6} md={12} sm={12}>
          <LAQuickChecksCard
            checks={props.laResults.results.checks}
            success={props.laResults.success}
          />
        </Col>

        <Col className="mt-3" lg={6} md={12} sm={12}>
          <LAKeyphrasesCard
            productInfo={props.laResults.results.productInfo}
            success={props.laResults.success}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DataCard
            data={props.laRelated.results}
            success={props.laRelated.success}
            maxRows={100}
            minHeight={400}
          />
        </Col>
      </Row>
    </MainContent>
  );
}

export default LAMainContent;
