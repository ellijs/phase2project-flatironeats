import { useState } from "react";
import FoodCard from "./FoodCard";
import SearchBar from "./SearchBar";

function FoodContainer({ foods }){
    const [search, setSearch] = useState("")

    const filteredFoods = [...foods].filter(food => {
        return (food.name.toLowerCase().includes(search.toLowerCase()))
    })
    .map(food => <FoodCard key={food.id} food={food} />)

    const originalFoods = foods.map((food) => <FoodCard key={food.id} food={food} />)
    
    function foodsToDisplay() {
        if(!search) {
            return originalFoods
        } else {
            return filteredFoods
        }
    }
  
    return (
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
            {foodsToDisplay()}
        </div>
    )
}

export default FoodContainer;