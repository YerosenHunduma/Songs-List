import SongForm from "./SongForm";
import SongList from "./SongList";
import styled from "@emotion/styled";
import { useState } from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { Box, Heading, Button } from "rebass";

const Title = styled(Heading)`
  text-align: center;
  margin: 20px 0;
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    margin: 0 15px;
    font-size: 36px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: center;
    font-size: 24px;

    & > svg {
      margin-bottom: 10px;
    }
  }
`;

function Home() {
  const [isSongFormVisible, setisSongFormVisible] = useState(false);
  return (
    <>
      <Title>
        <GiMusicalNotes />
        Here is your Playlist
        <GiMusicalNotes />
      </Title>
      <SongForm />
      <SongList />
    </>
  );
}

export default Home;
