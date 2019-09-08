import { RootState } from "../rootReducer";
import { HomeState } from "./types";

export const initialState: HomeState = {
  error: '',
  isLog: false,
  age: "",
  email: "",
  name:"",
  changePhoto:"",
};

export function homeReducer(state: HomeState = initialState, action: any) {
  switch (action.type) {
    // case `@@home/DO_HOME_MODAL`: {
    //   console.log("@@home/DO_HOME_MODAL");
    //   return {
    //     ...state,
    //   };
    // }
    // case `@@home/DO_HOME_MODAL_SUCCESS`: {
    //   const { data } = action.payload;
    //   return {
    //     ...state,
    //     data,
    //   };
    // }
    case `@@home/DO_HOME`: {
      return initialState;
    }
    case `@@home/DO_HOME_IMG`: {
      return {
        ...state,
        
      };
    }
    case `@@home/DO_HOME_FAILED`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }
    default:
      return state;
  }
}

export const home = (state: RootState) => state.home;