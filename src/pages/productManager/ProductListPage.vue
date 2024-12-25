<template>
  <q-page class="q-mt-md q-pa-lg" justify="center">
    <q-form>
      <q-row class="q-gutter-md flex flex-center">
        <q-input v-model="name" outlined placeholder="BaseSku" />
        <q-input v-model="name" outlined placeholder="商品名稱" />
        <q-select
          v-model="name"
          outlined
          :display-value="`${name ? name : '第一層分類'}`"
          :options="options"
        />
        <q-select
          v-model="name"
          outlined
          :display-value="`${name ? name : '第二層分類'}`"
          :options="options"
        />
        <q-input
          v-model="name"
          outlined
          label="上架時間"
          placeholder="Placeholder"
        ></q-input>
        <q-input
          v-model="name"
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
      :rows="rowData"
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

import { getProductList as getProductListApi } from  'src/api/product';
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

const getProductList = async () => {
  const { data } = await getProductListApi();
  if (data) {
    products = [...data];
  }
};
const init = async () => {
  await getProductList();
}
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
const rowData = ref([
  {
    BaseSku: 'ABC123',
    UnitPrice: 100,
    SalePrice: 150,
    DiscountPrice: 120,
    InStock: true,
    AvailableStartTime: '2024-01-01 10:00:00',
    isShow: true,
    AvailableEndTime: '2024-12-31 23:59:59',
    Catagory1: '電子產品',
    Catagory2: '手機',
  },
  {
    BaseSku: 'XYZ456',
    UnitPrice: 200,
    SalePrice: 250,
    DiscountPrice: 220,
    InStock: false,
    AvailableStartTime: '2024-05-01 10:00:00',
    isShow: false,
    AvailableEndTime: '2024-11-30 23:59:59',
    Catagory1: '家電',
    Catagory2: '冷氣機',
  },
  {
    BaseSku: 'LMN789',
    UnitPrice: 300,
    SalePrice: 350,
    DiscountPrice: 320,
    InStock: true,
    AvailableStartTime: '2024-03-01 10:00:00',
    isShow: true,
    AvailableEndTime: '2024-12-31 23:59:59',
    Catagory1: '運動用品',
    Catagory2: '健身器材',
  },
]);
</script>

<style scoped>
/* Add any custom styles for the ProductList page */
</style>
