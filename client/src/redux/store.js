import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";
import thunk from 'redux-thunk';
// import axios from 'axios';

// const logger = reduxLogger.createLogger();


export default createStore(rootReducer, applyMiddleware( thunk));
