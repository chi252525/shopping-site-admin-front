import { date as dateUtil } from 'quasar';

/**
 * Transfer datestring format to Chinese date format
 * ex: 2024-05-22T00:00:00.000+08:00 -> 113.05.22
 * ex: 2024-05-22 -> 113.05.22
 * @param {string} date - Date datestring format
 * @returns {string}
 * @
 */
const transDateToChineseFormat = (date: string, needPad?: boolean) => {
  if (date) {
    const dateString = dateUtil.formatDate(new Date(date), 'YYYY-MM-DD');
    const dateArray = dateString.split('-');
    const chineseYear = parseInt(dateArray[0], 10) - 1911;
    let ChineseDate = `${chineseYear}.${dateArray[1]}.${dateArray[2]}`;
    if (needPad) ChineseDate = ChineseDate.padStart(9, '0');
    return ChineseDate;
  }
  return '';
};

const transChineseDateToDatetimeFormat = (chineseDate: string) => {
  try {
    const year = parseInt(chineseDate.slice(0, 3)) + 1911;
    const month = chineseDate.slice(3, 5);
    const date = chineseDate.slice(5, 7);
    const dateString = year + '-' + month + '-' + date;
    return dateString;
  } catch (err) {
    console.error(err);
  }
  return '';
};

function formatDate(date: Date) {
  // 獲取日期部分
  const getDate = new Date(date);
  const year = getDate.getFullYear();
  const month = String(getDate.getMonth() + 1).padStart(2, '0');
  const day = String(getDate.getDate()).padStart(2, '0');

  // 獲取時間部分
  const hours = String(getDate.getHours()).padStart(2, '0');
  const minutes = String(getDate.getMinutes()).padStart(2, '0');
  const seconds = String(getDate.getSeconds()).padStart(2, '0');

  // 結合所有部分，構建最終的格式
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export { transDateToChineseFormat, transChineseDateToDatetimeFormat, formatDate };
