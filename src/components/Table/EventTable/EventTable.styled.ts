import styled from "styled-components";
import { EventProps } from "./EventTable.props";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 100%;
  overflow: scroll;
`;

export const Table = styled.div`
  display: grid;
  order: 2;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  min-width: 300px;
  width: 85%;
  justify-content: space-between;
`;

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: solid 1px #e4e4e7;
  border-left-width: 0px;
  cursor: pointer;
`;

export const Square = styled.div<EventProps>`
  width: 90%;
  height: 90%;
  border-radius: 0.175rem;
  background: ${(props) => (props.$event ? (props.activeCell === props.id ? "#858bff" : "#c0c3f5") : "")};
`;
