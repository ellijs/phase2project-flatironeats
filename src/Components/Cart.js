import FoodCard from './FoodCard';

function Cart({ myCart, removeFoodFromCart, purchaseFood }){
    function onRemoveFood(id){
        removeFoodFromCart(id)
    }
    let subtotalPrice = myCart.reduce((a, b) => (a + b.price),0)
    let totalPrice = parseFloat(subtotalPrice*1.08875)

    
    return(
        <div>
            <h2>My Cart</h2>
            {myCart.map((food) => {
                return(
                    <div key={food.id}>
                        <li>{food.name} - ${food.price}
                            <button onClick={(e) => onRemoveFood(food.id)}>
                                Remove</button>
                        </li>
                    </div>)                              
                })}
                <h4>Subtotal: ${subtotalPrice}</h4>
                <h3>Total (inc. tax): ${totalPrice}</h3>
            <button onClick={purchaseFood}>Purchase (just clears cart for now)</button>
        </div>
    )
}

export default Cart;
