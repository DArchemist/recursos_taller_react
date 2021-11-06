const ShoppingItem = () => {
    return (
        <div className="col-12 col-sm-6 col-lg-3 p-2">
            <div className="card scalable item-card">
                <div className="d-flex justify-content-center my-2 img-container">
                    <img src="" className="card-img-top item-image text-center" alt="" />
                </div>
                <div className="card-body m-0 p-0">
                    <div className="sub-box pt-3 pr-2 pl-2 pb-2">
                        <h6 className="card-title">Producto 1</h6>
                        <p className="card-text m-0"> Este es el producto 1</p>
                        <p className="card-text mt-1"><b>$29.99</b></p>
                        <div className="d-flex justify-content-center m-0 p-0">
                            <button className="btn btn-primary add-button">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShoppingItem
