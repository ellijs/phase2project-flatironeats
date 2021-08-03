import FoodCard from './FoodCard';

function Cart({ myCart, removeFoodFromCart, purchaseFood }){
    function onRemoveFood(id){
        removeFoodFromCart(id)
    }

    return(
        <div>
            <h2>My Cart</h2>
            {myCart.map((food) => {
                return(
                    <div key={food.id}>
                    <li>{food.name} - ${food.price}
                        <button onClick={(e) => onRemoveFood(food.id)}>Remove</button>
                    </li>
                    </div>)
            })}
            <button onClick={purchaseFood}>Purchase (just clears cart for now)</button>
        </div>
    )
}

export default Cart;
// {myCart.map((food) => {
//     return(<FoodCard key={food.id} food={food} removeFoodFromCart={removeFoodFromCart}/>)
// })}