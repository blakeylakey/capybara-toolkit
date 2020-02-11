import React from "react";
import { Row, Col } from "react-bootstrap";

import MainContentHeader from "../MainContentHeader";
import MainContent from "../MainContent";
import SearchBar from "../SearchBar";
import PDBSeasonalityCard from "./PDBSeasonalityCard";
import PDBRelatedQueriesCard from "./RelatedQueries/PDBRelatedQueriesCard";
import PDBStatsSummaryCard from "./PDBStatsSummaryCard";
import DataCard from "../DataCard/DataCard";

function PDBMainContent(props) {
  return (
    <MainContent>
      <MainContentHeader
        icon="database"
        color="#168E97"
        title="Product Keyword DB Results for: "
        keywords={props.params.keywords}
      />
      <SearchBar
        action={"/tools/pdb/results"}
        placeholder={"Enter keywords or keyphrases to search..."}
        name={"keywords"}
      />
      <Row>
        <Col>
          <PDBSeasonalityCard data={props.gtrendsResults} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="mt-3" lg={6} md={12} sm={12}>
          <PDBRelatedQueriesCard data={props.grelatedResults} />
        </Col>
        <Col className="mt-3" lg={6} md={12} sm={12}>
          <PDBStatsSummaryCard
            data={props.pdbQueryResults.results.summary}
            success={props.pdbQueryResults.success}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <DataCard
            data={props.pdbQueryResults.results.data}
            success={props.pdbQueryResults.success}
            maxRows={200}
            minHeight={400}
          />
        </Col>
      </Row>
    </MainContent>
  );
}

export default PDBMainContent;
