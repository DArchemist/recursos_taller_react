const MainHeader = () => {
    const isHomeRoute = true
    if (isHomeRoute) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between main-header fixed-top p-5">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search item" aria-label="Search" />
                    <button className="btn my-2 my-sm-0 search-button scalable" type="submit"><i className="fas fa-search"></i></button>
                </form>
                <div>
                    <i className="fas fa-shopping-cart white-icon fa-lg scalable2"></i>
                    <div className="cart-items-counter text-center">
                        <b>2</b>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between main-header fixed-top p-5">
                <div>
                    <i class="fas fa-long-arrow-alt-left white-icon fa-lg scalable2"></i>
                </div>
                <div>
                </div>
            </nav>
        )
    }
}

export default MainHeader
