import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { AuthReducer } from "../Auth/auth.reducer";
import thunk from "redux-thunk";
import { FeedReducer } from "../Feeds/feed.reducer";
import { todoReducer } from "../Todo/todo.reducer";
const rootReducer = combineReducers({
  auth: AuthReducer,
  feeds:FeedReducer,
  todos:todoReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
