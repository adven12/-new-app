import { put, takeEvery , call, delay} from "redux-saga/effects";
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import  {callApi}  from "../login/req";
import { UsersRequest } from "../users/types";
import { any } from "prop-types";


export function* doUsers(): IterableIterator<any> {
  yield takeEvery(`@@users/DATAUSERS_INIT`, function* (action: any) {
    try {

      console.log(action);
      
      const users = yield call(callApi,'GET', 'users');
      console.log(users)
  
    if(users){
        yield put({
        type: `@@users/DATAUSERS_LOADED`,
          payload: {
          dataUsers: users,
  
        }
       });
    }
       
//   } else {
//     yield put({
//       type: `@@ERROR_SHOW`,
//       payload: {
//         error: "Invalid login"
       
//       }
//     });

//     yield delay(3000);
//     yield put({
//       type: `@@ERROR_HIDE`
//     });
//   }
}catch (error) {
    yield put({
      type: `@@DATAUSERS_LOAD_ERROR`,
      payload: {
        error: error.message
      }
    });
  }
});
}
