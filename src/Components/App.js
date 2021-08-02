import logo from '../logo.svg';
import '../App.css';
import { useState, useEffect } from 'react';
import FoodContainer from './FoodContainer';



function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/foods')
    .then(response => response.json())
    .then(foodData => setFoods(foodData))
  }, [])

  return (
    <div className="App">
      <FoodContainer foods={foods}/>
    </div>
  );
}

export default App;
