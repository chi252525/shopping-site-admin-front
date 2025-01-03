import { ref } from 'vue';

export const useCheckbox = () => {
  const booleanValue = ref<boolean[]>([]);
  const inputBoolean = (value: boolean) => {
    if (booleanValue.value.includes(value)) {
      booleanValue.value = [];
    } else {
      booleanValue.value = [value];
    }
  };

  const stringValue = ref<string[]>([]);
  const inputString = (value: string) => {
    if (stringValue.value.includes(value)) {
      stringValue.value = [];
    } else {
      stringValue.value = [value];
    }
  };

  return {
    booleanValue,
    inputBoolean,
    stringValue,
    inputString,
  };
};
