// CardProps.ts
export interface Row<T> {
  header: string;
  key: keyof T;
  render?: (value: T[keyof T]) => React.ReactNode;
}

export interface CardProps<T> {
  title: string;
  rows: Row<T>[];
  data: T;
  fontSize?: number;
}