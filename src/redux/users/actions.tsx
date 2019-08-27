import { UsersActions } from "./types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@users";

export function doUsers() {
  return { type: `${prefix}/${UsersActions.DATAUSERS_INIT}` };
}