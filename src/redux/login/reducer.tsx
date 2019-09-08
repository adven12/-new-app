import { RootState } from "../rootReducer";
import { LoginState } from "./types";

export const initialState: LoginState = {
  email: "",
  password: "",
  isLog: false,
  error:'',
  data: [],
};

export function loginReducer(state: LoginState = initialState, action: any) {
  
  switch (action.type) {
    case `@@login/DO_LOGIN`: {
      return {
        ...state,
      };
    }
    case `@@login/LOGIN_FAILED`: {
      const { error } = action.payload;
      return {
        ...state, 
        error: error
      };
    }

    case `@@login/LOGIN_SUCCESS`: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        error: '',
        isLog: !state.isLog,
      };
    }
    case `@@home/DO_HOME_MODAL`: {
      return {
        ...state,
      };
    }
    case `@@home/DO_HOME_MODAL_SUCCESS`: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
}

export const login = (state: RootState) => state.login;