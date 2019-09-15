
export enum ProductsActions {
    DATAPRODUCTS_INIT = "DATAPRODUCTS_INIT",
    DATAPRODUCTS_LOADED = "DATAPRODUCTS_LOADED",
    DATAPRODUCTS_ERROR = "DATAPRODUCTS_ERROR",
    DO_PRODUCTS_TO_BASKET = "DO_PRODUCTS_TO_BASKET",
    DO_PRODUCTS_UPDATE= "DO_PRODUCTS_UPDATE"
  }
  
  export interface ProductsState {
    addToBasket: string;
    dataProducts: string,
    book: string,
    dataArr: [],
    search: string,
    redirectDescription: number,
    numberBooks: number,
    countBooks: number,
  }

  export interface ProductsRequest{
    addToBasket: string;
  }
  export interface ProductsModalState  {
    picture: string,
    name: string,
    discript:string,
    price: number,
    full_discript: string,
  }
  export interface DescriptionModalState  {
    // picture: string,
    // name: string,
    // discript:string,
    product: any,
    full_discript: string,
  }
  export interface savePictureProfile {
    changePhoto: string;
  }
  export interface book {
    book: string;
  }
