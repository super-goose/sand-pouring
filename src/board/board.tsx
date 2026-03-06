import styled from "styled-components";

const Svg = styled.svg`
  border: 1px solid red;
  background-color: #222;
  width: calc(100vw - 2px);
  height: calc(150vw - 2px);
`;

export const Board = () => {
  return (
    <Svg viewBox="0, 0, 100, 150">
      <rect x={20} y={20} width={30} height={30} fill={"#080"} />
      <rect x={50} y={20} width={30} height={30} fill={"#880"} />
      <rect x={20} y={50} width={30} height={30} fill={"#088"} />
      <rect x={50} y={50} width={30} height={30} fill={"#008"} />
      <rect x={20} y={80} width={30} height={30} fill={"#800"} />
      <rect x={50} y={80} width={30} height={30} fill={"#808"} />
      {/*
       */}
    </Svg>
  );
};
