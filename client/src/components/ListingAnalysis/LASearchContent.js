import React from "react";

// Components
import SearchBar from "../SearchBar";
import MainContent from "../MainContent";
import MainContentHeader from "../MainContentHeader";

class LASearchContent extends React.Component {
  render() {
    return (
      <MainContent>
        <MainContentHeader
          icon={"chart-line"}
          color={"#137F68"}
          title={"Product Listing Anaylsis ToolKit"}
        />
        <SearchBar
          action={"/tools/la/results"}
          placeholder={"Enter asin to analyze..."}
          name={"asin"}
        />
        <p className="text-muted pl-4 ExampleSearches">
          <small>
            e.g. B00SM2NVB8, B07V9QC7C7, B07VN3C1CZ, B074LRF639, B07QST8Q3P...
          </small>
        </p>
      </MainContent>
    );
  }
}

export default LASearchContent;
