
import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./rootReducer";
import { doLogin } from "./login/sagasLogin";
import { doRegistration } from "./registration/sagasRegistration"
import { all } from "redux-saga/effects";
import { loadState, saveState } from "./localStorage";
import { doUsers } from "./users/sagasUsers";
import { saveImg } from "./home/sagasHome";
import { doProducts, doProductsUpdate } from "./products/sagasProducts";

export default function configureStore(): Store<RootState> {
  
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools({});

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const persistedState = loadState();

  const store = createStore(rootReducer, persistedState ,enhancer);
  
    store.subscribe(() => {
      saveState({
        login:store.getState().login,
        home:store.getState().home
      });
    });

    sagaMiddleware.run(function*() {
      yield all([doLogin(), doRegistration(), doUsers(), saveImg(), doProducts(), doProductsUpdate()]);
    });

  return store;
}