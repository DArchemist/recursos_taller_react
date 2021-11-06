const PaymentForm = () => {
    return (
        <>
        <div className="cart-items-header d-flex align-items-center">
            <div className="m-3">
                <h4><b>Card details</b></h4>
            </div>
        </div>
        <div className="payment-form-container m-0 p-3">
            <form>
                <div className="form-group">
                    <label for="card-number-input"><b>Card Number</b></label>
                    <input type="text" className="form-control" id="card-number-input" placeholder="0000 0000 0000 0000"/>
                </div>
                <div className="form-group">
                    <label for="expiration-date-input"><b>Expiration date</b> </label>
                    <input type="text" className="form-control" id="expiration-date-input" placeholder="00/00"/>
                </div>
                <div className="form-group">
                    <label for="name-input"><b>Name on card</b> </label>
                    <input type="text" className="form-control" id="name-input" placeholder="John Doe"/>
                </div>
                <div className="form-group">
                    <label for="cvv-input"><b>CVV</b></label>
                    <input type="password" className="form-control cvv-input" id="cvv-input" maxLength="4"/>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn go-payment-button"><b>Proceed to payment</b></button>
                </div>
            </form>
        </div>
        </>
    )
}

export default PaymentForm
