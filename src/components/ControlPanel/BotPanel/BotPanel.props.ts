export type BotPanelProps = {
  onChangeWeek: (button: string) => void;
  event: string[];
  activeCell: string | null;
  onDelete: () => void;
};
