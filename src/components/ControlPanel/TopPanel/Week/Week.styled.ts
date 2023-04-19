import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  justify-content: space-between;
  width: 85%;
`;

export const Span = styled.span`
  font-size: 0.7rem;
  font-weight: 650;
  text-align: center;
`;
