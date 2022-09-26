import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { AuthReducer } from "../Auth/auth.reducer";
import thunk from "redux-thunk";
import { FeedReducer } from "../Feeds/feed.reducer";
const rootReducer = combineReducers({
  auth: AuthReducer,
  feeds:FeedReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
