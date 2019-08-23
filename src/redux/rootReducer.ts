    
import { Reducer, combineReducers } from "redux";
import { LoginState, LogoutState } from "./login/types";
import { loginReducer } from "./login/reducer";
import { homeReducer } from "./home/reducer";
import { errorReducer } from "./common/reducer";
import { HomeState } from "./home/types";
import { RegistrationState } from "../redux/registration/types";
import { registrationReducer } from "./registration/reducer";

export interface RootState {
  error: any;
  login: LoginState;
  home: HomeState;
  registration: RegistrationState;
 
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  login: loginReducer,
  home: homeReducer,
  registration: registrationReducer,
});
export default rootReducer;
  