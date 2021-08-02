import { useState } from "react";
import FoodDetail from "./FoodDetail";

function FoodCard({ food }){
    return(
        <div className="food-card">
            <h2>{food.name}</h2>
            <img src={food.image} alt="image of food"/>
            <h4>{food.price}</h4>
            <FoodDetail food={food} />
        </div>
    )
}

export default FoodCard;