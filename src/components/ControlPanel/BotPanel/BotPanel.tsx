import { BotPanelProps } from "./BotPanel.props";
import { Button, Div } from "./BotPanel.styled";

const BotPanel = ({ onChangeWeek, event, activeCell, onDelete }: BotPanelProps) => {
  return (
    <Div>
      <Button onClick={() => onChangeWeek("today")}>Today</Button>
      {activeCell && event.includes(activeCell) && <Button onClick={() => onDelete()}>Delete</Button>}
    </Div>
  );
};

export default BotPanel;
