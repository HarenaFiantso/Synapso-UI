import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authReducer";

/* - This code is configuring a Redux store with persistence using the "REDUX-PERSIST" library. This line is defining the configuration
 * for redux-persist. The "KEY" is the key for the persisted reducer, "STORAGE" is the storage engine to use (usually localStorage in a
 * web context), and "VERSION" is the version of the reducer.
 *
 * - const persistedReducer = persistReducer(persistConfig, authReducer): This line is creating a persisted reducer. persistReducer is
 * a function from redux-persist that takes a configuration "object and a reducer", and returns a NEW REDUCER that will automatically
 * persist its state.
 *
 * - The "STORE" is being created with configureStore, a function from "Redux Toolkit" that sets up a store with good defaults. The
 * reducer for the store is set to the persistedReducer.
 *
 * CHECK DOCUMENTATION about react-redux, redux-persist for more explanation
 * */
const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
