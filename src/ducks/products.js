export const FETCH_PRODUCTS_START = 'products/FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_END = 'products/FETCH_PRODUCTS_END';

const initialState = {
  fetching: false,
  fetched: false,
  products: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, fetching: true, error: null };

    case FETCH_PRODUCTS_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload
      };

    default:
      return { ...state, fetching: false, error: action.payload };
  }
};

export const FetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START
});

export const FetchProductsEnd = data => ({
  type: FETCH_PRODUCTS_END,
  payload: data
});

export const GetProducts = resources => {
  return (dispatch, getState, api) => {
    dispatch(FetchProductsStart());

    return api.GetProducts(resources).then(products => {
      dispatch(FetchProductsEnd(products));
    });
  };
};
