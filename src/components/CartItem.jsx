import AddRemoveForm from "./AddRemoveForm"

const CartItem = ({ title, amount, price, id, add, remove, removeItem }) => {
    return (
        <div className="col-12 cart-item d-flex justify-content-between align-items-center my-2 scalable">
            <div>
                <b>{ title} [${ price }]</b>
            </div>
            <div className="d-flex justify-content-around">
                <AddRemoveForm amount={ amount } add={ add } remove={ remove} id={ id }/>
                <i className="fas fa-trash mx-3 trash-bin mt-2" onClick={ (e) => removeItem(id)}></i>
            </div>
            
        </div>
    )
}

export default CartItem
