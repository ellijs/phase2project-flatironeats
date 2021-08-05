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
                style={{ textDecoration: 'none' }}
                activeClassName="underline">
                <li>Home Page</li>
            </NavLink>
            <NavLink 
                to="/foods"
                style={{ textDecoration: 'none' }}
                activeClassName="underline">
                <li>All Foods</li>
            </NavLink>
            <NavLink 
                to="/cart"
                style={{ textDecoration: 'none' }}
                activeClassName="underline">
                <li>My Cart</li>
            </NavLink>
            <NavLink 
                to="/foods/new"
                style={{ textDecoration: 'none' }}
                activeClassName="underline">
                <li>Add New Food</li>
            </NavLink>
        </nav>
    )
}

export default NavBar;
