import MainHeader from './components/MainHeader';
import CartDetails from './views/CartDetails';
import ShoppingItems from './views/ShoppingItems';
import PaymentView from './views/PaymentView';

function App() {
  return (
    <>
      <MainHeader />
      <div className="container-fluid my-4 px-4 app-view">
        <PaymentView />
      </div>
      
    </>
  );
}

export default App;
