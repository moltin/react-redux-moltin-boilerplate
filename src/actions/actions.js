import { normalize } from 'normalizr';
import * as schema from './schema';

export const Update_Quantity = 'Update_Quantity';
export const Fetch_Products_Start = 'Fetch_Products_Start';
export const Fetch_Products_End = 'Fetch_Products_End';
export const Fetch_Products_Error = 'Fetch_Products_Error';
export const Fetch_Categories_Start = 'Fetch_Categories_Start';
export const Fetch_Categories_End = 'Fetch_Categories_End';
export const Fetch_Categories_Error = 'Fetch_Categories_Error';
export const Initial_Style = 'Initial_Style';
export const Change_Style = 'Change_Style';
export const Fetch_Collections_Start = 'Fetch_Collections_Start';
export const Fetch_Collections_End = 'Fetch_Collections_End';
export const Fetch_Collections_Error = 'Fetch_Collections_Error';
export const Fetch_Cart_Start = 'Fetch_Cart_Start';
export const Fetch_Cart_End = 'Fetch_Cart_End';

var api = require('../utils/moltin.js');

export function updateQuantity(quantity) {
  return {
    type: Update_Quantity,
    payload: quantity
  }
};

export function FetchProductsStart() {
  return {
    type: Fetch_Products_Start
  }
};

export function FetchProductsEnd(data) {
  return {
    type: Fetch_Products_End,
    payload: data
  }
};

export function FetchProductsError(error) {
  return {
    type: Fetch_Products_Error,
    payload: error
  }
};

export function GetProducts() {
  return function (dispatch) {
      
      dispatch(FetchProductsStart())

      return api.GetProducts()
      
        .then((products) => {
          let normalized_products = normalize(products.data, schema.arrayOfProducts);
          dispatch(FetchProductsEnd(normalized_products))
        }) 
        
        .catch((e) => {
          dispatch(FetchProductsError(e))
        })
    }
};

export function FetchCategoriesStart() {
  return {
    type: Fetch_Categories_Start
  }
};

export function FetchCategoriesEnd(data) {
  return {
    type: Fetch_Categories_End,
    payload: data
  }
};

export function FetchCategoriesError(error) {
  return {
    type: Fetch_Categories_Error,
    payload: error
  }  
}

export function GetCategories() {
  return function (dispatch) {
      
      dispatch(FetchCategoriesStart())

      return api.GetCategories()
      
        .then((categories) => {
          let normalized_categories = normalize(categories.data, schema.arrayOfCategories);
          dispatch(FetchCategoriesEnd(normalized_categories))
        })
        
        .catch((e) => {
          dispatch(FetchCategoriesError(e))
        }) 
    }
};

export function FetchCollectionsStart() {
  return {
    type: Fetch_Collections_Start
  }
};

export function FetchCollectionsEnd(data) {
  return {
    type: Fetch_Collections_End,
    payload: data
  }
};

export function FetchCollectionsError(error) {
  return {
    type: Fetch_Collections_Error,
    payload: error
  }
};

export function GetCollections() {
  return function (dispatch) {
      
      dispatch(FetchCollectionsStart())

      return api.GetCollections()
      
        .then((collections) => {
          let normalized_collections = normalize(collections.data, schema.arrayOfCollections);
          dispatch(FetchCollectionsEnd(normalized_collections))
        }) 
        
        .catch((e) => {
          dispatch(FetchCollectionsError(e))
        })
    }
};

export function FetchCartStart() {
  return {
    type: Fetch_Cart_Start
  }
};

export function FetchCartEnd(cart) {
  return {
    type: Fetch_Cart_End,
    payload: cart
  }
}

export function GetCart() {
  return function (dispatch) {
      
      dispatch(FetchCartStart())

      return api.GetCartItems()
      
        .then((cart) => {
          dispatch(FetchCartEnd(cart))
        }) 
    }
}
