import { call, put, takeEvery } from "redux-saga/effects";
import { getSongsSuccess } from "./songSlice";

function* fetchingSongs() {
  const songs = yield call(() => fetch("https://songlist.onrender.com/songs"));
  const formattedSongs = yield songs.json();
  const miniformattedSongs = formattedSongs.slice(0, 30);
  yield put(getSongsSuccess(formattedSongs));
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", fetchingSongs);
}

export default songSaga;
