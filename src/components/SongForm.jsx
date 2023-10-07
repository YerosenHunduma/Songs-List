import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSongs, addArtists, getSongsFetch } from "../featuer/songSlice";
import { Box, Heading, Button } from "rebass";
import styled from "@emotion/styled";

const Input = styled.input`
  padding: 14px 16px;
  border-radius: 4px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 80%;
  background: transparent;
  color: #fff;
  &::placeholder {
    color: grey;
  }
`;

const FormContainer = styled.form`
  display: flex;
  margin: 0 auto;
  gap: 10px;
  width: 62%;
  flex-direction: column;
  align-items: center;
`;

const ResponsiveButton = styled(Button)`
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 14px 100px;
  }
`;

const ResponsiveButton2 = styled(Button)`
  width: 60%;
  margin: 20px auto;
  text-transform: uppercase;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

function SongForm() {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setArtist("");

    dispatch(
      addSongs({
        id: songs.length > 0 ? songs[songs.length - 1].id + 1 : 0,
        title,
        artist,
      })
    );

    setIsAddBtnClicked(false);
  };

  const toggleSongForm = () => {
    setIsAddBtnClicked(!isAddBtnClicked);
  };

  return (
    <>
      {isAddBtnClicked ? (
        <>
          <FormContainer onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Track Title..."
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="Artist Name..."
              required
              value={artist}
              onChange={(e) => {
                setArtist(e.target.value);
              }}
            />
            <div>
              <ResponsiveButton
                type="submit"
                sx={{
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  outline: "none",
                  background:
                    "linear-gradient(90deg,rgba(20, 159, 255, 1) 0%,rgba(17, 122, 255, 1) 100%)",
                  color: "white",
                  padding: "14px 22px",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(155, 0, 250, 1) 0%, rgba(93, 12, 255, 1) 100%)",
                    color: "#fff",
                  },
                }}
              >
                AddSong
              </ResponsiveButton>
            </div>
          </FormContainer>
        </>
      ) : (
        <>
          <ResponsiveButton2
            type="button"
            onClick={toggleSongForm}
            sx={{
              marginLeft: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              outline: "none",
              background:
                "linear-gradient(90deg,rgba(20, 159, 255, 1) 0%,rgba(17, 122, 255, 1) 100%)",
              color: "white",
              padding: "14px 22px",
              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(155, 0, 250, 1) 0%, rgba(93, 12, 255, 1) 100%)",
                color: "#fff",
              },
            }}
          >
            Add New Song
          </ResponsiveButton2>
        </>
      )}
    </>
  );
}

export default SongForm;
