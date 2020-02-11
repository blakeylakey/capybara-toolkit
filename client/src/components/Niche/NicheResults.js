import React from "react";

// Components
import NicheMainContent from "./NicheMainContent";
import { nicheResults } from "./NicheResults.defaults";
import ErrorModal from "../ErrorModal";

class NicheResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      params: this.props.params,
      nicheQueryResults: nicheResults,
      isErrored: false
    };
  }

  componentDidMount() {
    // Niche Query API
    let filters = [
      `bsr_range_max=${this.props.params.bsr_range_max}`,
      `bsr_range_min=${this.props.params.bsr_range_min}`,
      `daily_units_range_max=${this.props.params.daily_units_range_max}`,
      `daily_units_range_min=${this.props.params.daily_units_range_min}`,
      `price_range_max=${this.props.params.price_range_max}`,
      `price_range_min=${this.props.params.price_range_min}`,
      `review_count_range_max=${this.props.params.review_count_range_max}`,
      `review_count_range_min=${this.props.params.review_count_range_min}`
    ].join("&");

    let keywords = [
      `include_keywords=${this.props.params.include_keywords
        .split(" ")
        .join("+")}`,
      `exclude_keywords=${this.props.params.exclude_keywords
        .split(" ")
        .join("+")}`
    ].join("&");

    let categories = [];
    let entries = Object.entries(this.props.params);
    for (const [prop] of entries) {
      if (prop.substring(0, 8) === "form_cat") {
        categories.push(prop.substring(9, prop.length));
      }
    }
    categories =
      categories.length > 0
        ? `categories=${categories.join(",")}`
        : `categories=${Array.from(Array(40).keys()).join(",")}`;

    let params = [categories, filters, keywords].join("&");
    fetch(`/tools/niche/nichequery?${params}`)
      .then(results => results.json())
      .then(results => {
        if (results.success) {
          this.setState({
            nicheQueryResults: results
          });
        } else {
          this.setState({isErrored: true});
        }
      });
  }

  render() {
    return (
      <>
        <ErrorModal isErrored={this.state.isErrored} />
        <NicheMainContent nicheQueryResults={this.state.nicheQueryResults} />
      </>
    );
  }
}

export default NicheResults;
