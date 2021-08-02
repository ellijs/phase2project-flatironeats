import '../App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import FoodContainer from './FoodContainer';
import NewFoodForm from './NewFoodForm';
import Cart from './Cart';



function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/foods')
    .then(response => response.json())
    .then(foodData => setFoods(foodData))
  }, [])

  const [search, setSearch] = useState("")

    
  const searchedFoods = () => {
      // const filteredFoods = [...foods]
      if(!search) {
          return foods
      } else { 
          const filteredFoods = [...foods] 
          return filteredFoods.filter(food => {
              (food.name.toLowerCase().includes(search.toLowerCase()))
              
          } 
          ) 
      }
      // if (search.length > 0){
      //     const filteredFoods = [...foods].filter(food => {
      //         return(
      //             food.name.toLowerCase().includes(search.toLowerCase())
      //         )
      //     })
      //     return filteredFoods
      // } else {
      //     return foods
      // }    
    }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/foods/new">
          <NewFoodForm />
        </Route>
        <Route exact path="/foods">
          <FoodContainer foods={searchedFoods()} setSearch={setSearch}/>
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
          <HomePage foods={foods}/>
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
