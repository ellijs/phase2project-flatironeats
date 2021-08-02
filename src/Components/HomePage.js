function HomePage({ foods }){

    return(
        <>
            <div>
                <h1>Welcome to FlatironEats!</h1>
                <p>Food delivery for hungry coders.</p> 
                <a className="button" href="/foods">
                    View All Available Foods to Order
                </a>
            </div>
        </>
    )
}

export default HomePage;