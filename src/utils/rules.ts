export const rules = {
  require: (label: string) => {
    return (value: string) => {
      return value ? true : `${label} 為必填`;
    };
  },

  phoneNumber: (value: string) => {
    const isValidate = /^[0-9]*$/.test(value);
    if (isValidate) {
      return true;
    }
    return '請輸入有效的電話號碼';
  },

  phoneExtension: (value: string) => {
    const isValidate = /^[0-9]{1,5}$/.test(value);
    if (isValidate) {
      return true;
    }
    return '請輸入有效的電話號碼';
  },

  validateLogin: (val: string) => {
    return val && val.length == 10 ? true : '必填，請確認格式應為 0987654321';
  },
};
