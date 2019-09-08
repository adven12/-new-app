import { put, takeEvery , call, delay} from "redux-saga/effects";
import  {callApi}  from "./req";


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function* (action: any) {
    try {
      
      const users = yield call(callApi,'GET', 'users');

      const {
      data: { email, password },
      } = action;

    console.log('User email: ' + email);
    console.log('User password: ' + password);
    
    const user = users.find((users: any) => email === users.email && password === users.password)
    console.log(user);
   
    if(user){
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
