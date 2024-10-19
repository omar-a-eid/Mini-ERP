export interface Column<T> {
  header: string;
  key: keyof T;
  render?: (row: T) => JSX.Element;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowsPerPage?: number;
}
