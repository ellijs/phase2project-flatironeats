import { useState } from "react";
import FoodCard from "./FoodCard";
import SearchBar from "./SearchBar";

function FoodContainer({ foods, setFoods, priceSorted }){
    const [search, setSearch] = useState("")
    const [sortCategory, setSortCategory] = useState("All")
    const [sortPrice, setSortPrice] = useState(false)

    // const priceSorted = [...foods].sort((a, b) => {
    //     if (a.price - b.price) {
    //         return -1
    //     } else if (b.price - a.price) {
    //         return 1
    //     } else {
    //         return 0
    //     }
    // }).map(food => <FoodCard key={food.id} food={food} />)

    // function setSortedPriceFilter(){
    //     setFoods(priceSorted)
    // }
    
    const priceFilter = () => sortPrice ? setFoods(priceSorted) : foodsToDisplay()

    
    console.log(priceSorted)


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

    // const sortByPrice = [...foods].sort((a, b) => a.price - b.price ? -1 : 1)
    
    // function handleSortPrice(){
    //     if (sortPrice) {
    //         return setFoods(sortByPrice)
    //     } else {
    //         return foodsToDisplay()
    //     } 
    // }
    
    // .sort((a, b) => {
    //     if (a.price < b.price) {
    //         return -1
    //     } else {
    //         return 1
    //     }
    // })

    // const sortedCategories = [...foods].filter((food) => {
    //     if (sortCategory === "All") {
    //         return true
    //     } else if (food.category === sortCategory) {
    //         return true
    //     }
        
    // })

    
  
    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} setSortCategory={setSortCategory} sortPrice={sortPrice} setSortPrice={setSortPrice}/>
            {priceFilter()}
        </div>
    )
}

export default FoodContainer;