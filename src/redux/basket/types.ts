
export enum BasketActions {
  CLEAN_ALL_BASKET = "CLEAN_ALL_BASKET",
  CLEAN_ONE_BASKET = "CLEAN_ONE_BASKET",
  }
  
  export interface BasketState {
    countBooks: number;
    numberBooks: number;
  }
  export interface BasketRequest {
    dataArr: [];
  }
