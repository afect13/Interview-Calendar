import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  width: 85%;
`;

export const Button = styled.button`
  cursor: pointer;
  border-style: none;
  background: inherit;
  width: 50px;
  color: #ff3131;
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const Span = styled.span`
  font-size: 1.15rem;
  line-height: 1.65rem;
  font-weight: 600;
`;
