import { combineReducers } from "redux";
import Users from "./UsersReducer";

// agregate all the reducer and expose the final store
export default combineReducers({ Users });
