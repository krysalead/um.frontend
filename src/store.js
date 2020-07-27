import reducer from "./reducers/Reducers";
import { createStore, applyMiddleware } from "redux";
import { isPromise } from "./Utils";
import { REQUEST_ISSUE } from "./constants/ActionsType";

const initialState = {
  Users: {
    list: [],
  },
};

const asyncMiddleware = (store) => (next) => (action) => {
  if (isPromise(action.payload)) {
    action.payload.then(
      (data) => {
        console.log("Async calls data", data);
        action.payload = data;
        store.dispatch(action);
      },
      (err) => {
        store.dispatch({ type: REQUEST_ISSUE, error: err });
      }
    );
    return;
  }
  next(action);
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(asyncMiddleware)
);

export default store;
