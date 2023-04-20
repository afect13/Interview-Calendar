import { Cell, Square, Table, Wrapper } from "./EventTable.styled";
import TimeLine from "../TimeLine/TimeLine";
import { EventTableProps } from "./EventTable.props";

const EventTable = ({ table, onChoseEvent, activeCell }: EventTableProps) => {
  return (
    <Wrapper>
      <Table>
        {table.flat().map((a: string | boolean, i: number) => {
          if (!a) {
            return <Cell onClick={() => onChoseEvent(null)} key={i}></Cell>;
          }
          if (a && typeof a === "string") {
            return (
              <Cell onClick={() => onChoseEvent(a)} key={i}>
                <Square $event activeCell={activeCell} id={a} />
              </Cell>
            );
          }
          return null;
        })}
      </Table>
      <TimeLine />
    </Wrapper>
  );
};

export default EventTable;
