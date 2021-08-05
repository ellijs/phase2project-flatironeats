import { NavLink } from 'react-router-dom';
import logo2 from '../Images/Logo2.png';

function NavBar(){
    return (
        <nav className="navigation">
            <div className="side-logo">
                <img className = "top-logo" src={logo2} alt="logo" />
            </div>
            <NavLink 
                exact to="/" 
                style = {{ textDecoration: "none" }}
                activeStyle={{ textDecoration:"underline" }}
                >
                <li>Home Page</li>
            </NavLink>
            <NavLink 
                exact to="/foods"
                style = {{ textDecoration: "none" }}
                activeStyle={{ textDecoration: 'underline' }}
                >
                <li>All Foods</li>
            </NavLink>
            <NavLink 
                exact to="/cart"
                style = {{ textDecoration: "none" }}
                activeStyle={{ textDecoration: 'underline' }}
                >
                <li>My Cart</li>
            </NavLink>
            <NavLink 
                exact to="/foods/new"
                style = {{ textDecoration: "none" }}
                activeStyle={{ textDecoration: 'underline' }}
                >
                <li>Add New Food</li>
            </NavLink>
        </nav>
    )
}

export default NavBar;
