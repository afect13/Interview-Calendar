import moment from "moment";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  justify-items: center;
  width: 85%;
`;

const Span = styled.span`
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

const Days = ({ week }) => {
  return (
    <Div>
      {week.map((w, i) => {
        if (w === moment().format("L")) {
          return (
            <Span $today key={i}>
              {w.split("/")[1]}
            </Span>
          );
        } else {
          return <Span key={i}>{w.split("/")[1]}</Span>;
        }
      })}
    </Div>
  );
};

export default Days;
