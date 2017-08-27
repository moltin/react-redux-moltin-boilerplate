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
    case "Fetch_Products_Error": {
      return state.merge({
         fetching: false,
         fetched: false,
         products: action.payload,
         error: true
       });
    }
    default: {
      return state.merge({error: true});
    }
  }
};

export default ProductsReducer;
