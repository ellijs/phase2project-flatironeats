import { useState, useEffect } from 'react'
import ReviewForm from './ReviewForm'

function FoodDetail({ food, onImageClick, setReview }){
    const foodReviewToDisplay = food.review.map((textReview) => {
        return <li key={textReview.id}>{textReview.content}</li>
    })
    let emoji = '⭐';


    const [showReview, setShowReview] = useState(false)
    
    function addReviewClick(e){
        e.stopPropagation()
        setShowReview(!showReview)
    }

    return(
        <div className="menu content box">
            <div onClick = {onImageClick}>
            <h2 className="text">{food.name}</h2>
            <h4 className="text">{food.description}</h4>
            <h4 className="text">Rating: {emoji.repeat(food.rating)}</h4>
            <h4>Reviews: {foodReviewToDisplay} </h4>
            </div>
            {showReview ? <ReviewForm id={food.id} setReview={setReview}/>
                        : 
                    <button onClick={addReviewClick}>Add Review</button>}
        </div>
    )
}




export default FoodDetail;
