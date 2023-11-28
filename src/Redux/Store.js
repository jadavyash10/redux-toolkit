import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Cake/cakeSlice";
import iceCreamReducer from "./iceCream/iceCreamSlice";
import contentReducer from "./GetData/index";
// import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    iceCream: iceCreamReducer,
    content: contentReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
