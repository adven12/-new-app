
export enum HomeActions {
  DO_HOME = "DO_HOME",
  DO_HOME_LOAD = "DO_HOME_LOAD",
  DO_HOME_FAILED = "DO_HOME_FAILED",
  DO_HOME_MODAL = "DO_HOME_MODAL",
  DO_HOME_IMG = "DO_HOME_IMG",
}

export interface HomeState {
changePhoto: string;
error: string;
isLog: boolean,
age: string,
email: string,
name: string,
}
export interface HomeModalState  {
  email: string;
  name: string;
  changePhoto: string,
  idUser: number,
}
export interface HomeModalRequest {
  email: string;
  name: string;
}
export interface saveImgProfile {
  changePhoto: string;
  idUser: number;
}