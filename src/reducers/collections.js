import { fromJS } from 'immutable';

const initialState = fromJS({
  fetching: false,
  fetched: false,
  collections: null,
  error: null
});

const CollectionsReducer = (state= fromJS(initialState), action) => {
  
  switch (action.type) {

    case "Fetch_Collections_Start": {
      
      console.log("Fetch_Collections_Start event fired")
      
      return state.merge({fetching: true});
    }
    case "Fetch_Collections_End": {
      return state.merge({
         fetching: false,
         fetched: true,
         collections: action.payload.entities.collections
       });
    }
    default: {
      return state.merge({fetching: false});
    }
  }
};

export default CollectionsReducer;
