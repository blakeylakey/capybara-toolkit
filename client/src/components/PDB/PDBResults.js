import React from "react";

// Components
import PDBMainContent from "./PDBMainContent";
import {
  pdbQueryResults,
  gtrendsResults,
  grelatedResults
} from "./PDBResults.defaults";
import ErrorModal from "../ErrorModal";

class PDBResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pdbQueryResults: pdbQueryResults,
      grelatedResults: gtrendsResults,
      gtrendsResults: grelatedResults,
      isErrored: false
    };
  }

  componentDidMount() {
    // PDB Query API
    fetch(`/tools/pdb/pdbquery?keywords=${this.props.params.keywords}`)
      .then(results => results.json())
      .then(results => {
        if (results.success) {
          this.setState({
            pdbQueryResults: results
          });
        } else {
          this.setState({isErrored: true});
        }
      });
    // Google Related Queries API
    fetch(`/tools/pdb/grelated?keywords=${this.props.params.keywords}`)
      .then(results => results.json())
      .then(results => {
        if (results.success) {
          this.setState({
            grelatedResults: results
          });
        } else {
          this.setState({isErrored: true});
        }
      });
    // Google Trends API
    fetch(`/tools/pdb/gtrends?keywords=${this.props.params.keywords}`)
      .then(results => results.json())
      .then(results => {
        if (results.success) {
          this.setState({
            gtrendsResults: results
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
        <PDBMainContent
          params={this.props.params}
          pdbQueryResults={this.state.pdbQueryResults}
          grelatedResults={this.state.grelatedResults}
          gtrendsResults={this.state.gtrendsResults}
        />
      </>
    );
  }
}

export default PDBResults;
