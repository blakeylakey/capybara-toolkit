import React from "react";
import { sortRows, getRows, handleFilterChange } from "./DataCard.helper";
import DataCardHeader from "./DataCardHeader";
import DataCardBody from "./DataCardBody";

// Bootstrap Components
import { Card } from "react-bootstrap";

// Actual Card Logic
class DataCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filters: {}
    };

    this.handleSort = this.handleSort.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.success !== prevProps.success) {
      this.setState({
        data: this.props.data
      });
    }
  }

  handleSort(sortColumn, sortDirection, filteredRows) {
    this.setState({
      data: sortRows(this.props.data, sortColumn, sortDirection)(filteredRows)
    });
  }

  handleFilters(filter) {
    this.setState({
      filters: handleFilterChange(filter)(this.state.filters)
    });
  }

  clearFilters() {
    this.setState({ filters: {} });
  }

  render() {
    let rows = this.props.success
      ? this.state.data.map((el, idx) => ({
          id: el.id,
          asin: el.asin,
          title: el.title,
          brand: el.brand,
          price: el.price,
          category: el.category,
          rank: el.rank,
          review_count: el.review_count,
          review_score: el.review_score,
          date_listed: el.date_listed,
          features: el.features,
          est_sales: el.est_sales,
          est_rev: el.est_rev
        }))
      : [];

    let filteredRows = getRows(rows, this.state.filters);

    return (
      <Card className="mt-3">
        <DataCardHeader title={"Keyword Product Database Results"} />
        <DataCardBody
          filteredRows={filteredRows}
          minHeight={this.props.minHeight}
          maxRows={this.props.maxRows}
          handleSort={this.handleSort}
          handleFilters={this.handleFilters}
          clearFilters={this.clearFilters}
        />
      </Card>
    );
  }
}

export default DataCard;
