function FoodDetail({ food }){
    const foodReviewToDisplay = food.review.map((textReview) => {
        return <li key={textReview.id}>{textReview.content}</li>
    })


    return(
        <div className="menu content box">
            <h2 className="text">{food.name}</h2>
            <h4 className="text">{food.description}</h4>
            <h4>Reviews: {foodReviewToDisplay} </h4>
            <h4 className="text">Rating: {food.rating} stars</h4>
        </div>
    )
}




export default FoodDetail;
