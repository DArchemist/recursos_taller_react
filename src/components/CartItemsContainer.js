import CartItem from "./CartItem";

const _ = require("lodash");

const CartItemsContainer = () => {
    const itemsToRender = []
    _.times(8, () => {
        itemsToRender.push(<CartItem />)
    })
    return (
        <div className="cart-items-container m-0 p-0">
            <div className="cart-items-header d-flex align-items-center">
                <div className="m-3">
                    <h4><b>Cart Items (2)</b></h4>
                </div>
            </div>
            <div className="row m-0 p-0">
                {
                    itemsToRender
                }
            </div>
        </div>
    )
}

export default CartItemsContainer
