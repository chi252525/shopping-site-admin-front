// 定義分類選項的類型
export interface Category {
  id: number; // 分類 ID
  name: string; // 分類名稱
  level: number; // 分類層級
}

// 定義表單資料的類型
export interface CategoryFormData {
  value: number;
  label: string;
}

// 更新分類選項的方法
export const updateCategoryOptions = (
  categories: Category[],
  level: number,
  targetOptions: { value: { label: string; value: number }[] },
  targetFormData: CategoryFormData
): void => {
  // 過濾分類並更新選項
  targetOptions.value = categories
    .filter((category) => category.level === level)
    .map((category) => ({
      label: category.name,
      value: category.id,
    }));

  // 如果選項有值且表單資料尚未填寫，則設定預設值
  if (targetOptions.value.length > 0 && !targetFormData.value) {
    targetFormData.value = targetOptions.value[0].value;
    targetFormData.label = targetOptions.value[0].label;
  }
};
