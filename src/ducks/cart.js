export const FETCH_CART_START = 'cart/FETCH_CART_START';
export const FETCH_CART_END = 'cart/FETCH_CART_END';

const initialState = {
  cart: null,
  fetching: false,
  fetched: false,
  error: null,
  empty: true,
  newQuantity: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_START:
      return {
        ...state,
        fetching: true,
        fetched: false,
        newQuantity: action.gotNew
      };

    case FETCH_CART_END:
      return {
        ...state,
        cart: action.payload,
        fetched: true,
        fetching: false,
        newQuantity: action.gotNew
      };

    case 'Cart_Updated':
      return {
        ...state,
        newQuantity: action.gotNew
      };

    default:
      return { ...state, error: action.payload, newQuantity: false };
  }
};

export const FetchCartStart = () => ({
  type: FETCH_CART_START
});

export const FetchCartEnd = cart => ({
  type: FETCH_CART_END,
  payload: cart
});

export const GetCart = () => {
  return function(dispatch, getState, api) {
    dispatch(FetchCartStart());

    return api.GetCartItems().then(cart => {
      dispatch(FetchCartEnd(cart));
    });
  };
};
