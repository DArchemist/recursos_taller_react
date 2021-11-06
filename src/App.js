import MainHeader from './components/MainHeader';
import CartDetails from './views/CartDetails';
import ShoppingItems from './views/ShoppingItems';

function App() {
  return (
    <>
      <MainHeader />
      <div className="container-fluid my-4 px-4 app-view">
        <CartDetails />
      </div>
      
    </>
  );
}

export default App;
