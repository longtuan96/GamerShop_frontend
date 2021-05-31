import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import gameReducer from "./game.reducer";
import orderReducer from "./order.reducer";

import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  game: gameReducer,
  route: routeReducer,
  order: orderReducer,
  user: userReducer,
});
