import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import OrderReview from "./Components/OrderReview/OrderReview";
import OrderPlace from "./Components/OrderPlace/OrderPlace";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Products></Products>
          </Route>
          <Route exact path='/'>
            <Products></Products>
          </Route>
          <Route path="/review">
              <OrderReview></OrderReview>
          </Route>
          <Route path="/orderplace">
            <OrderPlace></OrderPlace>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
