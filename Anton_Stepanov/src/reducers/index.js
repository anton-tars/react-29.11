import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import messengerReducer from "./messengerReducer";
import profileReducer from "./profileReducer";

export default (history) => combineReducers({
   router: connectRouter(history),
   messenger: messengerReducer,
   profile: profileReducer,
});