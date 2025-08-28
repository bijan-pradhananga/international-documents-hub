import { configureStore } from "@reduxjs/toolkit"
import uiSlice from "./features/ui/uiSlice"
import servicesSlice from "./features/services/servicesSlice"

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    services: servicesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
