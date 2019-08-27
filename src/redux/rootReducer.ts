    
import { Reducer, combineReducers } from "redux";
import { LoginState, LogoutState } from "./login/types";
import { loginReducer } from "./login/reducer";
import { homeReducer } from "./home/reducer";
import { errorReducer } from "./common/reducer";
import { HomeState } from "./home/types";
import { RegistrationState } from "../redux/registration/types";
import { registrationReducer } from "./registration/reducer";
import { logoutReducer } from "./logout/reducer";
import { UsersState } from "./users/types"
import { usersReducer } from "./users/reducer";



export interface RootState {
  error: any;
  login: LoginState;
  home: HomeState;
  registration: RegistrationState;
  logout: any;
  users: UsersState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  login: loginReducer,
  home: homeReducer,
  registration: registrationReducer,
  logout: logoutReducer,
  users: usersReducer,
});
export default rootReducer;
  