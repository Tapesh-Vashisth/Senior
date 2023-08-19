import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxLogger from "redux-logger";
import boardReducer from "../features/boardSlice";


export const store = configureStore({
  reducer: {    
    boards: boardReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});


export default store;