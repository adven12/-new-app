import { ProductsActions, ProductsRequest } from "./types";

const prefix = "@@products";

export function doProducts() {
  return { type: `${prefix}/${ProductsActions.DATAPRODUCTS_INIT}`,
  };
}
  export function doProductsToBasket(data:ProductsRequest) {
    return { type: `${prefix}/${ProductsActions.DO_PRODUCTS_TO_BASKET}`,
    data
    };
}
