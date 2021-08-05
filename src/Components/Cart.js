import ItemsInCart from './ItemsInCart'

function Cart({ myCart, setMyCart, removeFoodFromCart, purchaseFood }){
    
    const renderCartItems = myCart.map((food) => {
        return(
           <ItemsInCart key={food.cartId} removeFoodFromCart={removeFoodFromCart} 
            food={food} myCart={myCart} setMyCart={setMyCart} />
        )
    })
   
    let totalItems = myCart.reduce((a, b) => (a + b.quantity),0)
    let subtotalPrice = myCart.reduce((a, b) => (a + (b.price * b.quantity)),0)
    let totalPrice = parseFloat(subtotalPrice*1.08875).toFixed(2)
    
    return(
        <div className="shopping-cart-container">
            <h1>Shopping Cart</h1>
            <div className="cart">
                <div className="products">
                    {renderCartItems}
                </div>
                
                <div className="cart-total">
                    <p>
                        <span>
                            Number of Items
                        </span>
                        <span>{totalItems}</span>
                    </p>
                    <p> 
                        <span>Subtotal</span>
                        <span>$ {subtotalPrice}</span>
                    </p>
                    <p> 
                        <span>Total (inc.tax)</span>
                        <span>$ {totalPrice}</span>
                    </p>
                    <button onClick={purchaseFood} href="#">Proceed to checkout</button>
                </div>
    
            </div>
        </div>
    )
}

export default Cart;


