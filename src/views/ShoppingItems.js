import ShoppingItem from "../components/ShoppingItem"

const ShoppingItems = ( { items, addToCart }) => {
    const itemsToRender = items.map((item) => {
        return <ShoppingItem image={item.image} title={item.title} description={item.description} price={item.price} id={item.id} key={item.id} addToCart={ addToCart }/>
    })
    return (
        <div className="row">
            <>
            {
                itemsToRender
            }
            </>
        </div>
    )
}

export default ShoppingItems
