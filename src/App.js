import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Orders from "./components/Orders/Orders";
import DataManagement from "./components/DataManagement/DataManagement";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    price: '',
    productImg: '',
    productName: '',
    productWeight: '' 
  })

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/manage">
              <DataManagement></DataManagement>
            </Route>
            <PrivateRoute path="/checkout/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
