import ShoppingItem from "../components/ShoppingItem"
const _ = require("lodash");

const ShoppingItems = () => {
    const itemsToRender = []
    _.times(8, () => {
        itemsToRender.push(<ShoppingItem />)
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
