import { useState } from "react";
import FoodDetail from "./FoodDetail";

function FoodCard({ food, addFoodToCart, review, setReview }){
    const [isClicked, setIsClicked] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    function onAddFood(){
        addFoodToCart(food)
    }

    function onImageClick(){
        setIsClicked(!isClicked)
    }

    function onHeartClick(){
        setIsLiked(!isLiked)
    }

      return(
        <div className="food-card menu content box">
            <div className="food-card-content">
                <div>
                    {isClicked ? <FoodDetail food={food} onImageClick={onImageClick} 
                        review={review} setReview={setReview}/> :
                        <div className="content-box">
                            <h2 className="text">{food.name}</h2>
                            <div className="imgBx">
                                <img src={food.image} alt={food.name} 
                                onClick={onImageClick}/>
                            </div>
                            <h2 className="text">Price: ${food.price}</h2> 
                        </div>}
                </div>
                <div className="addToCartButtonDiv">
                {isLiked ? <big className="like" onClick={onHeartClick}>❤️</big> 
                    : <big className="like" onClick={onHeartClick}>♡</big>}
                <button className="addToCart" onClick={onAddFood}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;
