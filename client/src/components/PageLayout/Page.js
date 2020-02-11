import React from "react";
import queryString from "query-string";

import PageLayout from "./PageLayout";

import PDBSearchContent from "../PDB/PDBSearchContent";
import PDBResults from "../PDB/PDBResults";
import NicheSearchContent from "../Niche/NicheSearchContent";
import NicheResults from "../Niche/NicheResults";
import LASearchContent from "../ListingAnalysis/LASearchContent";
import LAResults from "../ListingAnalysis/LAResults";
import Home from "../Home/Home";

function Page (props) {
    const params = queryString.parse(props.location.search);
    const components = {
        "pdbSearch" : <PDBSearchContent />,
        "pdb" : <PDBResults params={params}/>,
        "nicheSearch" : <NicheSearchContent />,
        "niche" : <NicheResults params={params} />,
        "laSearch" : <LASearchContent />,
        "la" : <LAResults params={params} />,
        "home" : <Home />
    }

    return (
        <PageLayout noSidebar={props.noSidebar} active={props.active}>
            {components[props.active]}
        </PageLayout>
    );
}

export default Page;