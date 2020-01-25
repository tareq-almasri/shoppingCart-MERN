import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import ProductsList from "./ProductsList";
import Product from "./Product";
import Cart from "./Cart";

class Container extends Component {
  render() {
    return (
      <Router>
        <header>
          <strong>HandiPhone eShop</strong>{" "}
          <Link to="/cart">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Link>
          <Link to="/" style={{ padding: "0 50px" }}>
            Home
          </Link>
        </header>
        <div className="box">
          <Switch>
            <Route path="/" exact component={ProductsList} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Container;
