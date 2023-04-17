import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  justify-content: space-between;
  width: 85%;
`;

const Span = styled.span`
  font-size: 0.7rem;
  font-weight: 650;
  text-align: center;
`;

const Week = () => {
  return (
    <Div>
      <Span>M</Span>
      <Span>T</Span>
      <Span>W</Span>
      <Span>T</Span>
      <Span>F</Span>
      <Span>S</Span>
      <Span>S</Span>
    </Div>
  );
};

export default Week;
