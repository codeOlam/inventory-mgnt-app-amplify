/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
