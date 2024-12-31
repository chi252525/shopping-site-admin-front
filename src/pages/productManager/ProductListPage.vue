<template>
  <q-page class="q-mt-md q-pa-lg" justify="center">
    <q-form>
      <q-row class="q-gutter-md flex flex-center">
        <q-input v-model="formData.baseSku" outlined placeholder="BaseSku" />
        <q-input
          v-model="formData.productName"
          outlined
          placeholder="商品名稱"
        />
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
        />

        <q-btn
          outline
          no-caps
          class="guide-btn darken-hover"
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
              <q-btn
                size="md"
                dense
                class="guide-btn darken-hover"
                outline
                color="grey"
                icon="file_copy"
              ></q-btn>
            </template>
            <template v-else>{{ col.value }}</template>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" size="42px" />
      </template>
    </q-table>

    <q-pagination
      class="q-mt-md"
      justify="center"
      v-model="current"
      :max="5"
      direction-links
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { getProductList } from 'src/api/product';

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
interface ProductList {
  baseSku: string;
  productName: string;
  firstCategory: string;
  secondCategory: string;
  startTime: string;
  endTime: string;
}

// 初始化表單數據
const formData = ref<FormData>({
  baseSku: '',
  productName: '',
  firstCategory: '',
  secondCategory: '',
  startTime: '2024-01-01', // 預設日期
  endTime: '2024-12-31', // 預設日期
});

// 定義表單數據型別
interface FormData {
  baseSku: string;
  productName: string;
  firstCategory: string;
  secondCategory: string;
  startTime: string;
  endTime: string;
}

// 響應式數據
const products = ref<ProductList[]>([]);

const fetchProductList = async () => {
  try {
    // 傳遞必須的參數
    const response = await getProductList({
      baseSku: formData.value.baseSku,
      productName: formData.value.productName,
      firstCategory: formData.value.firstCategory,
      secondCategory: formData.value.secondCategory,
      startTime: formData.value.startTime,
      endTime: formData.value.endTime,
    });

    if (response && response.data) {
      // 處理返回數據
      console.log('Product list:', response.data.content);
      // products.value = response.data.content;
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
    name: 'BaseSku',
    required: true,
    align: 'left',
    sortable: true,
    label: 'BaseSku',
    field: 'BaseSku',
  },
  {
    name: 'Name',
    required: true,
    align: 'left',
    sortable: true,
    label: '商品名稱',
    field: 'Name',
  },
  {
    name: 'UnitPrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '成本',
    field: 'UnitPrice',
  },
  {
    name: 'SalePrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '售價',
    field: 'SalePrice',
  },
  {
    name: 'DiscountPrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '優惠價',
    field: 'DiscountPrice',
  },
  {
    name: 'InStock',
    required: true,
    align: 'left',
    sortable: true,
    label: '是否有庫存',
    field: 'InStock',
  },
  {
    name: 'AvailableStartTime',
    required: true,
    align: 'left',
    sortable: true,
    label: '上架時間',
    field: 'AvailableStartTime',
  },

  {
    name: 'AvailableEndTime',
    required: true,
    align: 'left',
    sortable: true,
    label: '下架時間',
    field: 'AvailableEndTime',
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
    name: 'Catagory1',
    required: true,
    align: 'left',
    sortable: true,
    label: '第一層分類',
    field: 'Catagory1',
  },
  {
    name: 'Catagory2',
    required: true,
    align: 'left',
    sortable: true,
    label: '第二層分類',
    field: 'Catagory2',
  },
]);
</script>

<style scoped>
/* Add any custom styles for the ProductList page */
</style>
