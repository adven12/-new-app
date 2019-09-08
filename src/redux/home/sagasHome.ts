import { put, takeEvery , call} from "redux-saga/effects";
import  {callApi}   from "../../redux/login/req";
    

export function* saveImg(): IterableIterator<any> {
  yield takeEvery(`@@home/DO_HOME_IMG`, function* (action: any) {
    try {
       
      const answerApi = yield call(callApi,'PUT', 'users');
         console.log(answerApi);

         const { img, id  } = action;
         
        console.log('User changePhoto: ' + img);
        console.log('User idUser: ' + id);
            
        const user = answerApi.find((answerApi: any) => id === answerApi.id )
        console.log(user);

        if(user){
        yield put({
        type: `@@home/DO_HOME_IMG`,
          payload: {
          data: user,
          // isLog: true,
        }
       });
      }
    
}catch (error) {
    yield put({
      type: `@@home/DO_HOME_FAILED`,
      payload: {
        error: error.message
      }
    });
  }
});
}