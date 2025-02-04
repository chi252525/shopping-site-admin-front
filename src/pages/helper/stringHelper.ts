export const getChineseYesNo = (isYes: boolean | undefined) => {
  if (isYes === undefined) return '';
  return isYes ? '是' : '否';
};
