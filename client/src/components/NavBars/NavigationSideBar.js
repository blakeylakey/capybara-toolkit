import React from 'react';

// Components
import NavigationSideBarLink from "./NavigationSideBarLink";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDatabase, faMapSigns, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
library.add(faDatabase, faMapSigns, faChartLine);

function NavigationSideBar (props) {
    var active_pdb, active_niche, active_la;
    if (props.active === "pdb" || props.active === "pdbSearch") {
        active_pdb = true;
    } else if (props.active === "niche" || props.active === "nicheSearch") {
        active_niche = true;
    } else if (props.active === "la" || props.active === "laSearch") {
        active_la = true;
    }
    const navStyles = {
      textDecoration: "none"
    }
    return (
        <nav className="col-md-3 col-sm-3 hidden-xs-down bg-faded NavigationSideBar">
            <ul id="sidebar-nav" className="nav nav-pills flex-column">
                <Link style={navStyles} to="/tools/pdb">
                    <NavigationSideBarLink title={"Product Keyword DB"} icon={"database"} color={"#168E97"} active={active_pdb}/>
                </Link>
                <Link style={navStyles} to="/tools/niche">
                    <NavigationSideBarLink title={"Niche Explorer"} icon={"map-signs"} color={"#8A5B35"} active={active_niche}/>
                </Link>
                <Link style={navStyles} to="/tools/la">
                    <NavigationSideBarLink title={"Product Listing Analysis"} icon={"chart-line"} color={"#137F68"} active={active_la}/>
                </Link>
            </ul>
        </nav>
    );
}

export default NavigationSideBar;