import { put, takeEvery , call} from "redux-saga/effects";
import  {callApiProducts}  from "../products/req";


export function* doProducts(): IterableIterator<any> {
  yield takeEvery(`@@products/DATAPRODUCTS_INIT`, function* () {
    try {
    
      const products = yield call(callApiProducts,'GET', 'products');
      console.log('products ', products);

      // const {
      //   data: { addToBasket },
      //   } = action;
      //   console.log('addToBasket saga: ' + addToBasket);
      //   console.log('action saga: ' + action);


    if(products){
        yield put({ 
        type: `@@products/DATAPRODUCTS_LOADED`,
          payload: {
          dataProducts: products,
          
          }
       });
    }
       
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
