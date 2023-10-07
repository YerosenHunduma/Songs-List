import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
  },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongsFailure: (state) => {
      state.isLoading = false;
    },
    addSongs: (state, action) => {
      state.songs.unshift(action.payload);
    },
    deleteSong: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload.id);
    },
    updateSong: (state, action) => {
      state.songs.map((song) => {
        if (song.id === action.payload.id) {
          song.title = action.payload.title;
          song.artist = action.payload.artist;
        }
      });
    },
  },
});

export const {
  getSongsSuccess,
  getSongsFetch,
  getSongsFailure,
  addSongs,
  deleteSong,
  updateSong,
  addArtists,
} = songSlice.actions;
export default songSlice.reducer;
