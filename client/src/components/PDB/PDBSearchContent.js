import React from "react";

// Components
import SearchBar from "../SearchBar";
import MainContent from "../MainContent";
import MainContentHeader from "../MainContentHeader";

class PDBSearchContent extends React.Component {
  render() {
    return (
      <MainContent>
        <MainContentHeader
          icon={"database"}
          color={"#168E97"}
          title={"Product Keyword DB Search Tool"}
        />
        <SearchBar
          action={"/tools/pdb/results"}
          placeholder={"Enter keywords or keyphrases to search..."}
          name={"keywords"}
        />
        <p className="text-muted pl-4 ExampleSearches">
          <small>e.g. coffee, coffee roaster, stash jar, computer...</small>
        </p>
      </MainContent>
    );
  }
}

export default PDBSearchContent;