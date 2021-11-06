import CartItemsContainer from "../components/CartItemsContainer"
import CartSummary from "../components/CartSummary"

const CartDetails = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-6">
                <CartItemsContainer />
            </div>
            <div className="col- 12 col-lg-6">
                <CartSummary />
            </div>
        </div>
    )
}

export default CartDetails
