import { put, takeEvery , call, cancel, fork, take, delay} from "redux-saga/effects";
import { push } from 'react-router-redux'
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import  {callApi}   from "../../redux/login/req";
import { RegistrationRequest, RegistrationState } from "./types";
import { any } from "prop-types";
// import { tokenService } from "../../serviceWorker"
    

// worker sagas
export function* doRegistration(): IterableIterator<any> {
  yield takeEvery(`@@registration/DO_REGISTRATION`, function* (action: any) {
    try {
    const { data } = action;
    console.log(data);
    
    
      const answerApi = yield call(callApi,'POST', 'users', action.data);
         console.log(answerApi);
         
        yield put({
        type: `@@registration/REGISTRATION_SUCCESS`,
          payload: {
          // data: answerApi,
          // isLog: true,
        }
       });

    
}catch (error) {
    yield put({
      type: `@@registration/REGISTRATION_FAILED`,
      payload: {
        error: error.message
      }
    });
  }
});
}