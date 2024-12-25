/**
 * 數字相關判斷,回傳true/false
 * 方法說明：
 *   isNumber     判斷一個字串是否可以被解釋為數字
 *   isInteger    整數判斷
 *   isFloat　    小數判斷
 *   isPositive　 正數判斷
 *   isNegative   負數判斷
 * 數字相關判斷,回傳number/null
 *   convertToNumber  回傳一個數字，當輸入的字串可以解析為數字 */

export function isNumber(value: string | number): boolean {
  const num = parseFloat(value as string);
  return !isNaN(num) && isFinite(num);
}

export function convertToNumber(input: string | number): number | null {
  if (typeof input === 'number') {
    return input;
  }
  const result = parseFloat(input);
  return isNaN(result) ? null : result;
}

export function isPositive(value: string | number): boolean {
  if (typeof value === 'number') {
    return isFinite(value) && value >= 0;
  } else if (typeof value === 'string') {
    const num = parseFloat(value);
    return !isNaN(num) && isFinite(num) && num >= 0 && value.trim() === String(num);
  }
  return false;
}

export function isInteger(value: unknown): boolean {
  return typeof value === 'number' && Number.isInteger(value);
}

export function isFloat(value: unknown): boolean {
  return typeof value === 'number' && isFinite(value) && !Number.isInteger(value);
}

export function isNegative(value: unknown): boolean {
  return typeof value === 'number' && value < 0;
}

//組合函數：判斷一個變數是否可以被解釋為小數
export function isStringFloat(value: string | number): boolean {
  if (isNumber(value)) {
    const num = parseFloat(value as string);
    return isFloat(num);
  }
  return false;
}

//組合函數：檢查一個字串是否可以被解釋為小數，並返回轉換小數的結果
export function getIfFloat(value: string | number): number | null {
  if (isFloat(value)) {
    return convertToNumber(value);
  }
  return null;
}

export function parseStringToNumber(str: string | number): number {
  if (typeof str === 'number') {
    return isNaN(str) ? 0 : str;
  }
  if (str === '') {
    return 0;
  }
  const num = parseFloat(str);
  return isNaN(num) ? 0 : num;
}
