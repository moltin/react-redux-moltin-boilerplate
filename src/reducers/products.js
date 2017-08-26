const initialState = {
  fetching: false,
  fetched: false,
  products: null,
  error: null
}

const ProductsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Products_Start": {
      return {...state, fetching: true, error: null};
    }
    case "Fetch_Products_End": {
      return {...state,
         fetching: false,
         fetched: true,
         products: action.payload.entities.products
       };
    }
    default: {
      return {...state, fetching: false, error: action.payload};
    }
  }
};

export default ProductsReducer;
