import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Toolkit components
import NotFound from "./components/NotFound";
import Page from "./components/PageLayout/Page";
import ErrorBoundary from './components/ErrorBoundary';

// CSS
import "./css/Home.css";
import "./css/ListingAnalysis.css";
import "./css/NavBars.css";
import "./css/Niche.css";
import "./css/PDB.css";
import "./css/Cards.css";
import "./css/SearchBar.css";
import "./css/FooterContent.css";
import "./css/NotFound.css";
import "./css/TEMPSpacer.css"
import "./css/ErrorModal.css";

function CapybaraRouter(props) {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Page active="home" {...props} noSidebar />} />

          <Route exact path="/tools/pdb" render={(props) => <Page active="pdbSearch" {...props} />} />
          <Route path="/tools/pdb/results" render={(props) => <Page active="pdb" {...props} />} />

          <Route exact path="/tools/niche" render={(props) => <Page active="nicheSearch" {...props} />} />
          <Route path="/tools/niche/results" render={(props) => <Page active="niche" {...props} />} />

          <Route exact path="/tools/la" render={(props) => <Page active="laSearch" {...props} />} />
          <Route path="/tools/la/results" render={(props) => <Page active="la" {...props} />} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default CapybaraRouter;
