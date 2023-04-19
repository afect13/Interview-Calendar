import moment from "moment";
import { Div, Span } from "./Days.styled";
import { DaysProps } from "./Days.props";

const Days = ({ week }: DaysProps) => {
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
