import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHeader from './components/MainHeader';
import CartDetails from './views/CartDetails';
import ShoppingItems from './views/ShoppingItems';
import PaymentView from './views/PaymentView';

function App() {
  return (
    <>
    <Router>
      <MainHeader />
      <div className="container-fluid my-4 px-4 app-view">
        <Routes>
          <Route exact path="/" element={ <ShoppingItems />}></Route>
          <Route exact path="/cart" element={ <CartDetails />}></Route>
          <Route exact path="/payment" element={ <PaymentView />}></Route>
        </Routes>
      </div>
    </Router> 
    </>
  );
}

export default App;
