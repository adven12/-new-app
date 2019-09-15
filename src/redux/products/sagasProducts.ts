import { put, takeEvery , call} from "redux-saga/effects";
import  {callApiProducts}  from "../products/req";


export function* doProducts(): IterableIterator<any> {
  yield takeEvery(`GET_ALL_BOOKS`, function* () {
    try {
      
      const products = yield call(callApiProducts,'GET', 'products');

    if(products.length == 0){
      return null;
    }

        yield put({ 
        type: `LOADED_BOOKS`,
          payload: {
          dataProducts: products,
          
          }
       });
       
}catch (error) {
    yield put({
      type: `@@DATAPRODUCTS_ERROR`,
      payload: {
        error: error.message
      }
    });
  }
});
}
export function* doProductsUpdate(): IterableIterator<any> {
  yield takeEvery('DELETE_BOOK', function*(action: any) {
      
      try {
        console.log(action);
        
        let id = action.data;
        const API_URL = 'http://localhost:3003/products/'                                            
        const API_PATH = id
        
          yield call (() => {
              return fetch(API_URL + API_PATH, {
                method: 'DELETE'
              })

          } )

          yield put ({
            type: 'GET_ALL_BOOKS',
            payload: {
                            
            }
          })
                    
      } 
      
      catch (error) {
        yield put({
          type: `@@DATAPRODUCTS_ERROR`,
          payload: {
            error: error.message
          }
        });
      }
    })
  }
