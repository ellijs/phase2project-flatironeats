import { useState } from "react";
import FoodDetail from "./FoodDetail";

function FoodCard({ food }){

    // const foodsToDisplay = foods.map((food) => {
    //     return (
    //         <>
                // <h2>{food.name}</h2>
                // <img src={food.image} alt="image of food"/>
                // <h4>Price: {food.price}</h4>
    //         </>
    //     )
    // })

    return(
        <div className="food-card">
            <h2>{food.name}</h2>
            <img src={food.image} alt="image of food"/>
            <h4>Price: {food.price}</h4>
            <FoodDetail food={food} />
        </div>
    )
}

export default FoodCard;