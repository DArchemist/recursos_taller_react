import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const MainHeader = ( { searchItems, total } ) => {
    const routeName = useLocation().pathname
    const isHomeRoute = (routeName === "/")
    const isPaymentRoute = (routeName === "/payment")
    const isCartRoute = (routeName === "/cart")
    const [searchString, setSearchString] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        searchItems(searchString)
        setSearchString('')
    }
    if (isHomeRoute) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between main-header fixed-top p-5">
                <form className="form-inline my-2 my-lg-0" onSubmit={ onSubmit }>
                    <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search item" aria-label="Search" onChange={ (e) => setSearchString(e.target.value)}/>
                    <button className="btn my-2 my-sm-0 search-button scalable" type="submit"><i className="fas fa-search"></i></button>
                </form>
                <div>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart white-icon fa-lg scalable2"></i>
                    </Link>
                    <div className="cart-items-counter text-center">
                        <b>{ total }</b>
                    </div>
                </div>
            </nav>
        )
    } else if (isCartRoute) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between main-header fixed-top p-5">
                <div>
                    <Link to="/">
                        <i class="fas fa-long-arrow-alt-left white-icon fa-lg scalable2"></i>
                    </Link>
                </div>
                <div>
                </div>
            </nav>
        )
    } else if (isPaymentRoute) {
        return (
        <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between main-header fixed-top p-5 ">
            <div>
                <Link to="/cart">
                    <i class="fas fa-long-arrow-alt-left white-icon fa-lg scalable2"></i>
                </Link>
            </div>
            <div>
            </div>
        </nav>
        )
    }
}

export default MainHeader
