import { NavLink } from 'react-router-dom';


function NavBar(){
    return (
        <nav className="navigation">
            <NavLink 
                exact to="/">
                <li>Home Page</li>
            </NavLink>
            <NavLink 
                to="/foods">
                <li>All Foods</li>
            </NavLink>
            <NavLink 
                to="/cart">
                <li>My Cart</li>
            </NavLink>
            <NavLink 
                to="/foods/new">
                <li>Add New Food</li>
            </NavLink>
        </nav>
    )
}

export default NavBar;
