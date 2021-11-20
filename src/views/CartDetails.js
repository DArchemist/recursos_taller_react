import CartItemsContainer from "../components/CartItemsContainer"
import CartSummary from "../components/CartSummary"

const CartDetails = ({ cart, add, remove, removeItem }) => {
    return (
        <div className="row">
            <div className="col-12 col-lg-6">
                <CartItemsContainer cart={ cart } add={ add } remove={ remove } removeItem={ removeItem }/>
            </div>
            <div className="col- 12 col-lg-6">
                <CartSummary cart={ cart } />
            </div>
        </div>
    )
}

export default CartDetails
