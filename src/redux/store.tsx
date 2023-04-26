import { configureStore } from "@reduxjs/toolkit";

import devicesReducer from "./DeviceSlice";

const store = configureStore({
  reducer: {
    devices: devicesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;