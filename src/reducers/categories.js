import { fromJS } from 'immutable';

const initialState = fromJS({
  fetching: false,
  fetched: false,
  categories: null,
  error: null
});

const CategoriesReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Categories_Start": {
      return state.merge({fetching: true});
    }
    case "Fetch_Categories_End": {
      return state.merge({
         fetching: false,
         fetched: true,
         categories: action.payload.entities.categories
       });
    }
    default: {
      return state.merge({fetching: false});
    }
  }
};

export default CategoriesReducer;
