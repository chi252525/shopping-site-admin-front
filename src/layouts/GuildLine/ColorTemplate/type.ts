export interface IColorListType {
  id: number;
  title: string;
  group: IGroupType[];
}

export interface IGroupType {
  id: number;
  colorName: string;
  colorNumber: string;
  textClassName: string;
  bgClassName: string;
}
