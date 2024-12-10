import { Link } from "react-router-dom"

const Navigation = ({ children }) => {
    return (
        <div className="navbar">
            {children}
        </div>
    )
}

export const NavItem = ({ icon, label, to }) => {
    return (
        <div className="nav-item">
            <Link to={to} className="nav-item-link">
                {/* <img src={icon} alt={label} className="nav-item-icon"></img> */}
                <span className="nav-item-label">{label}</span>
            </Link>
            
        </div>
        
    )
}

export default Navigation;