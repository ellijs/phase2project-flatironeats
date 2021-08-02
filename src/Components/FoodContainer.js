import { useState } from "react";
import FoodCard from "./FoodCard";
import SearchBar from "./SearchBar";

function FoodContainer({ foods, search, setSearch }){
    const foodsToDisplay = foods.map((food) => {
        return <FoodCard key={food.id} food={food} />
    })

  
    return (
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
            {foodsToDisplay}
        </div>
    )
}

export default FoodContainer;