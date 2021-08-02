function FoodDetail({ food }){
    const foodReviewToDisplay = food.review.map((textReview) => {
        return <p key={textReview.id}>{textReview.content}</p>
    })


    return(
        <div>
            <h2>{food.name}</h2>
            <img src={food.image} alt="image of food"/>
            <h4>{food.description}</h4>
            {foodReviewToDisplay}
            <h4>Rating: {food.rating}</h4>
        </div>
    )
}




export default FoodDetail;