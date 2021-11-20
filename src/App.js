import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import MainHeader from './components/MainHeader';
import CartDetails from './views/CartDetails';
import ShoppingItems from './views/ShoppingItems';
import PaymentView from './views/PaymentView';

function App() {
  const [items, setItems] = useState([])
  const [subItems, setSubItems] = useState([])
  const [cart, setCart] = useState([])

  const reducer = (previousValue, currentValue) => previousValue + currentValue.amount
  let totalItemsCart = cart.reduce(reducer, 0)

  const fetchItems = async () => {
    const res = await fetch('http://fakestoreapi.com/products/')
    const data = await res.json()
    return data
  }

  const searchItems = (s) => {
    const subSet = items.filter((item) => item.title.toLowerCase().includes(s.toLowerCase()))
    setSubItems(subSet)
  }

  const addToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => item.id === id ? {...item, amount: item.amount + 1} : item))
    }
    else {
      const itemFromId = items.find((item) => item.id === id)
      if (itemFromId) {
        setCart([...cart, {...itemFromId, amount: 1}])
      }
    }
  }

  const removeFromCart = (id) => {
    const itemFromCart = cart.find((item) => item.id === id)
    if (itemFromCart && itemFromCart.amount > 1) {
      setCart(cart.map((item) => item.id === id ? {...item, amount: item.amount - 1} : item ))
    } else if (itemFromCart && itemFromCart.amount === 1) {
      setCart(cart.filter((item) => item.id !== id))
    }
  }

  const removeItemFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }
    getItems()
  }, [])
  return (
    <>
    <Router>
      <MainHeader searchItems={ searchItems } total={ totalItemsCart }/>
      <div className="container-fluid my-4 px-4 app-view">
        <Routes>
          <Route exact path="/" element={ <ShoppingItems items={ subItems.length ? subItems : items } addToCart={ addToCart } />}></Route>
          <Route exact path="/cart" element={ <CartDetails cart={ cart } add={ addToCart} remove={ removeFromCart } removeItem={ removeItemFromCart}/>}></Route>
          <Route exact path="/payment" element={ <PaymentView />}></Route>
        </Routes>
      </div>
    </Router> 
    </>
  );
}

export default App;
