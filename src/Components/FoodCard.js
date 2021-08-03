import { useState } from "react";
import FoodDetail from "./FoodDetail";

function FoodCard({ food }){
    const [isClicked, setIsClicked] = useState(false)

    return(
        <div className="food-card" onClick={(e)=>setIsClicked(!isClicked)}>
            {isClicked ? <FoodDetail food={food} /> :
            <>
                <h2>{food.name}</h2>
                <img src={food.image} alt={food.name}/>
                <h4>Price: ${food.price}</h4> 
            </>}
            
        </div>
    )
}

export default FoodCard;