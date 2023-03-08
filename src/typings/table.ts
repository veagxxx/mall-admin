export interface Column {
  type?: string;
  prop?: string;
  label: string;
  align?: 'center' | 'left' | 'right';
  width?: string | number;
  fixed?: boolean | 'left' | 'right';
  index?: number | ((index: number) => number);
  children?: Column[];
  list?: ButtonList[];
  render?: Render; 
  formatter?: (row: Column, col: number, cellValue: any, index: number) => {};
}
interface ButtonList {
  text?: string;
  size?: 'default' | 'small' | 'mini';
  type?: Type;
  link?: boolean;
  cb?: (row: Column) => void;
}
type Type = 'default' | 'primary' | 'danger' | 'warning' | 'info';

interface Render {
  type: Type;
}
