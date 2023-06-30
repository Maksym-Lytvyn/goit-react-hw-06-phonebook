// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import rootReducer from "./rootReducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from "./rootReducer";
import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
