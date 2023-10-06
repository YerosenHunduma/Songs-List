import Home from "./components/Home";
import styled from "@emotion/styled";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  min-height: auto;
  background: #161a2b;
  text-align: center;
  margin: auto 20px;
  border-radius: 10px;
  padding-bottom: 32px;
`;

function App() {
  return (
    <Cont>
      <Home />
    </Cont>
  );
}

export default App;
