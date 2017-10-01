import React, {Component} from 'react';

import HomeContainer from './components/Home/HomeContainer';
import Cart from './components/Cart/Cart';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import CategoriesContainer from './components/Categories/CategoriesContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import SingleProductContainer from './components/Products/SingleProductContainer';
import OrderConfirmationContainer from './components/Orders/OrderConfirmationContainer';
import NotFound from './components/global/NotFound';

// import ability to change the displayed component depending on the browser URL
import {Switch, Route} from 'react-router-dom';

// initialize our component
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeContainer} />

          <Route path="/cart" component={Cart} />

          <Route path="/products" component={ProductsContainer} />

          <Route path="/categories" component={CategoriesContainer} />

          <Route path="/checkout" component={CheckoutContainer} />

          <Route path="/order-confirmation" component={OrderConfirmationContainer} />

          <Route path="/product/:id" component={SingleProductContainer} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
