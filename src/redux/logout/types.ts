export enum LogoutActions {
    DO_LOGOUT = "DO_LOGOUT",
    // LOGIN_SUCCESS = "LOGIN_SUCCESS",
    // LOGIN_FAILED = "LOGIN_FAILED"
  }
  
  export interface LogoutState {
    isLog: boolean,
    data: any,
  }
  
  // export interface DoLoginProps {
  //   email: string;
  //   password: string;
  // }
  export interface LogoutRequest {
    isLog: boolean,
    data: any,
  }

