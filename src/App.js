import "./App.css";
import {
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Navigation, { NavItem } from "./component/Navigation";
import PageTransfer from "./pages/PageTransfer/index";
import PageHome from "./pages/PageHome/index";


function App() {
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
    return (
        <div className="container">
            <Navigation>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={item.id}><NavItem label={item.label} icon={item.icon} to={item.to}></NavItem></li>
                    ))}
                </ul>
            </Navigation>
            <Routes>
                {navItems.map((item, index) => (
                    <Route key={item.id} path={item.to} element={item.element}></Route>
                ))}
            </Routes>
        </div>
    );
}

export default App;
