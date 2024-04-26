import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { themeReducer } from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
