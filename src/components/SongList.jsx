import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch, deleteSong, updateSong } from "../featuer/songSlice";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { TiEdit } from "react-icons/ti";
import { SiYoutubemusic } from "react-icons/si";
import { Box, Heading, Button } from "rebass";
const LoadingSpinner = styled.div`
  border: 4px solid rgba(192, 192, 192, 0.3);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  margin: 40px auto; /* Center the spinner */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const LoadingText = styled.div`
  color: #3498db;
  font-size: 34px;
  margin-top: 10px;
`;
const OuterWrapper = styled.div`
  padding: 40px 40px 10px 40px;
`;

const ThreeColumnLayout = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: left; 
  margin: 50px auto;
  color: white;
  max-width: 100%;
  word-break: break-word;
  flex-wrap: wrap; 
  @media (min-width: 768px) {
    flex-basis: calc(70% - 1em);
    max-width: calc(70% - 1em); 
  }
}`;

const Icon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const MusicNoteStyled = styled(SiYoutubemusic)`
  font-size: 24px;
  max-width: 10%;
  margin-right: 5px;
  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const SongInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 65%;
`;

const SongTitle = styled.div`
  align-items: center;
  text-align: left;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const ArtistName = styled.div`
  align-items: center;
  text-align: left;
  font-size: 12px;
  color: #888;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  margin: 0 auto;
  gap: 10px;
  width: 70%;
  flex-direction: column;
  align-items: center;
`;

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
const ResponsiveButton = styled(Button)`
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 14px 100px;
  }
`;

const Footer = styled.div`
  color: #fff;
  white-space: normal;
  margin: 0 40px;
`;

function SongList() {
  const [clickedSongTitle, setClickedSongTitle] = useState("");
  const [clickedSongArtist, setClickedSongArtist] = useState("");
  const [selectedSongId, setSelectedSongId] = useState(null);
  const songs = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const handleUpdate = (songId) => {
    const clickedSong = songs.find((song) => song.id === songId);

    if (clickedSong) {
      dispatch(
        updateSong({
          id: songId,
          title: clickedSongTitle,
          artist: clickedSongArtist,
        })
      );
    }

    setClickedSongTitle("");
    setClickedSongArtist("");
    setSelectedSongId(null);
  };
  console.log(songs);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingSpinner></LoadingSpinner>
          <LoadingText>Loading.....</LoadingText>
        </>
      ) : (
        <OuterWrapper>
          {selectedSongId !== null ? (
            <FormContainer>
              <Input
                type="text"
                placeholder="Track Title..."
                required
                value={clickedSongTitle}
                onChange={(e) => {
                  setClickedSongTitle(e.target.value);
                }}
              />
              <Input
                type="text"
                placeholder="Artist Name..."
                required
                value={clickedSongArtist}
                onChange={(e) => {
                  setClickedSongArtist(e.target.value);
                }}
              />
              <div>
                <ResponsiveButton
                  sx={{
                    marginLeft: "10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    outline: "none",
                    background:
                      "linear-gradient(90deg, rgba(0, 128, 0, 1) 0%, rgba(0, 255, 0, 1) 100%)",

                    color: "white",
                    padding: "14px 22px",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, rgba(155, 0, 250, 1) 0%, rgba(93, 12, 255, 1) 100%)",
                      color: "#fff",
                    },
                  }}
                  onClick={() => handleUpdate(selectedSongId)}
                >
                  Update
                </ResponsiveButton>
              </div>
            </FormContainer>
          ) : (
            songs.map((song) => (
              <ThreeColumnLayout key={song.id}>
                <MusicNoteStyled />
                <SongInfoWrapper>
                  <SongTitle>{song.title}</SongTitle>
                  <ArtistName>{song.artist}</ArtistName>
                </SongInfoWrapper>
                <Icon>
                  <TiEdit
                    onClick={() => {
                      setSelectedSongId(song.id);
                    }}
                  />
                  <RiCloseCircleLine
                    onClick={() => {
                      dispatch(deleteSong({ id: song.id }));
                    }}
                  />
                </Icon>
              </ThreeColumnLayout>
            ))
          )}
        </OuterWrapper>
      )}
      <Footer>© 2023. All rights reserved by Yerosen Hunduma</Footer>
    </>
  );
}

export default SongList;
