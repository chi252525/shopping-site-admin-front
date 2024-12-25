/**
 * 過濾 request 物件參數,移除物件key值為空字串或者null
 * ex: { title: '', name: 'Tom' } -> { name: 'Tom' }
 * @param {object} params -任何物件
 * @returns {object}
 * @
 */

const filterRequestParams = <T extends object>(params: T): Partial<T> => {
  const obj: Partial<T> = {};

  const checkIsNullOrEmptyString = (value: boolean | string | number | null) => {
    let result = false;
    if (typeof value === 'string' && value.trim().length === 0) {
      result = true;
    }
    if (value === null) {
      result = true;
    }
    return result;
  };

  Object.entries(params as T).forEach(([key, value]) => {
    const typedKey = key as keyof T;
    if (!checkIsNullOrEmptyString(value)) {
      obj[typedKey] = value;
    }
  });

  return obj;
};

export { filterRequestParams };
