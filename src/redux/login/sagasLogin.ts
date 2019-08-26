import { put, takeEvery , call, delay} from "redux-saga/effects";
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import  {callApi}  from "./req";
import { LoginRequest } from "./types";
import { any } from "prop-types";

// worker sagas
export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function* (action: any) {
    try {

      console.log(action);
      
      const users = yield call(callApi,'GET', 'users');

      const {
      data: { email, password },
      } = action;

    console.log('User email: ' + email);
    console.log('User password: ' + password);
    

    const user = users.find((users: any) => email === users.email && password === users.password)
    console.log(user);
   
    if(user){
      // console.log(validateUser())
        yield put({
        type: `@@login/LOGIN_SUCCESS`,
          payload: {
          data: user,
  
        }
       });
       
       
  } else {
    yield put({
      type: `@@ERROR_SHOW`,
      payload: {
        error: "Invalid login"
       
      }
    });

    yield delay(3000);
    yield put({
      type: `@@ERROR_HIDE`
    });
  }
}catch (error) {
    yield put({
      type: `@@ERROR_SHOW`,
      payload: {
        error: error.message
      }
    });
  }
});
}

// worker sagas
// export function* doLogout(): IterableIterator<any> {

//         yield put({
//         type: `@@logout/DO_LOGOUT`,
//           payload: {
//           data: {
//             isLog: "false",
//           }
      
  
//         }
//        });
// }