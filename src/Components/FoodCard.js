import { useState } from "react";
import FoodDetail from "./FoodDetail";

function FoodCard({ food, addFoodToCart, removeFoodFromCart }){
    const [isClicked, setIsClicked] = useState(false)
    function onAddFood(){
        addFoodToCart(food)
    }

    return(
        <div className="food-card">
            <div onClick={(e)=>setIsClicked(!isClicked)}>
            {isClicked ? <FoodDetail food={food} /> :
            <>
                <h2>{food.name}</h2>
                <img src={food.image} alt={food.name}/>
                <h4>Price: ${food.price}</h4> 
            </>}
            </div>
            {<button onClick={onAddFood}>Add To Cart</button>}
        </div>
    )
}

export default FoodCard;
{/* <button onClick={onRemoveFood}>Remove From Cart</button> */}