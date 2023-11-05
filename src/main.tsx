import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./services/AuthReducer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

/* Redux persist configuration */
const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, AuthReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
