import React from "react";
import Main from "../../component/Main";
import { SubHeader, SubNavigation } from "../../component/SubNavigation";
import Content from "../../component/Content";
import WoToday from "./components/WoToday";
import WoHistory from "./components/WoHistory";
import { Routes, Route, Outlet } from "react-router-dom";


class PageTransfer extends React.Component {
    constructor(props) {
        super(props);
    }

    get_subnav_items() {
        const data = [
            {
                id: 1,
                label: "Today's ticket",
                to: "WoToday",
                element: <WoToday/>
            }, {
                id: 2,
                label: "Historical tickets",
                to: "WoHistory",
                element: <WoHistory/>
            }
        ]
        return data;
    }

    render() {
        const items = this.get_subnav_items();
        return (
            <Main>
                <SubHeader>
                    <SubNavigation items={items}/>
                </SubHeader>
                <Content>
                    <Routes>
                        {items.map((item, index) => (
                            <Route key={item.id} path={item.to} element={item.element}/>
                        ))}
                    </Routes>
                </Content>
            </Main>
        )
    }
}

export default PageTransfer;