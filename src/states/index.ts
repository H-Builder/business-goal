import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
// import { save, load } from "redux-localstorage-simple"
import target from "./target/reducers"

// const PERSISTED_KEYS: string[] = []

const store = configureStore({
  reducer: {
    target,
  },
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }),
    // save({ states: PERSISTED_KEYS }),
  ],
  // preloadedState: load({
  //   states: PERSISTED_KEYS,
  //   disableWarnings: true,
  // }),
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
