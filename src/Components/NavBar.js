import { NavLink } from 'react-router-dom';


function NavBar(){
    return (
        <nav>
            <NavLink 
                exact to="/">
                Home Page
            </NavLink>
            <NavLink 
                to="/foods">
                All Foods
            </NavLink>
            <NavLink 
                to="/cart">
                My Cart
            </NavLink>
            <NavLink 
                to="/foods/new">
                Add New Food
            </NavLink>
        </nav>
    )
}

export default NavBar;