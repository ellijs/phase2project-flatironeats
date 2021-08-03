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
  
  // ADD newReview Data to db.json
    function addNewReview(value, food, length, id){
    const newReviewObj = { id: (length + 1), content: value }
    
    fetch(`http://localhost:3000/foods/${id}/` , {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "review": [ ...food.review, newReviewObj ]
      })
    }).then(r=> r.json()).then(data=>{
       console.log(data)
      })

    const newReviewArray = [...foods].map(food => {
      if(food.id === id) {
        food.review.push(newReviewObj)
        return food
      } else {
        return food
      }
    })
    setFoods(newReviewArray)
  }

  function addFoodToCart(food){
    alert("Added to Cart!")
    let uniqueId = uuidv4()  // or let uniqueId = Date.now()
    let newItem = {...food, cartId: uniqueId}
    setMyCart([...myCart, newItem])
    console.log(myCart)
  }

  function removeFoodFromCart(cartId){
    console.log(myCart)
    let tempCart = myCart.filter((food) => {
      if ((food.cartId !== cartId) ) {
        return true
    } else {
      return false
    }})
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
