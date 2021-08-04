/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  name: string,
  price: number,
  inStock?: boolean | null,
  description?: string | null,
  categoryID?: string | null,
  createdAt?: number | null,
  updatedAt?: string | null,
  _version?: number | null,
  productCategoryId?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  inStock?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  price: number,
  inStock?: boolean | null,
  description?: string | null,
  categoryID?: string | null,
  createdAt?: number | null,
  updatedAt?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  Category?: Category | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  Product?: Product | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  inStock?: boolean | null,
  description?: string | null,
  categoryID?: string | null,
  createdAt?: number | null,
  updatedAt?: string | null,
  _version?: number | null,
  productCategoryId?: string | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
  categoryProductId?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
  categoryProductId?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  inStock?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    inStock?: boolean | null,
    description?: string | null,
    categoryID?: string | null,
    createdAt?: number | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    inStock?: boolean | null,
    description?: string | null,
    categoryID?: string | null,
    createdAt?: number | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    inStock?: boolean | null,
    description?: string | null,
    categoryID?: string | null,
    createdAt?: number | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    inStock?: boolean | null,
    description?: string | null,
    categoryID?: string | null,
    createdAt?: number | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    inStock?: boolean | null,
    description?: string | null,
    categoryID?: string | null,
    createdAt?: number | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    inStock?: boolean | null,
    description?: string | null,
    categoryID?: string | null,
    createdAt?: number | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    inStock?: boolean | null,
    description?: string | null,
    categoryID?: string | null,
    createdAt?: number | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    Product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      inStock?: boolean | null,
      description?: string | null,
      categoryID?: string | null,
      createdAt?: number | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
  } | null,
};
