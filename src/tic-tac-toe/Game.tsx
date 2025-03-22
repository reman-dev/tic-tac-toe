import Board from "./Board";
import styled from "styled-components";

const GameContainer = styled.div`
  height: 10vh;
  margin-top: 20px;
`;

const GameTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
`;

function Game() {
  return (
    <GameContainer>
      <GameTitle>Tic-Tac-Toe</GameTitle>
      <Board />
    </GameContainer>
  );
}

export default Game;
