import { useState } from "react";
import FoodCard from "./FoodCard";

function FoodContainer({ foods }){
    const foodsToDisplay = foods.map((food) => {
        return <FoodCard key={food.id} food={food}/>
    })
    
    
    return (
        <div>
            {foodsToDisplay}
        </div>
    )
}

export default FoodContainer;