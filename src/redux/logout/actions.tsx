
import { LogoutActions,  LogoutRequest } from "./types";

const prefix = "@@logout";

export function doLogout(data: LogoutRequest) {
  return {
     type: `${prefix}/${LogoutActions.DO_LOGOUT}`,
      data };
  }
