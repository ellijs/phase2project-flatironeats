import { useState } from "react";
import FoodCard from "./FoodCard";
import SearchBar from "./SearchBar";

function FoodContainer({ foods }){
    const [search, setSearch] = useState("")
    const [sortCategory, setSortCategory] = useState("All")
    const [sortPrice, setSortPrice] = useState(false)

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

    const sortByPrice = [...foods].sort((a, b) => a.price < b.price ? -1 : 1)
    
    function handleSortPrice(){
        if (sortPrice) {
            return sortByPrice
        } else {
            return foodsToDisplay()
        }
    }
    console.log(sortByPrice)

    const sortedCategories = [...foods].filter((food) => {
        if (sortCategory === "All") {
            return true
        } else if (food.category === sortCategory) {
            return true
        }
        console.log(sortCategory)
    })
    console.log(sortedCategories)
    
  
    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} setSortCategory={setSortCategory} sortPrice={sortPrice} setSortPrice={setSortPrice}/>
            {handleSortPrice()}
        </div>
    )
}

export default FoodContainer;