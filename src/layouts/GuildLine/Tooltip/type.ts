export interface ITooltipListType {
  id: number;
  title: string;
  anchor:
    | 'top middle'
    | 'bottom middle'
    | 'center right'
    | 'center left'
    | 'top left'
    | 'top right'
    | 'top start'
    | 'top end'
    | 'center middle'
    | 'center start'
    | 'center end'
    | 'bottom left'
    | 'bottom right'
    | 'bottom start'
    | 'bottom end';
  self:
    | 'top middle'
    | 'bottom middle'
    | 'center right'
    | 'center left'
    | 'top left'
    | 'top right'
    | 'top start'
    | 'top end'
    | 'center middle'
    | 'center start'
    | 'center end'
    | 'bottom left'
    | 'bottom right'
    | 'bottom start'
    | 'bottom end';
  htmlText: string;
}
