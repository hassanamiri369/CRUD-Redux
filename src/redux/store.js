
import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"

import RootReducer from './reducer/rooutReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const Store = createStore(RootReducer , composeWithDevTools(applyMiddleware(thunk)) , )


export default Store;