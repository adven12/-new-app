
import { RegistrationActions, RegistrationRequest } from "./types";

const prefix = "@@registration";

export function doRegistration(data: RegistrationRequest) {
  return {
     type: `${prefix}/${RegistrationActions.DO_REGISTRATION}`,
      data };
}
