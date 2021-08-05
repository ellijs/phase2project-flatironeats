function ItemsInCart ({ food, myCart, setMyCart, removeFoodFromCart }) {
    function onRemoveFood(cartId){
        removeFoodFromCart(cartId)
    }

    function handleIncreaseQuantity() {
      setMyCart([...myCart].map((item) => {
        if(item.id === food.id) {
          item.quantity += 1;
            return item
        } else {
          return item;
        }
      }))
    }

    function handleDecreaseQuantity() {
        setMyCart([...myCart].map((item) => {
            if(item.id === food.id) {
              item.quantity -= 1;
              return item
            } else {
              return item;
            }}
        ))
    }

    if(food.quantity === 0) {
      setMyCart([...myCart].filter(item => item.id !== food.id))
    }

    return(
      <div key={food.id} className="product">
        <img src={food.image} alt={food.name}/>
        <div className="product-info">
            <h3 className="product-name">{food.name}</h3>
            <h3 className="product-price">Price : $ {food.price}</h3>           
            <h3 className="product-quantity">Quantity : {food.quantity}</h3>
            <button onClick={handleIncreaseQuantity}>+</button>
            <button onClick={handleDecreaseQuantity}>-</button>
            <button onClick={(e) => onRemoveFood(food.cartId)}
            className="product-remove">
            Remove Item
            </button>
        </div>
      </div>
    )
}

export default ItemsInCart
