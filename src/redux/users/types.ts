import { BaseState } from "../../types/baseState";

export enum UsersActions {
  DATAUSERS_INIT = "DATAUSERS_INIT",
  DATAUSERS_LOADED = "DATAUSERS_LOADED",
  DATAUSERS_LOAD_ERROR = "DATAUSERS_LOAD_ERROR"
}

export interface UsersRequest {
  dataUsers: any;
}

export interface UsersState extends BaseState {
  dataUsers: any;
  error: string;
}