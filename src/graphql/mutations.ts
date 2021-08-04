/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      price
      inStock
      description
      categoryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      Category {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      price
      inStock
      description
      categoryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      Category {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      price
      inStock
      description
      categoryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      Category {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      Product {
        id
        name
        price
        inStock
        description
        categoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      Product {
        id
        name
        price
        inStock
        description
        categoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      Product {
        id
        name
        price
        inStock
        description
        categoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
`;
