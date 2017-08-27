import { fromJS } from 'immutable';

const initialState = fromJS({
  fetching: false,
  fetched: false,
  collections: null,
  error: false
});

const CollectionsReducer = (state= fromJS(initialState), action) => {
  
  switch (action.type) {

    case "Fetch_Collections_Start": {
      return state.merge({fetching: true});
    }
    case "Fetch_Collections_End": {
      return state.merge({
         fetching: false,
         fetched: true,
         collections: action.payload.entities.collections
       });
    }
    case "Fetch_Collections_Error": {
      return state.merge({
         fetching: false,
         fetched: false,
         collections: action.payload,
         error: true
       });
    }
    default: {
      return state;
    }
  }
};

export default CollectionsReducer;
