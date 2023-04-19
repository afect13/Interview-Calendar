export type EventProps = {
  $event?: boolean;
  activeCell?: string | null;
};

export type EventTableProps = {
  table: (string | boolean)[][];
  onChoseEvent: (id: string | null) => void;
  activeCell?: string | null;
};
