<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Form - Select </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/Select">https://quasar.dev/vue-components/Select</a>
  </q-toolbar>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="q-mt-sm text-h6">1. 覆蓋 readonly 樣式</div>
        <div class="q-mt-sm text-h6">2. 覆蓋 disable 樣式</div>
        <div class="q-mt-sm text-h6">3. 選用 outlined 樣式</div>
      </div>
    </div>
  </div>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="row">
          <div class="col-3 q-gutter-md q-mr-lg q-ml-lg">
            <div class="q-mt-sm text-h6">1. 有label 與下方 hint</div>
            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 120px">
              <q-select v-model="model" outlined :options="options" hint="說明" label="outlined" />
              <q-btn class="guide-btn darken-hover" style="width: 100%" color="accent" @click="copyHtml(selectList[0])"
                >複製上方元件</q-btn
              >
            </div>

            <div class="q-mt-sm text-h6">2. stack-label、display-value 以及 hint</div>
            <q-select
              v-model="model"
              outlined
              stack-label
              hint="display-value可以自訂呈現"
              label="Standard"
              :display-value="`${model ? model : '請選擇一個'}`"
              :options="options"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[1])"
              >複製上方元件</q-btn
            >

            <div class="q-mt-sm text-h6">3. Disable & Readonly</div>
            <q-select v-model="model" :options="options" outlined hint="Disable" disable />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[2])"
              >複製上方元件</q-btn
            >

            <q-select v-model="model" :options="options" outlined hint="Readonly" readonly />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[3])"
              >複製上方元件</q-btn
            >

            <q-select v-model="model" :options="options" outlined hint="Disable and readonly" disable readonly />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[4])"
              >複製上方元件</q-btn
            >
          </div>
          <div class="col-3 q-gutter-md q-mr-lg q-ml-lg">
            <div class="q-mt-sm text-h6">4. 沒有label 單純顯示 placeholder 和 Value</div>
            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 120px">
              <q-select
                v-model="model"
                outlined
                :display-value="`${model ? model : '請選擇一個'}`"
                :options="options"
              />
              <q-btn class="guide-btn darken-hover" style="width: 100%" color="accent" @click="copyHtml(selectList[5])"
                >複製上方元件</q-btn
              >
            </div>

            <div class="q-mt-sm text-h6">5. 必填或檢核 (無錯誤訊息)</div>
            <q-select v-model="selected" outlined clearable :options="options" :rules="[(val:string) => !!val]" />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[6])"
              >複製上方元件</q-btn
            >

            <div class="q-mt-sm text-h6">6. 檢核+錯誤訊息</div>
            <q-select
              v-model="text"
              :options="options"
              outlined
              placeholder="長度需大於10"
              error-message="長度需大於10"
              :rules="[(val:string) => val.length === 10]"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[7])"
              >複製上方元件</q-btn
            >

            <div class="q-mt-sm text-h6">7. 多選的下拉選單</div>
            <q-select v-model="multiple" outlined clearable multiple :options="options" label="Multiple" />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[8])"
              >複製上方元件</q-btn
            >
          </div>
          <div class="col-3 q-gutter-md q-mr-lg q-ml-lg">
            <div class="q-mt-sm text-h6">8. 顏色 與 icon</div>
            <q-select v-model="model" outlined :options="options" hint="說明" label="Outlined">
              <template v-slot:append>
                <q-icon name="search" color="primary" />
              </template>
            </q-select>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[9])"
              >複製上方元件</q-btn
            >

            <q-select v-model="model" outlined :options="options" hint="說明" label="Outlined" color="secondary">
              <template v-slot:append>
                <q-icon name="search" color="secondary" />
              </template>
            </q-select>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[10])"
              >複製上方元件</q-btn
            >

            <q-select v-model="model" outlined :options="options" hint="說明" label="Outlined" color="positive">
              <template v-slot:append>
                <q-icon name="search" color="positive" />
              </template>
            </q-select>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[11])"
              >複製上方元件</q-btn
            >

            <q-select v-model="model" outlined :options="options" label="Outlined" placeholder="Placeholder">
              <template v-slot:prepend>
                <q-icon name="event" color="primary" />
              </template>
            </q-select>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[12])"
              >複製上方元件</q-btn
            >

            <q-select
              v-model="model"
              outlined
              :options="options"
              label="Outlined"
              color="secondary"
              placeholder="Placeholder"
            >
              <template v-slot:prepend>
                <q-icon name="event" color="secondary" />
              </template>
            </q-select>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[13])"
              >複製上方元件</q-btn
            >

            <q-select
              v-model="model"
              outlined
              :options="options"
              label="Outlined"
              color="positive"
              placeholder="Placeholder"
            >
              <template v-slot:prepend>
                <q-icon name="event" color="positive" />
              </template>
            </q-select>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[14])"
              >複製上方元件</q-btn
            >
          </div>
        </div>
        <q-separator />
        <div class="row q-mt-xl">
          <div class="col-3 q-gutter-md q-mr-lg q-ml-lg">
            <div class="q-mt-sm text-h6">1.緊密外框</div>
            <q-select v-model="model" outlined :options="options" dense label="Outlined" placeholder="Placeholder" />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[15])"
              >複製上方元件</q-btn
            >
            <div class="q-mt-sm text-h6">2. 緊密的外框以及緊密的選項</div>
            <q-select
              v-model="model"
              outlined
              :options="options"
              dense
              options-dense
              label="Outlined"
              placeholder="Placeholder"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[16])"
              >複製上方元件</q-btn
            >
          </div>
          <div class="col-3 q-gutter-md q-mr-lg q-ml-lg">
            <div class="q-mt-sm text-h6">3.Select & Input</div>
            <q-select
              v-model="model"
              outlined
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="option"
              hint="最少輸入兩個字可以搜尋下拉選單的內容, 如：Google"
              style="width: 100%; padding-bottom: 32px"
              @filter="filterFn"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey"> No results </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[17])"
              >複製上方元件</q-btn
            >
          </div>

          <div class="col-3 q-gutter-md q-mr-lg q-ml-lg">
            <div class="q-mt-sm text-h6">4.textarea 卷軸</div>
            <div style="max-width: 100%">
              <q-input v-model="model" outlined type="textarea" />
            </div>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[18])"
              >複製上方元件</q-btn
            >
            <div class="q-mt-sm text-h6">5.textarea 輸入區塊會自動撐開</div>
            <div class="q-pa-md" style="max-width: 100%">
              <q-input v-model="model" outlined autogrow type="textarea" />
            </div>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(selectList[19])"
              >複製上方元件</q-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCopy } from '../../Composable/useCopy';
import { QSelectProps, useQuasar } from 'quasar';
import selectJson from './select.json';
const selectList = selectJson;
const text = ref('');
const $q = useQuasar();
const darkMode = ref($q.dark.isActive);
const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};

watch(
  () => $q.dark.isActive,
  (isActive) => {
    console.log('isActive', isActive);
    darkMode.value = isActive;
  }
);

const model = ref(null);
const multiple = ref(null);
const options = ref(['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle', '1234567890']);
const selected = ref(null);

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'];
const option = ref(stringOptions);
const filterFn: QSelectProps['onFilter'] = (val, update, abort) => {
  if (val.length < 2) {
    abort();
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    option.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1);
  });
};
</script>
