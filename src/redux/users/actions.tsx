import { UsersActions } from "./types";

const prefix = "@@users";

export function doUsers() {
  return { type: `${prefix}/${UsersActions.DATAUSERS_INIT}` };
}