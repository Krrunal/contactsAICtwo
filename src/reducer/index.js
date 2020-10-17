import {applyMiddleware, combineReducers, createStore} from "redux";
import { persistReducer, persistStore } from 'redux-persist'

import  AsyncStorage from '@react-native-community/async-storage'
import contactReducer from "./contactReducer";
import loginReducer from "./loginReducer";
import themeReducer from "./themeReducer";
import signupReducer from './signupReducer';

import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage :AsyncStorage
}
  
const allReducers = combineReducers({
  // splash: splashReducer,
  login: loginReducer,
  contact: contactReducer,
  signup: signupReducer,
  themeReducer,
});
const persistedReducer = persistReducer(persistConfig, allReducers)

// const store = createStore(allReducers, applyMiddleware(thunk));

 
export default () => {
  let store = createStore(persistedReducer,applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}  

// export default store;
