import { fromJS } from 'immutable';

const initialState = fromJS({
  fetching: false,
  fetched: false,
  products: null,
  error: false
})

const ProductsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Products_Start": {
      return state.merge({fetching: true, error: null});
    }
    case "Fetch_Products_End": {
      return state.merge({
         fetching: false,
         fetched: true,
         products: action.payload.entities.products
       });
    }
    default: {
      return state.merge({fetching: false, error: true});
    }
  }
};

export default ProductsReducer;
