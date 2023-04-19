import moment from "moment";
import { Div, Span, Button } from "./MonthAndYear.styled";
import { MonthAndYearProps } from "./MonthAndYear.props";

const MonthAndYear = ({ onChangeWeek, year }: MonthAndYearProps) => {
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
