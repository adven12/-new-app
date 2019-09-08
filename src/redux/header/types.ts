export enum HeaderActions {
    DO_LOGOUT = "DO_LOGOUT",
    LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
    LOGOUT_FAILED = "LOGOUT_FAILED"
  }
  
  export interface HeaderState {
    isLog: boolean;
    data:  any;
  }
  
  export interface HeaderRequest{
    isLog: boolean;
  }

