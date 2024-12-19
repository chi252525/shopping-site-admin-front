<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Form - Input</q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/input"
      >https://quasar.dev/vue-components/input</a
    >
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
            <div class="q-mt-sm text-h6">
              1. 有label 與下方 hint 新增class .is_require 紅色必填星星
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 120px;
              "
            >
              <q-input
                v-model="inputVal"
                outlined
                hint="說明"
                label="姓名"
                class="is_require"
              >
              </q-input>
              <q-btn
                class="guide-btn darken-hover"
                style="width: 100%"
                color="accent"
                @click="copyHtml(inputList[0])"
                >複製上方元件</q-btn
              >
            </div>
            <div class="q-mt-sm text-h6">2. 有label 與 hint 與 placeholder</div>
            <q-input
              v-model="inputVal"
              outlined
              hint="說明"
              placeholder="請輸入手機號碼"
              label="Outlined"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[1])"
              >複製上方元件</q-btn
            >
            <div class="q-mt-sm text-h6">3. clearable</div>
            <q-input
              v-model="inputVal"
              clearable
              outlined
              hint="clearable"
              placeholder="請輸入手機號碼"
              label="Outlined"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[2])"
              >複製上方元件</q-btn
            >

            <div class="q-mt-sm text-h6">4. Disable & Readonly</div>
            <q-input v-model="inputVal" outlined hint="Disable" disable />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[3])"
              >複製上方元件</q-btn
            >

            <q-input v-model="inputVal" outlined hint="Readonly" readonly />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[4])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="inputVal"
              outlined
              hint="Disable and readonly"
              disable
              readonly
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[5])"
              >複製上方元件</q-btn
            >
          </div>
          <div class="col-3 q-gutter-md q-mr-lg q-ml-lg">
            <div class="q-mt-sm text-h6">
              5. 沒有label 單純顯示 placeholder 和 Value
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 120px;
              "
            >
              <q-input v-model="inputVal" outlined placeholder="Placeholder" />
              <q-btn
                class="guide-btn darken-hover"
                style="width: 100%"
                color="accent"
                @click="copyHtml(inputList[6])"
                >複製上方元件</q-btn
              >
            </div>

            <div class="q-mt-sm text-h6">6. 必填或檢核 (無錯誤訊息)</div>
            <q-input
              v-model="text1"
              outlined
              class="is_require"
              label="姓名"
              :rules="[(val:string) => !!val]"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[7])"
              >複製上方元件</q-btn
            >

            <div class="q-mt-sm text-h6">7. 檢核+錯誤訊息</div>
            <q-input
              v-model="text1"
              outlined
              placeholder="請輸入10碼"
              error-message="請輸入10碼"
              :rules="[(val:string) => val.length === 10]"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[8])"
              >複製上方元件</q-btn
            >

            <div class="q-mt-sm text-h6">8. Mask 格式化 (參考官網更多)</div>
            <q-input
              v-model="text1"
              outlined
              label="Phone"
              mask="(###) ### - ####"
              unmasked-value
              hint="Mask: (###) ### - ####"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[9])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="text1"
              outlined
              label="Phone"
              mask="(###) ### - ####"
              fill-mask
              unmasked-value
              hint="Phone"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[10])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="cardNo"
              outlined
              label="Card"
              mask="#### - #### - #### - ####"
              fill-mask="#"
              hint="Mask: #### - #### - #### - ####, FillMask: #"
            />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[11])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="password"
              outlined
              :type="isPwd ? 'password' : 'text'"
              hint="Password with toggle"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[12])"
              >複製上方元件</q-btn
            >
          </div>
          <div class="col-3 q-gutter-md q-mr-lg q-ml-lg">
            <div class="q-mt-sm text-h6">9. 顏色 與 icon</div>
            <q-input
              v-model="inputVal"
              outlined
              hint="說明"
              :dark="darkMode"
              label="Outlined"
              placeholder="Placeholder"
            >
              <template v-slot:append>
                <q-icon name="search" color="primary" />
              </template>
            </q-input>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[13])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="inputVal"
              outlined
              hint="說明"
              :dark="darkMode"
              label="Outlined"
              color="secondary"
              placeholder="Placeholder"
            >
              <template v-slot:append>
                <q-icon name="search" color="secondary" />
              </template>
            </q-input>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[14])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="inputVal"
              outlined
              label="Outlined"
              :dark="darkMode"
              color="positive"
              placeholder="Placeholder"
            >
              <template v-slot:append>
                <q-icon name="search" color="positive" />
              </template>
            </q-input>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[15])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="inputVal"
              outlined
              label="Outlined"
              :dark="darkMode"
              placeholder="Placeholder"
            >
              <template v-slot:prepend>
                <q-icon name="event" color="primary" />
              </template>
            </q-input>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[16])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="inputVal"
              outlined
              label="Outlined"
              :dark="darkMode"
              color="secondary"
              placeholder="Placeholder"
            >
              <template v-slot:prepend>
                <q-icon name="event" color="secondary" />
              </template>
            </q-input>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[17])"
              >複製上方元件</q-btn
            >

            <q-input
              v-model="inputVal"
              outlined
              label="Outlined"
              :dark="darkMode"
              color="positive"
              placeholder="Placeholder"
            >
              <template v-slot:prepend>
                <q-icon name="event" color="positive" />
              </template>
            </q-input>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[18])"
              >複製上方元件</q-btn
            >

            <div class="q-mt-sm text-h6">
              10. type typ="file" 不同於 file select的元件(去官網看更多)
            </div>
            <q-input v-model="time" outlined type="time" hint="Native time" />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[19])"
              >複製上方元件</q-btn
            >

            <q-input v-model="date" outlined type="date" hint="Native date" />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[20])"
              >複製上方元件</q-btn
            >

            <q-input v-model="number" outlined type="number" hint="number" />
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[21])"
              >複製上方元件</q-btn
            >

            <q-file
              v-model="model"
              outlined
              bottom-slots
              label="Label"
              counter
              max-files="12"
            >
              <template v-slot:before>
                <q-icon name="folder_open" />
              </template>
              <template v-slot:hint> Field hint </template>
              <template v-slot:append>
                <q-btn round dense flat icon="add" @click.stop.prevent />
              </template>
            </q-file>
            <q-btn
              class="guide-btn darken-hover q-mb-lg"
              style="width: 100%"
              color="accent"
              @click="copyHtml(inputList[24])"
              >複製上方元件</q-btn
            >

            <q-input v-model="date" mask="date" outlined :rules="dateRules">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCopy } from '../../Composable/useCopy';
import { useQuasar } from 'quasar';
import inputJson from './input.json';
const inputList = ref(inputJson);
const inputVal = ref('');
const text1 = ref('');
const $q = useQuasar();
const darkMode = ref($q.dark.isActive);
const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};

watch(
  () => $q.dark.isActive,
  (isActive) => {
    darkMode.value = isActive;
  }
);

const model = ref(null);
const number = ref(0);
const date = ref(0);
const time = ref(0);
const cardNo = ref('');
const password = ref('');
const isPwd = ref(true);
const dateRules = [
  (val: string) => !!val || '日期是必填的',
  (val: string) => /^\d{4}-\d{2}-\d{2}$/.test(val) || '日期格式應為 YYYY-MM-DD',
];
</script>
