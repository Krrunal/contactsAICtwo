import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import AsyncStorage from "@react-native-community/async-storage";
import contactReducer from "./contactReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import sortContactsReducer from "./sortContactsReducer";
import switchNameReducer from "./switchNameReducer";
import themeReducer from "./themeReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const allReducers = combineReducers({
  // splash: splashReducer,
  login: loginReducer,
  contact: contactReducer,
  reg: signupReducer,
  themeReducer,
  sortContactsReducer,
  switchNameReducer,
});
const persistedReducer = persistReducer(persistConfig, allReducers);

// const store = createStore(allReducers, applyMiddleware(thunk));

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};

// export default store;
