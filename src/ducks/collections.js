export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_END = 'FETCH_COLLECTIONS_END';

const initialState = {
  fetching: false,
  fetched: false,
  collections: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {...state, fetching: true};

    case FETCH_COLLECTIONS_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        collections: action.payload
      };

    default:
      return {...state, fetching: false, error: action.payload};
  }
};

export function FetchCollectionsStart() {
  return {
    type: FETCH_COLLECTIONS_START
  };
}

export function FetchCollectionsEnd(data) {
  return {
    type: FETCH_COLLECTIONS_END,
    payload: data
  };
}

export function GetCollections(resources) {
  return function(dispatch, getState, api) {
    dispatch(FetchCollectionsStart());

    return api.GetCollections(resources).then(collections => {
      dispatch(FetchCollectionsEnd(collections));
    });
  };
}
