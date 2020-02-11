import React from "react";

import LAMainContent from "./LAMainContent";
import { laResults, laRelated } from "./LAResults.defaults";
import ErrorModal from "../ErrorModal";

class LAResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      laResults: laResults,
      laRelated: laRelated,
      isErrored: false
    };
  }

  componentDidMount() {
    // Niche Query API
    let params = `asin=${this.props.params.asin}`;

    fetch(`/tools/la/lascrape?${params}`)
      .then(results => results.json())
      .then(results => {
        if (results.success) {
          this.setState({
            laResults: results
          });
        } else {
          this.setState({ isErrored: true });
        }
      });

    fetch(`/tools/la/laquery?${params}`)
      .then(results => results.json())
      .then(results => {
        if (results.success) {
          this.setState({
            laRelated: results
          });
        } else {
          this.setState({ isErrored: true });
        }
      });
  }

  render() {
    return (
      <>
        <ErrorModal isErrored={this.state.isErrored} />
        <LAMainContent
          laResults={this.state.laResults}
          params={this.props.params}
          laRelated={this.state.laRelated}
        />
      </>
    );
  }
}

export default LAResults;
