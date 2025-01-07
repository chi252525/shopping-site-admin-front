<template>
  <div>
    <q-field
      v-model="date"
      :dense="dense"
      outlined
      :readonly="readonly"
      :stack-label="isNeedStackLabel"
      :label="label"
      :rules="rules"
      :clearable="clearable"
      :hide-bottom-space="hideBottomSpace"
    >
      <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">
          {{ transDateToChineseFormat }}
        </div>
      </template>
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              v-model="date"
              v-close-popup="dateClosePopup"
              :mask="getDateFormat"
              :default-year-month="defaultYearMonth"
              @navigation="dateClosePopup = false"
              @update:model-value="dateClosePopup = true"
            >
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-field>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DatePicker',
};
</script>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { date as dateUtil } from 'quasar';
import { IDateStringFormat } from '../Datepicker/type';
import { QFieldProps } from 'quasar';

interface DatepickerCustomProps {
  format?: string;
  dense?: boolean;
  modelValue: string | undefined | null;
  readonly?: boolean;
  rules?: ((arg: string) => boolean)[];
  defaultYearMonth?: string;
  clearable?: boolean;
}

type DatePickerProps = DatepickerCustomProps & QFieldProps;

const props = withDefaults(defineProps<DatePickerProps>(), {
  dense: false,
  format: 'dateTime',
  readonly: false,
});

const $emit = defineEmits(['update:modelValue']);

const date = ref('');
const dateFormat: IDateStringFormat = {
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  dateTime8601: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
  dateTimeIso: 'YYYY-MM-DDTHH:mm:ss',
  date: 'YYYY-MM-DD',
};
const dateClosePopup = ref(false);

const getDateFormat = computed(() => {
  return dateFormat[props.format];
});

const isNeedStackLabel = computed(() => {
  if (props.modelValue) {
    return true;
  }
  return false;
});

const transDateToChineseFormat = computed(() => {
  if (date.value) {
    const dateString = dateUtil.formatDate(new Date(date.value), 'YYYY-MM-DD');
    const dateArray = dateString.split('-');
    const chineseYear = parseInt(dateArray[0], 10) - 1911;
    return `${chineseYear}.${dateArray[1]}.${dateArray[2]}`;
  }
  return '';
});

watch(date, (newValue, oldValue) => {
  // 排除第一次預設值觸發
  if (props.modelValue && oldValue === '') {
    return;
  }

  $emit('update:modelValue', newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== date.value) {
      date.value = newValue
        ? dateUtil.formatDate(new Date(newValue), dateFormat[props.format])
        : '';
    }
  },
  { immediate: true }
);
</script>
