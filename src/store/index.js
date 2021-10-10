import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import digimonReducer from "./modules/reducers";

const reducers = combineReducers({ digimon: digimonReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;