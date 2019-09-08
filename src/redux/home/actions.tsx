import { HomeActions, HomeModalRequest, saveImgProfile } from "./types";

const prefix = "@@home";

export function doHome() {
  return { type: `${prefix}/${HomeActions.DO_HOME}` };
}
export function doHomeModal(data: HomeModalRequest) {
  return {
     type: `@@home/DO_HOME_MODAL`,
      data };
}
export function saveImg(data: saveImgProfile) {
  return {
     type: `@@home/DO_HOME_IMG`,
      data };
}
