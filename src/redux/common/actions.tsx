import { ErrorActions } from "./types";

const prefix = "@@";

export function onError(error: string) {
  return { type: `${prefix}/${ErrorActions.ERROR_OCCURED}`, error };
}