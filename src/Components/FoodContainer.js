import { useState } from "react";
import FoodCard from "./FoodCard";
import SearchBar from "./SearchBar";

function FoodContainer({ foods, addFoodToCart, removeFoodFromCart, setReview }){
    const [search, setSearch] = useState("")
    const [sortCategory, setSortCategory] = useState("All")
    const [sortPrice, setSortPrice] = useState(false)

    // Chain all sorts/filters together (search, dropdown, sort by price, map out FoodCard) - include the big wrapping if statements to account for the "originalFoods" setting - we caused an infinite loop with sortPrice and foodsToDisplay()
    const filteredFoods = [...foods].filter(food => {
        if (search.length > 0) {
            return (food.name.toLowerCase().includes(search.toLowerCase()))
        } else {
            return true
        }
    }).filter((food) => {
        if (sortCategory === "All") {
            return true
        } else if (food.category.toLowerCase() === sortCategory.toLowerCase()) {
            return true
        } else {
            return false
        }
    }).sort((a, b) => {
        if (sortPrice) {
            return (a.price - b.price)
        } else {
            return 0
        }
    })
    .map(food => <FoodCard key={food.id} food={food} addFoodToCart={addFoodToCart} removeFoodFromCart={removeFoodFromCart} setReview = {setReview}/>)



    return (
        <div className="menu content">
            <SearchBar search={search} setSearch={setSearch} setSortCategory={setSortCategory} sortPrice={sortPrice} setSortPrice={setSortPrice}/>
            <div>{filteredFoods}</div>
        </div>
    )
}

export default FoodContainer;
