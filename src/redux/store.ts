
import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./rootReducer";
import { doLogin } from "./login/sagasLogin";
import { doRegistration } from "./registration/sagasRegistration"
import { all } from "redux-saga/effects";
import { loadState, saveState } from "./localStorage";

export default function configureStore(): Store<RootState> {
  
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools({});

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const persistedState = loadState();

  const store = createStore(rootReducer, persistedState ,enhancer);
  
    store.subscribe(() => {
      saveState({
        login:store.getState().login
      });
    });

    sagaMiddleware.run(function*() {
      yield all([doLogin(), doRegistration()]);
    });

  return store;
}