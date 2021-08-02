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
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/foods/new">
          <NewFoodForm />
        </Route>
        <Route exact path="/foods">
          <FoodContainer foods={foods}/>
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
