import React from "react";
import { Card } from "react-bootstrap";
import ReactDataGrid from "react-data-grid";
import { Toolbar } from "react-data-grid-addons";
import { columns } from "./DataCard.helper";

function DataCardBody(props) {
  return (
    <Card.Body id="PDBDataCardBody">
      <ReactDataGrid
        columns={columns}
        rowGetter={i => props.filteredRows[i]}
        rowsCount={Math.min(props.maxRows, props.filteredRows.length)}
        minHeight={props.minHeight}
        toolbar={<Toolbar enableFilter={true} />}
        onGridSort={(sortColumn, sortDirection) =>
          props.handleSort(sortColumn, sortDirection, props.filteredRows)
        }
        onAddFilter={filter => props.handleFilters(filter)}
        onClearFilters={() => props.clearFilters()}
      />
    </Card.Body>
  );
}

export default DataCardBody;
