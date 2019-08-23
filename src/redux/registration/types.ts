
export enum RegistrationActions {
  DO_REGISTRATION = "DO_REGISTRATION",
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
  REGISTRATION_FAILED = "REGISTRATION_FAILED"
}
export interface RegistrationState  {
  email: string;
  password: string;
  name: string;
  isLog: boolean,
}
export interface DoRegistrationProps {
  email: string;
  password: string;
  name: string;
  isLog: boolean,
}
export interface RegistrationRequest {
  email: string;
  password: string;
  name: string;
}

export interface RegistrationResult {
  token: string;
}