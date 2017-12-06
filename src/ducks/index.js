import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import collections from './collections';
import cart from './cart';
import categories from './categories';
import payments from './payments';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  product,
  products,
  collections,
  cart,
  categories,
  payments,
  router: routerReducer,
  form: formReducer
});
