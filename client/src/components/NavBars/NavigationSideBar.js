import React from 'react';

// Components
import NavigationSideBarLink from "./NavigationSideBarLink";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDatabase, faMapSigns, faChartLine } from "@fortawesome/free-solid-svg-icons";
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
    return (
        <nav className="col-md-3 col-sm-3 hidden-xs-down bg-faded NavigationSideBar">
            <ul id="sidebar-nav" className="nav nav-pills flex-column">
                <NavigationSideBarLink title={"Product Keyword DB"} icon={"database"} href={"/tools/pdb"} color={"#168E97"} active={active_pdb}/>
                <NavigationSideBarLink title={"Niche Explorer"} icon={"map-signs"} href={"/tools/niche"} color={"#8A5B35"} active={active_niche}/>
                <NavigationSideBarLink title={"Product Listing Analysis"} icon={"chart-line"} href={"/tools/la"} color={"#137F68"} active={active_la}/>
            </ul>
        </nav>
    );
}

export default NavigationSideBar;