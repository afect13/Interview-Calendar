import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 60px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background: #f6f6f6;
  border-style: solid;
  border-top-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-color: #e4e4e7;
`;
export const Button = styled.button`
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
  cursor: pointer;
  border-style: none;
  background: inherit;
  color: #ff3131;
  font-size: 1.15rem;
  font-weight: 600;
`;
