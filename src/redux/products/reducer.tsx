import { RootState } from "../rootReducer";
import { ProductsState } from "./types";
import { string } from "prop-types";

export const initialState: ProductsState = {
  dataProducts: "",
  addToBasket: "",
  data: "",
  dataArr: [],
};

export function productsReducer(state: ProductsState = initialState, action: any) {
  switch (action.type) {
    case `@@products/DATAPRODUCTS_INIT`: {
      return initialState;
    }
    case `@@products/DATAPRODUCTS_LOADED`: {
      const {dataProducts} = action.payload;
      return {
        ...state,
        dataProducts,
      };
      
    }
    case `@@DATAPRODUCTS_ERROR`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }
    case `@@products/DO_PRODUCTS_TO_BASKET`: {
      let newState = JSON.parse(JSON.stringify(state))
      console.log(newState);
      const {data} = action;
      console.log(action);
      console.log(data.addToBasket);
      newState.dataArr.push(data)
       console.log(newState);
       console.log(action);
       
      // const newState = dataArr.push(data);
      return {
        ...state,
        data,
        dataArr:newState.dataArr
      };
    }
    default:
      return state;
  }
}


export const products = (state: RootState) => state.products;