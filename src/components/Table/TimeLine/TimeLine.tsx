import { Div, Span } from "./TimeLine.styled";

const TimeLine = () => {
  const time: number[] = [];
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
