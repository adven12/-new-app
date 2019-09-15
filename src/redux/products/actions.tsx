import { ProductsActions, ProductsRequest } from "./types";

const prefix = "@@products";

export function doProducts() {
  return { type: `GET_ALL_BOOKS`,
  };
}
  export function doProductsToBasket(book:ProductsRequest) {
    return { type: `${prefix}/${ProductsActions.DO_PRODUCTS_TO_BASKET}`,
    book
    };
}
export function doProductsUpdate(data:ProductsRequest, allBooks:any) {
  return { type: 'DELETE_BOOK',
  data, allBooks
  };
}
