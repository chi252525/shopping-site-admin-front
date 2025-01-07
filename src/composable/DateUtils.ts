// dateUtils.ts

/**
 * 格式化日期為 "YYYY-MM-DDTHH:MM:SS" 格式
 * @param inputDate - 可以是 Date 對象或者 ISO 8601 字符串
 * @returns 格式化後的日期字符串
 */
export function formatDateTime(inputDate: Date | string): string {
  const date = new Date(inputDate);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date input');
  }

  // 取出日期部分 YYYY-MM-DD 和時間部分 HH:MM:SS
  const formattedDate = date.toISOString().split('T')[0]; // 取日期部分 "YYYY-MM-DD"
  const formattedTime = date.toTimeString().split(' ')[0]; // 取時間部分 "HH:MM:SS"

  return `${formattedDate}T${formattedTime}`;
}

/**
 * 將ISO 8601格式的日期字符串轉換為 Date 對象
 * @param isoDate - ISO 8601 格式的日期字符串
 * @returns 返回 Date 對象
 */
export function parseISODate(isoDate: string): Date {
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid ISO date string');
  }
  return date;
}
