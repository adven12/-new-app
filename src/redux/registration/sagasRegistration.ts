import { put, takeEvery , call} from "redux-saga/effects";
import  {callApi}   from "../../redux/login/req";
    

export function* doRegistration(): IterableIterator<any> {
  yield takeEvery(`@@registration/DO_REGISTRATION`, function* (action: any) {
    try {
        const answerApi = yield call(callApi,'POST', 'users', action.data);
        yield put({
        type: `@@registration/REGISTRATION_SUCCESS`,
          payload: {

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