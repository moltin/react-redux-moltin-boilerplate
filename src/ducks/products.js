export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_END = 'FETCH_PRODUCTS_END';

const initialState = {
  fetching: false,
  fetched: false,
  products: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {...state, fetching: true, error: null};

    case FETCH_PRODUCTS_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload
      };

    default:
      return {...state, fetching: false, error: action.payload};
  }
};

export function FetchProductsStart() {
  return {
    type: FETCH_PRODUCTS_START
  };
}

export function FetchProductsEnd(data) {
  return {
    type: FETCH_PRODUCTS_END,
    payload: data
  };
}

export function GetProducts(resources) {
  return function(dispatch, getState, api) {
    dispatch(FetchProductsStart());

    return api.GetProducts(resources).then(products => {
      dispatch(FetchProductsEnd(products));
    });
  };
}
