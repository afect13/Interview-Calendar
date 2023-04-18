import styled from "styled-components";
import moment from "moment";
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  width: 85%;
`;

const Button = styled.button`
  cursor: pointer;
  border-style: none;
  background: inherit;
  width: 50px;
  color: #ff3131;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const Span = styled.span`
  font-size: 1.15rem;
  line-height: 1.65rem;
  font-weight: 600;
`;

const MonthAndYear = ({ onChangeWeek, year }) => {
  return (
    <Div>
      <Button onClick={() => onChangeWeek("prev")}>
        <i className="fa-solid fa-angle-left"></i>
      </Button>
      <Span>{moment(`${year.split("/")[2]}-${year.split("/")[0]}-${year.split("/")[1]}`).format("MMMM YYYY")}</Span>
      <Button onClick={() => onChangeWeek("next")}>
        <i className="fa-solid fa-angle-right"></i>
      </Button>
    </Div>
  );
};

export default MonthAndYear;
