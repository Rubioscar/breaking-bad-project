import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createPromise } from "redux-promise-middleware";
import BreadCrumbs from "common/reducers/breadCrumbs";
import Loading from "common/reducers/loading";

const reducers = combineReducers({
  loading: Loading,
  breadCrumbs: BreadCrumbs,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(createPromise()))
);

export default store;
