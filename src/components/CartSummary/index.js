import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="order-summary-container">
          <h1 className="order-amount">
            <span className="span-element">Order Total:</span> Rs {total}/-
          </h1>
          <p className="cart-items">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
