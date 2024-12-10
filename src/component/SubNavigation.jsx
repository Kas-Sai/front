import React from "react";
import { 
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

import PageTransfer from "../pages/PageTransfer";
import PageHome from "../pages/PageHome";
import WoToday from "../woToday";
const Navigation = ({ children }) => {
    return (
        <div className="navbar">
            {children}
        </div>
    )
};


export class SubNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navItems = [
            {
                id: 2,
                label: "Transfer",
                icon: "img/宇航员.png",
                to: "/",
                element: <PageTransfer />
            },
            {
                id: 1,
                label: "home page",
                icon: "img/三球.png",
                to: "/home",
                element: <PageHome />
            },
        ]
        let openWoToday = ()=>{

        }
        const items = this.props.items || [{id: 1, label: "current", to: ""}]
        return (
            <div className="subnav">
                <ul>
                {items.map((item, index) => (
                    <li key={item.key} className="link">{item.label}</li>
                ))}
                </ul>
                <Outlet/>
            </div>
        )
    }
}

export class SubHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="subheader">
                {this.props.children ? this.props.children : ""}
            </header>
        )
    }
}