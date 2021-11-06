import SummaryItem from "./SummaryItem";
import SummaryTotal from "./SummaryTotal";

const _ = require("lodash");

const CartSummary = () => {
    const itemsToRender = []
    _.times(8, () => {
        itemsToRender.push(<SummaryItem />)
    })
    return (
        <div className="cart-summary-container m-0 p-3 position-fixed overflow-auto">
            <div className="mb-4">
                <h4><b>Purchase summary</b></h4>
            </div>
            {
                itemsToRender
            }

            <SummaryTotal />
            <div className="d-flex justify-content-center mt-5">
                <button className="btn go-payment-button">Go to payment</button>
            </div>  
        </div>
    )
}

export default CartSummary
