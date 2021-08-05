/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      description
      price
      inStock
      createdAt
      updatedAt
      CategoryId
      _version
      _deleted
      _lastChangedAt
      category {
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
      description
      price
      inStock
      createdAt
      updatedAt
      CategoryId
      _version
      _deleted
      _lastChangedAt
      category {
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
      description
      price
      inStock
      createdAt
      updatedAt
      CategoryId
      _version
      _deleted
      _lastChangedAt
      category {
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
      product {
        nextToken
        startedAt
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
      product {
        nextToken
        startedAt
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
      product {
        nextToken
        startedAt
      }
    }
  }
`;
