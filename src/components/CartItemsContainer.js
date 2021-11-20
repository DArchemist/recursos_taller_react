import CartItem from "./CartItem";


const CartItemsContainer = ( { cart, add, remove, removeItem}) => {
    const itemsToRender = cart.map((item)=> {
        return <CartItem title={ item.title } amount={ item.amount } price={ item.price } id={ item.id } key={ item.id } add={ add } remove={ remove } removeItem={ removeItem } />
    })
    return (
        <div className="cart-items-container m-0 p-0">
            <div className="cart-items-header d-flex align-items-center">
                <div className="m-3">
                    <h4><b>Cart Items ({ cart.length })</b></h4>
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
