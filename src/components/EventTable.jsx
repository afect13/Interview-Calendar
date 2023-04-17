import styled from "styled-components";
import TimeLine from "./TimeLine";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 100%;
  overflow: scroll;
`;

const Table = styled.div`
  display: grid;
  order: 2;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  min-width: 300px;
  width: 85%;
  justify-content: space-between;
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: solid 1px #e4e4e7;
  border-left-width: 0px;
  cursor: pointer;
`;

const Square = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 0.175rem;
  background: ${(props) => (props.$event ? (props.activeCell === props.id ? "#858bff" : "#c0c3f5") : "")};
`;

const EventTable = ({ table, onChoseEvent, activeCell }) => {
  return (
    <Wrapper>
      <Table>
        {table.flat().map((a, i) => {
          if (!a) {
            return <Cell onClick={() => onChoseEvent(null)} key={i}></Cell>;
          }
          if (a) {
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
