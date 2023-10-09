import { call, put, takeEvery } from "redux-saga/effects";
import { getSongsSuccess } from "./songSlice";

function* fetchingSongs() {
  const songs = yield call(() => fetch("https://songlist.onrender.com/songs"));
  const formattedSongs = yield songs.json();
  const miniformattedSongs = formattedSongs.slice(0, 30);
  yield put(getSongsSuccess(miniformattedSongs));
}

// **Data Reset on Refresh:** Please note that the data will reset to its original state when the page is refreshed. This limitation is due to the absence of a real backend server with permanent data storage.

// **Why No Backend?** The decision not to deploy this application with a backend server that provides permanent data storage is primarily because of the lack of free hosting options for backend services. While the frontend demonstrates the functionality of CRUD operations, implementing a backend with permanent data storage would require additional hosting and maintenance costs.

// Feel free to explore and interact with the application to understand how it functions. If you intend to use it as a starting point for a real-world project, consider implementing a backend server to ensure data persistence beyond page refreshes.

// // Create Song
// function* creatingSong(action) {
//   try {
//     const response = yield call(() =>
//       fetch("http://localhost:8080/songs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(action.payload),
//       })
//     );
//     const newSong = yield response.json();
//     yield put(createSongSuccess(newSong));
//     yield put(getSongsFetch()); // Fetch songs again after creating
//   } catch (error) {
//     console.error("Error creating song:", error);
//   }
// }

// // Update Song
// function* updatingSong(action) {
//   try {
//     const response = yield call(() =>
//       fetch(`http://localhost:8080/songs/${action.payload.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(action.payload),
//       })
//     );
//     const updatedSong = yield response.json();
//     yield put(updateSongSuccess(updatedSong));
//     yield put(getSongsFetch()); // Fetch songs again after updating
//   } catch (error) {
//     console.error("Error updating song:", error);
//   }
// }

// // Delete Song
// function* deletingSong(action) {
//   try {
//     yield call(() =>
//       fetch(`http://localhost:8080/songs/${action.payload.id}`, {
//         method: "DELETE",
//       })
//     );
//     yield put(deleteSongSuccess(action.payload.id));
//   } catch (error) {
//     console.error("Error deleting song:", error);
//   }

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", fetchingSongs);
  // yield takeLatest("songs/createSong", creatingSong);
  // yield takeLatest("songs/updateSong", updatingSong);
  // yield takeLatest("songs/deleteSong", deletingSong);
}

export default songSaga;
