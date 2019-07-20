import React from "react"
import ReactDOM from "react-dom"
import { Nav } from "./Nav"
import { navMenuItems, sideMenuItems } from "./attributes"

ReactDOM.render(<Nav
    navMenuItems={navMenuItems}
    sideMenuItems={sideMenuItems}
/>, document.getElementById("react-root"))