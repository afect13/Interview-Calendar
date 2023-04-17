import styled from "styled-components";
import Week from "../Week";
import Days from "../Days";
import MonthAndYear from "../MonthAndYear";

const DivPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  width: 100%;
`;
const DivUpper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  background: #ffffff;
`;
const DivLower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  background: #f6f6f6;
  border-style: solid;
  border-top-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-color: #e4e4e7;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1.45rem;
  line-height: 1.75rem;
  font-weight: 400;
  margin-left: 25px;
`;

const Button = styled.button`
  margin-right: 20px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  border-style: none;
  background: inherit;
  color: #ff3131;
  font-size: 2.65rem;
  line-height: 1.75rem;
  font-weight: 300;
`;

const TopPanel = ({ onAddEvent, week, onChangeWeek }) => {
  return (
    <DivPanel>
      <DivUpper>
        <H2>Interview Calendar</H2>
        <Button onClick={() => onAddEvent()}>
          <i class="fa-light fa-plus"></i>
        </Button>
      </DivUpper>
      <DivLower>
        <Week />
        <Days week={week} />
        <MonthAndYear year={week[0]} onChangeWeek={onChangeWeek} />
      </DivLower>
    </DivPanel>
  );
};

export default TopPanel;
