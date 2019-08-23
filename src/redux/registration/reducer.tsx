import { RootState } from "../rootReducer";
import { RegistrationState } from "./types";

export const initialState: RegistrationState = {
  email: "",
  password: "",
  name: '',
  isLog: false,
};

export function registrationReducer(state: RegistrationState = initialState, action: any) {
  switch (action.type) {
    case `@@registration/DO_REGISTRATION`: {
      return {
        ...state,
      };
    }
    case `@@registration/REGISTRATION_FAILED`: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        error: "error"
      };
    }

    case `@@registration/REGISTRATION_SUCCESS`: {
      const { data } = action.payload;
      return {
        ...state,
        token: data,
        isLog: true,
      };
    }
   
    default:
      return state;
  }
}

export const registration = (state: RootState) => state.registration;