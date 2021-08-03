import FoodCard from './FoodCard';

function Cart({ myCart, removeFoodFromCart, purchaseFood }){
    
    return(
        <div>
            <h2>My Cart</h2>
            {myCart.map((food) => {
                return(<FoodCard key={food.id} food={food} removeFoodFromCart={removeFoodFromCart}/>)
            })}
            <button onClick={purchaseFood}>Purchase (just clears cart for now)</button>
        </div>
    )
}

export default Cart;
// removeFoodFromCart={removeFoodFromCart}