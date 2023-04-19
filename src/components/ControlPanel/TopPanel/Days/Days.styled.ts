import styled from "styled-components";
import { TodayProps } from "./Days.props";

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  justify-items: center;
  width: 85%;
`;

export const Span = styled.span<TodayProps>`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.$today ? "#ff3131" : "none")};
  color: ${(props) => (props.$today ? "white" : "none")};
  text-align: center;
  border-radius: 9999px;
`;
