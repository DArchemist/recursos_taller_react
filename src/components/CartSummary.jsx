import { Link } from "react-router-dom";
import SummaryItem from "./SummaryItem";
import SummaryTotal from "./SummaryTotal";


const CartSummary = ( { cart }) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue.price * currentValue.amount
    let total = cart.reduce(reducer, 0)
    const itemsToRender = cart.map((item) => {
        return <SummaryItem title={ item.title } amount={ item.amount} price={ item.price } /> 
    })
    return (
        <div className="cart-summary-container m-0 p-3 position-fixed overflow-auto">
            <div className="mb-4">
                <h4><b>Purchase summary</b></h4>
            </div>
            {
                itemsToRender
            }

            <SummaryTotal total={ total }/>
            <div className="d-flex justify-content-center mt-5">
                <Link to="/payment">
                    <button className="btn go-payment-button">Go to payment</button>
                </Link>
            </div>  
        </div>
    )
}

export default CartSummary
