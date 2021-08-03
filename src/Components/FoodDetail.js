function FoodDetail({ food }){
    const foodReviewToDisplay = food.review.map((textReview) => {
        return <li key={textReview.id}>{textReview.content}</li>
    })


    return(
        <div>
            <h2>{food.name}</h2>
            <h4>{food.description}</h4>
            Reviews: {foodReviewToDisplay}
            <h4>Rating: {food.rating}</h4>
        </div>
    )
}




export default FoodDetail;