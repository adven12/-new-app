
export enum ProductsActions {
    DATAPRODUCTS_INIT = "DATAPRODUCTS_INIT",
    DATAPRODUCTS_LOADED = "DATAPRODUCTS_LOADED",
    DATAPRODUCTS_ERROR = "DATAPRODUCTS_ERROR",
    DO_PRODUCTS_TO_BASKET = "DO_PRODUCTS_TO_BASKET"
  }
  
  export interface ProductsState {
    data: any;
    dataProducts: string;
    addToBasket: string;
    dataArr: Array<book>;

  }

  export interface ProductsRequest{
    addToBasket: string;
  }
  export interface ProductsModalState  {
    picture: string,
    name: string,
    discript:string,
    price: number,
  }
  export interface savePictureProfile {
    changePhoto: string;
  }
  export interface book {
    book: string;
  }
