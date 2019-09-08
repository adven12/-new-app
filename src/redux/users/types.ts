
export enum UsersActions {
  DATAUSERS_INIT = "DATAUSERS_INIT",
  DATAUSERS_LOADED = "DATAUSERS_LOADED",
  DATAUSERS_LOAD_ERROR = "DATAUSERS_LOAD_ERROR"
}

export interface UsersState {
  dataUsers: string;
  error: string;
}