export enum LogoutActions {
    DO_LOGOUT = "DO_LOGOUT",
  }
  
  export interface LogoutState {
    isLog: boolean,
    data: any,
  }
  
  export interface LogoutRequest {
    isLog: boolean,
    data: any,
  }

