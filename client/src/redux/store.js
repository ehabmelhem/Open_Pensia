import { createStore, applyMiddleware } from "redux";
import { reduxLogger } from 'redux-logger';
import rootReducer from "./reducers";

const logger = ReduxLogger.createLogger();


export default createStore(rootReducer, applyMiddleware(logger));
