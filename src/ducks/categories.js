export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START';
export const FETCH_CATEGORIES_END = 'FETCH_CATEGORIES_END';

const initialState = {
  fetching: false,
  fetched: false,
  categories: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_START:
      return {...state, fetching: true};

    case FETCH_CATEGORIES_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        categories: action.payload
      };

    default:
      return {...state, fetching: false, error: action.payload};
  }
};

export function FetchCategoriesStart() {
  return {
    type: FETCH_CATEGORIES_START
  };
}

export function FetchCategoriesEnd(data) {
  return {
    type: FETCH_CATEGORIES_END,
    payload: data
  };
}

export function GetCategories(resources) {
  return function(dispatch, getState, api) {
    dispatch(FetchCategoriesStart());

    return api.GetCategories(resources).then(categories => {
      dispatch(FetchCategoriesEnd(categories));
    });
  };
}
