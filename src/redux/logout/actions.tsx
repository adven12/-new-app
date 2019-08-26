
import { createAction } from "typesafe-actions";
import { LogoutActions,  LogoutRequest } from "./types";

const prefix = "@@logout";

export function doLogout(data: LogoutRequest) {
  return {
     type: `${prefix}/${LogoutActions.DO_LOGOUT}`,
      data };
}
// createAction(`${prefix}/${LoginActions.DO_LOGIN}`, resolve => {
//   return (data: LoginRequest) => {
//     return resolve({ data });
//   };
// });