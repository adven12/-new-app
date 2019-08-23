import { RootState } from "../rootReducer";
import { LoginState } from "./types";

export const initialState: LoginState = {
  email: "",
  password: "",
  isLog: false,
  error:'',
  data: [],
  test: '',
};

export function loginReducer(state: LoginState = initialState, action: any) {
  
  switch (action.type) {
    case `@@login/DO_LOGIN`: {
      return {
        ...state,
      };
    }
    case `@@login/LOGIN_FAILED`: {
      const { data } = action.payload;
      return {
        ...state,
        message:'',
      };
    }

    case `@@login/LOGIN_SUCCESS`: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        error: '',
        isLog: true,
        test: 'test',
      };
    }

    default:
      return state;
  }
}

export const login = (state: RootState) => state.login;