import React from "react";
import MainContent from "../MainContent";

// Components
import NicheForm from "./NicheForm/NicheForm";
import MainContentHeader from "../MainContentHeader";

function NicheSearchContent() {
  return (
    <MainContent>
      <MainContentHeader
        icon={"map-signs"}
        color={"#8A5B35"}
        title={"Niche Explorer Advanced Search Tool"}
      />
      <NicheForm />
    </MainContent>
  );
}

export default NicheSearchContent;
