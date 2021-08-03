import { useState } from "react";
import FoodDetail from "./FoodDetail";

function FoodCard({ food, addFoodToCart, removeFoodFromCart }){
    const [isClicked, setIsClicked] = useState(false)
    function onAddFood(){
        addFoodToCart(food)
    }

      return(
        <div className="food-card menu content box">
            <div>
                <div onClick={(e)=>setIsClicked(!isClicked)} >
                {isClicked ? <FoodDetail food={food} /> :
                <div className="menu content box">
                    <h2 className="text">{food.name}</h2>
                    <div className="imgBx">
                      <img src={food.image} alt={food.name}/>
                    </div>
                    <h4 className="text">Price: ${food.price}</h4> 
                </div>}
                </div>
                {<button className="addToCart" onClick={onAddFood}>Add To Cart</button>}
            </div>
        </div>
    )
}

export default FoodCard;
{/* <button onClick={onRemoveFood}>Remove From Cart</button> */}
