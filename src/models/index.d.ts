import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields;
}

type CategoryMetaData = {
  readOnlyFields;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly inStock: boolean;
  readonly categoryId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly category?: Category;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly product?: (Product | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}