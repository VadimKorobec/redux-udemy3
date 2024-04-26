import { configureStore } from "@reduxjs/toolkit";

import axios from "axios";
import * as api from "./config";

import { themeReducer } from "./features/theme/themeSlice";
import { controlsReducer } from "./features/controls/controlsSlice";
import { countryReducer } from "./features/countries/countriesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
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
