import AddRemoveForm from "./AddRemoveForm"

const CartItem = () => {
    return (
        <div className="col-12 cart-item d-flex justify-content-between align-items-center my-2 scalable">
            <div>
                <b>Item 1 [$29.99]</b>
            </div>
            <div className="d-flex justify-content-around">
                <AddRemoveForm />
                <i className="fas fa-trash mx-3 trash-bin mt-2"></i>
            </div>
            
        </div>
    )
}

export default CartItem
