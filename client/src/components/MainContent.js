import React from "react";

function MainContent(props) {
    return(
        <main className="col-md-9 col-sm-9 p-4 PDBMainContent">
            {props.children}
        </main>
    );
}

export default MainContent;