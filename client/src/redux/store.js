import { createStore, applyMiddleware } from "redux";
import { reduxLogger } from 'redux-logger';
import rootReducer from "./reducers";
import { ReduxThunk } from 'redux-thunk';
import axios from 'axios';

const logger = reduxLogger.createLogger();


export default createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
