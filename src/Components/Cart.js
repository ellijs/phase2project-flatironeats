function Cart({ myCart, removeFoodFromCart, purchaseFood }){
    function onRemoveFood(cartId){
        removeFoodFromCart(cartId)
    }
   
    let subtotalPrice = myCart.reduce((a, b) => (a + b.price),0)
    let totalPrice = parseFloat(subtotalPrice*1.08875).toFixed(2)

    
    return(
        <div className="shopping-cart-container">
            <h1>Shopping Cart</h1>
            <div className="cart">
                <div className="products">
                    {myCart.map((food) => {
                        return(
                            <div key={food.id} className="product">
                                <img src={food.image} />
                                <div className="product-info">
                                    <h3 className="product-name">{food.name}</h3>
                                    <h3 className="product-price">Price : $ {food.price}</h3>
                                    <button onClick={(e) => onRemoveFood(food.cartId)}
                                    className="product-remove">
                                    Remove Item
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="cart-total">
                    <p>
                        <span>
                            Number of Items
                        </span>
                        <span>{myCart.length}</span>
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

