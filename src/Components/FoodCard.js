import { useState } from "react";
import FoodDetail from "./FoodDetail";

function FoodCard({ food, addFoodToCart, removeFoodFromCart, review, setReview }){
    const [isClicked, setIsClicked] = useState(false)
    function onAddFood(){
        addFoodToCart(food)
    }

    function onImageClick(){
        setIsClicked(!isClicked)
    }

      return(
        <div className="food-card menu content box">
            <div className="food-card-content">
                <div>
                {isClicked ? <FoodDetail food={food} onImageClick={onImageClick} review={review} setReview={setReview}/> :
                <div className="content-box">
                    <h2 className="text">{food.name}</h2>
                    <div className="imgBx">
                      <img src={food.image} alt={food.name}
                      onClick={onImageClick}/>
                    </div>
                    <h4 className="text">Price: ${food.price}</h4> 
                </div>}
                </div>

                <button className="addToCart" onClick={onAddFood}>Add To Cart</button>
            </div>
        </div>
    )
}

export default FoodCard;
{/* <button onClick={onRemoveFood}>Remove From Cart</button> */}
