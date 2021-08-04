import { Link } from 'react-router-dom';

function HomePage({ logo = "//"}){

    return(
        <>
            <div className="home-page">
                <h1 className="welcome" style= {{ fontSize: "5rem" }}>Welcome to </h1>
                <div className="full-logo">
                    <h1 className="flatiron" style = {{ fontSize: "5rem", margin: 0 }}> <span className="logo">{ logo }</span> FLATIRON </h1>
                    <h1 className="eats" style = {{ fontSize: "5rem", margin: 0 }}>Eats!</h1>
                </div>
                <h3 style = {{ fontSize: "1.6rem" }}>Food delivery for hungry coders.</h3> 
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