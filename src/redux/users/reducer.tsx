import { RootState } from "../rootReducer";
import { UsersState } from "./types";
import { string } from "prop-types";

export const initialState: UsersState = {
  dataUsers: "",
  error: '',
};

export function usersReducer(state: UsersState = initialState, action: any) {
  switch (action.type) {
    case `@@users/DATAUSERS_INIT`: {
      return initialState;
    }
    case `@@users/DATAUSERS_LOADED`: {
      const { dataUsers } = action.payload;
      return {
        ...state,
        dataUsers
      };
    }
    case `@@DATAUSERS_LOAD_ERROR`: {
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

export const users = (state: RootState) => state.users;