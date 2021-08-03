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
  const [myCart, setMyCart] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/foods')
    .then(response => response.json())
    .then(foodData => setFoods(foodData))
  }, [])
  
  function addFoodToCart(food){
    setMyCart([...myCart, food])
  }
  function removeFoodFromCart(id){
    let tempCart = myCart.filter((food) => {
      if (food.id !== id)
        return true
    })
    setMyCart(tempCart)
  }
  function purchaseFood(){
    alert("Thank you for purchasing food from FlatironEats!")
    setMyCart([])
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/foods/new">
          <NewFoodForm />
        </Route>
        <Route exact path="/foods">
          <FoodContainer foods={foods} addFoodToCart={addFoodToCart} removeFoodFromCart={removeFoodFromCart}/>
        </Route>
        <Route exact path="/cart">
          <Cart foods={foods} myCart={myCart} removeFoodFromCart={removeFoodFromCart} purchaseFood={purchaseFood}/>
        </Route>
        <Route exact path="/">
          <HomePage foods={foods}/>
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
