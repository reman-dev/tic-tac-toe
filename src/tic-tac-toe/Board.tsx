import styled from "styled-components";
import Square, { SquareValue } from "./Square";
import { useState } from "react";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  max-width: 480px;
  height: 480px;
  margin: 0 auto;
`;

const TurnText = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const calculateWinner = (squares: SquareValue[]) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of winnerLines) {
    const [a, b, c] = line;
    if (
      squares[a] === squares[b] &&
      squares[c] === squares[a] &&
      squares[c] === squares[b] &&
      squares[a] !== "-"
    ) {
      return squares[a];
    }
  }
  return "-";
};

export default function Board() {
  const [winner, setWinner] = useState<SquareValue>("-");
  const [isXTurn, setIsXTurn] = useState(true);
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill("-"));
  const onSquareClick = (i: number) => {
    if (squares[i] !== "-" || winner !== "-") {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = isXTurn ? "X" : "O";
    const calculatedWinner = calculateWinner(newSquares);
    if (calculatedWinner !== "-") {
      setWinner(calculatedWinner);
    }
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  };
  return (
    <>
      <TurnText>
        {winner === "-"
          ? `Next player: ${isXTurn ? "X" : "O"}`
          : `Winner: ${winner}`}
      </TurnText>
      <BoardContainer>
        {squares.map((SquareValue, index) => (
          <Square
            value={SquareValue}
            onSquareClick={() => onSquareClick(index)}
          />
        ))}
      </BoardContainer>
    </>
  );
}
