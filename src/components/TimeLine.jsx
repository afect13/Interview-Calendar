import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  align-items: flex-end;
  justify-items-end;
  width: 15%;
`;

const Span = styled.span`
  line-height: 5rem;
  min-height: 40px;
  border: solid 1px transparent;
  padding-right: 10px;
  color: grey;
`;

const TimeLine = () => {
  const time = [];
  for (let i = 1; i < 24; i++) {
    time.push(i);
  }
  return (
    <Div>
      {time.map((t, i) => (
        <Span key={i}>{`${t < 10 ? "0" + t : t}:00`}</Span>
      ))}
    </Div>
  );
};

export default TimeLine;
