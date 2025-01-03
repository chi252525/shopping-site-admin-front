<template>
  <q-page class="q-mt-md q-pa-lg" justify="center">
    <q-form>
      <q-row class="q-gutter-md flex flex-center">
        <q-btn
          outline
          no-caps
          class="guide-btn darken-hover"
          color="positive"
          label="新增"
          size="lg"
          :to="'/product/add'"
        />
        <q-input v-model="formData.baseSku" outlined placeholder="BaseSku" />
        <q-input v-model="formData.name" outlined placeholder="商品名稱" />
        <q-select
          v-model="formData.firstCategory"
          outlined
          :display-value="`${name ? name : '第一層分類'}`"
          :options="options"
        />
        <q-select
          v-model="formData.secondCategory"
          outlined
          :display-value="`${name ? name : '第二層分類'}`"
          :options="options"
        />
        <q-input
          v-model="formData.startTime"
          outlined
          label="上架時間"
          placeholder="Placeholder"
        ></q-input>
        <q-input
          v-model="formData.endTime"
          outlined
          label="下架時間"
          placeholder="Placeholder"
        ></q-input>
        <template v-slot:prepend>
          <q-icon name="event" color="positive" />
        </template>

        <q-btn
          outline
          no-caps
          class="guide-btn darken-hover"
          color="positive"
          label="查詢"
          size="lg"
          @click="fetchProductList()"
        />
        <q-btn
          outline
          no-caps
          class="guide-btn q-mt2 darken-hover"
          color="positive"
          label="同步蝦皮商品"
          size="lg"
        />
      </q-row>
    </q-form>

    <q-table
      v-model:pagination="initialPagination"
      :rows="products"
      :columns="columnData"
      row-key="index"
      class="guide-table q-mt-md"
      style="height: 500px"
      :loading="loading"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <template v-if="col.name == 'edit'">
              <router-link :to="{ path: '/product/123/edit' }">
                <q-btn
                  size="md"
                  dense
                  class="guide-btn darken-hover"
                  color="primary"
                  outline
                  icon="edit"
              /></router-link>
            </template>
            <template v-else-if="col.name == 'copy'">
              <router-link :to="{ path: '/product/123/edit' }">
                <q-btn
                  size="md"
                  dense
                  class="guide-btn darken-hover"
                  outline
                  color="grey"
                  icon="file_copy"
                ></q-btn>
              </router-link>
            </template>
            <template v-else>{{ col.value }}</template>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" size="42px" />
      </template>
    </q-table>
    <q-row class="q-gutter-md flex flex-center q-mt-md">
      <q-pagination
        class="q-mt-md"
        justify="center"
        v-model="current"
        :max="5"
        direction-links
      />
    </q-row>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { getProductList, ProductList } from 'src/api/product';

const name = ref('');

const current = ref(1);
//表格載入中
const loading = ref(false);
const options = ref(['第一層分類', '第二層分類', '第三層分類']);

//分頁資訊
const initialPagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 5,
});

interface ColumnData {
  name: string;
  label: string;
  field: string | ((row: unknown) => string | number | boolean);
  required?: boolean;
  align?: 'left' | 'right' | 'center';
  sortable?: boolean;
}
// 定義產品的類型

// 初始化表單數據
const formData = ref<FormData>({
  name: '',
  baseSku: '',
  firstCategory: '',
  secondCategory: '',
  minPrice: 0,
  maxPrice: 0,
  unitPrice: 0,
  salePrice: 0,
  discountPrice: 0,
  inStock: true,
  startTime: '2024-12-31T02:36:15.513Z',
  endTime: '2024-12-31T02:36:15.513Z',
  page: 0,
  size: 10,
  sort: 'baseSku,DESC',
});

// 定義表單數據型別
interface FormData {
  name?: string;
  baseSku?: string;
  firstCategory?: string;
  secondCategory?: string;
  minPrice?: number;
  maxPrice?: number;
  unitPrice?: number;
  salePrice?: number;
  discountPrice?: number;
  inStock?: boolean;
  startTime: string;
  endTime: string;
  page?: number;
  size?: number;
  sort?: string;
}

// 響應式數據
const products = ref<ProductList[]>([]);

const fetchProductList = async () => {
  try {
    // 傳遞必須的參數
    const response = await getProductList({
      baseSku: formData.value.baseSku,
      name: formData.value.name,
      size: formData.value.size,
      sort: formData.value.sort,
    });

    if (response && response.data) {
      // 處理返回數據
      console.log('Product list:', response.data.content);
      products.value = response.data.content;
    }
  } catch (error) {
    console.error('Error fetching product list:', error);
  }
};

const init = async () => {
  await fetchProductList();
};
init();
let columnData = ref<ColumnData[]>([
  {
    name: 'edit',
    label: '編輯',
    field: 'edit',
  },
  {
    name: 'copy',
    label: '複製',
    field: 'copy',
  },
  {
    name: 'baseSku',
    required: true,
    align: 'left',
    sortable: true,
    label: 'BaseSku',
    field: 'baseSku',
  },
  {
    name: 'name',
    required: true,
    align: 'left',
    sortable: true,
    label: '商品名稱',
    field: 'name',
  },
  {
    name: 'unitPrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '成本',
    field: 'unitPrice',
  },
  {
    name: 'salePrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '售價',
    field: 'salePrice',
  },
  {
    name: 'discountPrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '優惠價',
    field: 'discountPrice',
  },
  {
    name: 'inStock',
    required: true,
    align: 'left',
    sortable: true,
    label: '是否有庫存',
    field: 'inStock',
  },
  {
    name: 'availableStartTime',
    required: true,
    align: 'left',
    sortable: true,
    label: '上架時間',
    field: 'availableStartTime',
  },

  {
    name: 'availableEndTime',
    required: true,
    align: 'left',
    sortable: true,
    label: '下架時間',
    field: 'availableEndTime',
  },
  {
    name: 'isShow',
    required: true,
    align: 'left',
    sortable: true,
    label: '顯示在前台',
    field: 'isShow',
  },
  {
    name: 'firstCategory',
    required: true,
    align: 'left',
    sortable: true,
    label: '第一層分類',
    field: 'firstCategory',
  },
  {
    name: 'secondCategory',
    required: true,
    align: 'left',
    sortable: true,
    label: '第二層分類',
    field: 'secondCategory',
  },
]);
</script>

<style scoped>
/* Add any custom styles for the ProductList page */
</style>
