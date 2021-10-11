import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import OrderReview from "./Components/OrderReview/OrderReview";
import OrderPlace from "./Components/OrderPlace/OrderPlace";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./AuthContext/AuthProvider";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Products></Products>
            </Route>
            <Route path='/shop'>
              <Products></Products>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='/review'>
              <OrderReview></OrderReview>
            </Route>
            <Route path='/orderplace'>
              <OrderPlace></OrderPlace>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
