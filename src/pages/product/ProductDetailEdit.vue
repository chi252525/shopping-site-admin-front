<template>
  <q-row class="q-gutter-md q-pl-md q-pr-md" align="center" justify="center">
    <q-col cols="auto" class="q-pa-md text-center">
      <div class="q-pa-md q-mt-md row">
        <div class="col-lg-6 col-xs-12 q-pa-md">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6">基本資訊</div>
            </q-card-section>

            <div class="q-pa-md">
              <UploadFile v-model="formData.image[0]" />

              <UploadImage></UploadImage>
            </div>

            <q-card-section class="q-pt-md">
              <q-input
                v-model="formData.baseSku"
                outlined
                label="baseSku"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="formData.name"
                outlined
                label="name"
                class="is_require q-mt-md"
              >
              </q-input>
              <div class="d-flex flex-wrap q-mt-md">
                <q-btn
                  v-for="word in keyword"
                  :key="word.codeID"
                  @click="copyText(word.codeName)"
                >
                  {{ word.codeName }}
                </q-btn>
              </div>
              <q-input
                v-model="formData.unitPrice"
                outlined
                label="單件成本"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="formData.salePrice"
                outlined
                label="單件售價"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="formData.discountPrice"
                outlined
                label="單件優惠價"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="formData.totalCost"
                outlined
                label="總成本"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="formData.estimatedTotalProfit"
                outlined
                label="預估總利潤"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-select
                v-model="formData.firstCategory.value"
                outlined
                :display-value="`${
                  formData.firstCategory.label
                    ? formData.firstCategory.label
                    : '第一層分類'
                }`"
                :options="firstCategoryOptions"
                class="is_require q-mt-md"
              />
              <q-select
                v-model="formData.secondCategory.value"
                outlined
                :display-value="`${
                  formData.secondCategory.label
                    ? formData.secondCategory.label
                    : '第二層分類'
                }`"
                :options="secondCategoryOptions"
                class="is_require q-mt-md"
              />

              <q-select
                v-model="formData.thirdCategory.value"
                outlined
                :display-value="`${
                  formData.thirdCategory.label
                    ? formData.thirdCategory.label
                    : '第三層分類'
                }`"
                :options="thirdCategoryOptions"
                class="is_require q-mt-md"
              />
              <Datepicker
                v-model="formData.startTime"
                dense
                format="dateTimeIso"
                outlined
                label="上架時間"
                placeholder="Placeholder"
                class="is_require q-mt-md"
              />

              <Datepicker
                v-model="formData.endTime"
                dense
                format="dateTimeIso"
                outlined
                label="下架時間"
                placeholder="Placeholder"
                class="is_require q-mt-md"
              />
              <q-select
                v-model="formData.packageUnit"
                :options="packageUnit"
                option-value="codeID"
                option-label="codeName"
                outlined
                label="選擇單位"
                placeholder="選擇單位"
                class="q-mt-md"
                :rules="[(val) => val?.length === 10]"
              />
              <q-checkbox v-model="formData.inStock" label="是否已到貨" />
              <q-checkbox
                v-model="formData.isSettled"
                val="line"
                label="是否已結清款項"
              />
              <q-checkbox
                v-model="formData.isShow"
                val="line"
                label="是否顯示在前台"
              />
              <q-checkbox
                v-model="formData.isOld"
                val="line"
                label="是否舊貨"
              />
              <q-editor v-model="formData.description" min-height="340px" />
            </q-card-section>
          </q-card>

          <q-separator inset />
        </div>

        <div class="col-lg-6 col-xs-12 q-pa-md">
          <q-card flat bordered>
            <q-card-section class="q-pt-md">
              <div class="text-h6">規格</div>

              <q-select
                v-model="formData.attribute1.size"
                :options="size"
                option-value="codeID"
                option-label="codeName"
                outlined
                label="選擇size"
                placeholder="選擇size"
                class="q-mt-md"
                :rules="[(val) => val?.length === 10]"
              />
              <q-select
                v-model="formData.attribute1.color"
                :options="colorCode"
                option-value="codeID"
                option-label="codeName"
                outlined
                label="選擇顏色"
                placeholder="選擇顏色"
                class="q-mt-md"
                :rules="[(val) => val?.length === 10]"
              />
              <q-btn
                outline
                no-caps
                class="guide-btn darken-hover"
                color="positive"
                label="套入"
                size="lg"
              />

              <div class="q-gutter-md q-mt-md">
                <div class="q-mb-md" style="display: inline-block">紅 - 90</div>
                <div class="q-mb-md" style="display: inline-block">
                  <q-input
                    type="number"
                    filled
                    v-model="formData.name"
                    label="庫存"
                  />
                </div>
              </div>
              <div class="q-gutter-md q-mt-md">
                <div class="q-mb-md" style="display: inline-block">
                  紅 - 100
                </div>
                <div class="q-mb-md" style="display: inline-block">
                  <q-input
                    type="number"
                    filled
                    v-model="formData.name"
                    label="庫存"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-lg-6 col-xs-12 q-mt-md q-pa-md">
          <q-card flat bordered>
            <q-card-section class="q-pt-md">
              <div class="text-h6">尺寸 (單位 ：ＣＭ)</div>
              <q-select
                v-model="inputVal"
                :options="productType"
                option-value="codeID"
                option-label="codeName"
                outlined
                label="選擇尺寸品項"
                placeholder="選擇尺寸品項"
                class="q-mt-md"
                :rules="[(val) => val?.length === 10]"
              />

              <q-btn
                outline
                no-caps
                class="guide-btn darken-hover"
                color="positive"
                label="套入"
                size="lg"
              />

              <div class="q-gutter-md q-mt-md">
                <q-markup-table :separator="'horizontal'" flat bordered>
                  <thead>
                    <tr>
                      <th class="text-left">上衣</th>
                      <th class="text-right">胸圍</th>
                      <th class="text-right">衣長</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-left">紅 - 90</td>
                      <td class="text-right">
                        <q-input type="number" filled v-model="formData.name" />
                      </td>
                      <td class="text-right">
                        <q-input type="number" filled v-model="formData.name" />
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">紅 - 100</td>
                      <td class="text-right">
                        <q-input type="number" filled v-model="formData.name" />
                      </td>
                      <td class="text-right">
                        <q-input type="number" filled v-model="formData.name" />
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-6 col-xs-12 q-mt-md q-pa-md">
          <q-card flat bordered>
            <q-card-section class="q-pt-md">
              <div class="text-h6">圖片</div>
              <UploadFile v-model="image" />
              <UploadFile v-model="image" />
              <UploadFile v-model="image" />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <q-row class="q-gutter-md flex flex-center">
        <q-btn
          outline
          no-caps
          class="guide-btn darken-hover"
          color="positive"
          label="新增或更新"
          size="lg"
        />
      </q-row>
    </q-col>
  </q-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { getCategoryList } from 'src/api/category';
const firstCategoryOptions = ref<{ label: string; value: number }[]>([]);
const secondCategoryOptions = ref<{ label: string; value: number }[]>([]);
const thirdCategoryOptions = ref<{ label: string; value: number }[]>([]);

import {
  colorCode,
  packageUnit,
  productType,
  size,
  keyword,
} from 'src/config/SelectOptions';

import UploadImage from './component/UploadImage.vue';
const inputVal = ref('');
const image = ref('');
import Datepicker from 'src/components/Datepicker/Datepicker.vue';
import { formatDateTime } from 'src/composable/DateUtils';
import { updateCategoryOptions, Category } from '../helper/categoryHelper';

// 定義表單數據型別
interface FormData {
  image: string[];
  name?: string;
  baseSku?: string;
  firstCategory: { value: number; label: string };
  secondCategory: { value: number; label: string };
  thirdCategory: { value: number; label: string };
  unitPrice?: number;
  salePrice?: number;
  discountPrice?: number;
  totalCost?: number;
  estimatedTotalProfit?: number;
  packageUnit?: string;
  description: string;
  isSettled?: boolean;
  isShow?: boolean;
  isOld?: boolean;
  inStock?: boolean;
  startTime: string;
  endTime: string;
  attribute1: { size: string; color: string };
  attribute2: { size: string; color: string };
}
const futureDate = new Date('1999-01-01');
const currentDate = new Date();
const formattedCurrentDate = formatDateTime(currentDate); // 格式化为 ISO 字符串
const formattedFutureDate = formatDateTime(futureDate);
const formData = ref<FormData>({
  image: [],
  name: '',
  baseSku: '',
  firstCategory: { label: '', value: 0 },
  secondCategory: { label: '', value: 0 },
  thirdCategory: { label: '', value: 0 },
  discountPrice: 0,
  unitPrice: 0,
  salePrice: 0,
  totalCost: 0,
  estimatedTotalProfit: 0,
  packageUnit: '',
  description: '',
  isSettled: false,
  isShow: false,
  isOld: false,
  inStock: true,
  startTime: formattedCurrentDate,
  endTime: formattedFutureDate,
  attribute1: { size: '', color: '' },
  attribute2: { size: '', color: '' },
});
const copyText = (text: string): void => {
  formData.value.name += text; // 將 text 更新到 formData.name
};
const fetchCategories = async () => {
  try {
    // 發送 API 請求
    const response = await getCategoryList();
    console.log('response', response);
    // 檢查 API 回應
    if (response && response.data && Array.isArray(response.data)) {
      const categories: Category[] = response.data;

      // 使用抽取的工具函數更新選項
      updateCategoryOptions(
        categories,
        1,
        firstCategoryOptions,
        formData.value.firstCategory
      );
      updateCategoryOptions(
        categories,
        2,
        secondCategoryOptions,
        formData.value.secondCategory
      );
      updateCategoryOptions(
        categories,
        3,
        thirdCategoryOptions,
        formData.value.thirdCategory
      );
    } else {
      console.error('Invalid category list format:', response);
    }
  } catch (error) {
    console.error('Error fetching category list:', error);
  }
};
const init = async () => {
  await fetchCategories();
};
init();
</script>
<style scoped></style>
