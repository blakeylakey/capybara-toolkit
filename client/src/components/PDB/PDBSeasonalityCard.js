import React from "react";

// Components
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import ToolHelper from "../ToolHelper";
import { configData, configOptions } from "./PDBSeasonalityCard.config";

function PDBSeasonalityCard(props) {
  const toolHelperContent =
    "Keyword seasonality as measured by Google Trends Data. Should be used to approximate the popularity over time for a given keyword. Popularity values are measured relative to their maximum over the time period (a value of 100 represents the most popular time for a given keyword whereas a value of 0 represents the least popular time for a given keyword).";

  let labelArray = [];
  let dataArray = [];
  let data;

  if (props.data.success) {
    labelArray = props.data.results.data.map(
      elem => new Date(elem.timeInt * 1000)
    );
    dataArray = props.data.results.data.map(elem => elem.value);
    data = configData(labelArray, dataArray);
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Keyword Seasonality (last 12 Months)
          <ToolHelper id="PDBSeasonalityCard" content={toolHelperContent} />
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Line data={data} options={configOptions} height={100} />
      </Card.Body>
    </Card>
  );
}

export default PDBSeasonalityCard;
