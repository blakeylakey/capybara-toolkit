import React from "react";

// Bootstrap Components
import { Row, Col } from "react-bootstrap";
import ToolHelper from "../../ToolHelper";
import { filters } from "./NicheFormFilters.config";
import NicheFormFiltersFilter from "./NicheFormFiltersFilter";

import "react-input-range/lib/css/index.css";

class NicheFormFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: filters
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(name, value) {
    this.setState(state => {
      let tempFilters = state.filters;
      tempFilters[name].value = value;
      return { filters: tempFilters };
    });
  }

  render() {
    const filterToolTip =
      "Use Product filters to select products within certain ranges and values. All values are reported on using their daily average when applicable, otherwise they are using the most applicable value.";

    return (
      <div className="pb-3">
        <Row>
          <Col>
            <h3>
              Product Filters
              <ToolHelper id={"product_filters"} content={filterToolTip} />
            </h3>
          </Col>
        </Row>

        <Row className="mx-2 mr-5">
          {Object.keys(this.state.filters).map((key, idx) => {
            return (
              <NicheFormFiltersFilter
                filter={this.state.filters[key]}
                handler={this.handleFilterChange}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

export default NicheFormFilters;
