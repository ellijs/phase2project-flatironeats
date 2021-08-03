import '../App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import FoodContainer from './FoodContainer';
import NewFoodForm from './NewFoodForm';
import Cart from './Cart';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [foods, setFoods] = useState([])
  const [myCart, setMyCart] = useState([])
  const [review, setReview] = useState('')
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:4000/foods')
    .then(response => response.json())
    .then(foodData => setFoods(foodData))
  }, []) 

  // ADD newForm Data to db.json
  function addNewFood(formData) {
    console.log(formData)  
    fetch('http://localhost:4000/foods', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(formData) 
    }).then(resp=>resp.json()).then(newData => {
      setFoods([newData, ...foods])
      history.push(`/foods`)
    })  
  }
  
  function addFoodToCart(food){
    alert("Added to Cart!")
    const tempCart = myCart.map(newItem => {
      return {...newItem, cartId: uuidv4()}
    })
    setMyCart([...tempCart, food])
  }
  function removeFoodFromCart(cartId){
    console.log(myCart)
    let tempCart = myCart.filter((food, index) => {
      if ((food.cartId !== cartId) || (myCart.indexOf(food) !== index))
        return true
    })
    setMyCart([])
    setMyCart(tempCart)
  }
  function purchaseFood(){
    alert("Thank you for purchasing food from FlatironEats!")
    setMyCart([])
  }

  function addNewReview(value, id){
    console.log(value, id)
    const newReviewArray = [...foods].map(food => {
      if(food.id === id) {
        food.review.push(value)
        return food
      } else {
        return food
      }
    })
    setFoods(newReviewArray)
  }
  

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/foods/new">
          <NewFoodForm addNewFood={addNewFood}/>
        </Route>
        <Route exact path="/foods">
          <FoodContainer foods={foods} addFoodToCart={addFoodToCart} removeFoodFromCart={removeFoodFromCart} setReview={addNewReview}/>
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
