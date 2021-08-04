import { Link } from 'react-router-dom';

function HomePage(){

    return(
        <>
            <div>
                <h1>Welcome to FlatironEats!</h1>
                <p>Food delivery for hungry coders.</p> 
                <Link to="/foods">View All Available Foods to Order</Link>
                <br />
                <Link to="/cart">Go to My Cart</Link>
                <br />
                <Link to="/foods/new">Made Extra? Put Food Up for Sale</Link>
            </div>
        </>
    )
}

export default HomePage;