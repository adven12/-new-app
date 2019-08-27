import { RootState } from "../rootReducer";
import { LogoutState } from "./types";

export const initialState: LogoutState = {
  isLog: false,
  data: [],
};

export function logoutReducer(state: LogoutState = initialState, action: any) {
    // debugger;
  switch (action.type) {
    case `@@logout/DO_LOGOUT`: {
      const { data } = action.payload;
      return {
        ...state,
        data:{
            isLog: false,
        }
      };
    }
    default:
      return state;
  }
}


export const login = (state: RootState) => state.login;