import styled from "styled-components";
export type SquareValue = "X" | "O" | "-";

const BoardButton = styled.button`
  background-color: ${(props) => {
    if (props.children === "X") return props.theme.xColor;
    if (props.children === "O") return props.theme.oColor;
    return props.theme.squareBgColor;
  }};
  color: ${(props) => {
    if (props.children === "X") return "#d32f2f";
    if (props.children === "O") return "#1976d2";
    return props.theme.textColor;
  }};
  border: none;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${({ theme }) => theme.hoverColor};
  }

  &:focus {
    outline: none;
  }
`;

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return <BoardButton onClick={onSquareClick}>{value}</BoardButton>;
}
