// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Category } = initSchema(schema);

export {
  Product,
  Category
};