import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from "../common/history";
/** importing views */
import AddProduct from '../views/Product/AddProduct';
import AllProducts from '../views/Product/AllProducts';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={AllProducts} />
        <Route path="add-product" component={AddProduct} />
      </Router>
    );
  }
}
