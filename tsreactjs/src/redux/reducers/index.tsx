import { combineReducers } from "redux";
import startGameReducer from "./startGame";

const allReducers = combineReducers({
    startGame: startGameReducer,
});

export default allReducers;
