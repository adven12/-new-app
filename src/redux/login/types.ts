export enum LoginActions {
    DO_LOGIN = "DO_LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILED = "LOGIN_FAILED"
  }
  
  export interface LoginState {
    email: string;
    password: string;
    isLog: boolean,
    error: string,
    data: any,
    test: string,
  }
  
  export interface DoLoginProps {
    email: string;
    password: string;
  }
  export interface LoginRequest {
    email: string;
    password: string;
  }
  export interface LogoutRequest{
    isLog: boolean;
  }
  export interface LogoutState{
    isLog: boolean;
  }
