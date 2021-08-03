import FoodCard from './FoodCard';

function Cart({ myCart, removeFoodFromCart }){
    return(
        <div>
            <h2>My Cart</h2>
            {myCart.map((food) => {
                return(<FoodCard key={food.id} food={food} removeFoodFromCart={removeFoodFromCart}/>)
            })}
        </div>
    )
}

export default Cart;