import { configureStore } from "@reduxjs/toolkit";

import axios from "axios";
import * as api from "./config";

import { themeReducer } from "./features/theme/themeSlice";
import { controlsReducer } from "./features/controls/controlsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
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
