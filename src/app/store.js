import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "../featuer/songSlice";
import songSaga from "../featuer/songSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: () => [saga],
});

saga.run(songSaga);

export default store;
