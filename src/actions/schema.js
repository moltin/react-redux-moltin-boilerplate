import { schema } from 'normalizr';

export const product = new schema.Entity('products');
export const arrayOfProducts = [ product ];

export const collection = new schema.Entity('collections');
export const arrayOfCollections = [ collection ];

export const category = new schema.Entity('categories');
export const arrayOfCategories = [ category ];