import Week from "./Week/Week";
import Days from "./Days/Days";
import MonthAndYear from "./MonthAndYear/MonthAndYear";
import { Button, DivLower, DivPanel, DivUpper, H2 } from "./TopPanel.styled";
import { TopPanelProps } from "./TopPanel.props";

const TopPanel = ({ onAddEvent, week, onChangeWeek }: TopPanelProps) => {
  return (
    <DivPanel>
      <DivUpper>
        <H2>Interview Calendar</H2>
        <Button onClick={() => onAddEvent()}>+</Button>
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
