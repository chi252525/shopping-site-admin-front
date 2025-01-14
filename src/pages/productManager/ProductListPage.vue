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
          :display-value="`${
            formData.firstCategory.label
              ? formData.firstCategory.label
              : '第一層分類'
          }`"
          :options="firstCategoryOptions"
        />
        <q-select
          v-model="formData.secondCategory"
          outlined
          :display-value="`${
            formData.secondCategory.label
              ? formData.secondCategory.label
              : '第二層分類'
          }`"
          :options="secondCategoryOptions"
        />

        <q-select
          v-model="formData.thirdCategory"
          outlined
          :display-value="`${
            formData.thirdCategory.label
              ? formData.thirdCategory.label
              : '第三層分類'
          }`"
          :options="thirdCategoryOptions"
        />
        <Datepicker
          v-model="formData.startTime"
          dense
          format="dateTimeIso"
          outlined
          label="上架時間"
          placeholder="Placeholder"
        />

        <Datepicker
          v-model="formData.endTime"
          dense
          format="dateTimeIso"
          outlined
          label="下架時間"
          placeholder="Placeholder"
        />

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
          label="重置"
          size="lg"
          @click="reset()"
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
            <template v-else-if="col.name == 'firstCategory'">
              {{ col.value.label }}
            </template>
            <template v-else-if="col.name == 'secondCategory'">
              {{ col.value.label }}
            </template>
            <template v-else-if="col.name == 'thirdCategory'">
              {{ col.value.label }}
            </template>
            <template v-else-if="col.name == 'wholesaler'">
              {{ col.value.label }}
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
        :max="totalPages"
        direction-links
        @update:model-value="handlePageChange"
      />
    </q-row>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { getCategoryList } from 'src/api/category';
import { getProductList, ProductList } from 'src/api/product';
import Datepicker from 'src/components/Datepicker/Datepicker.vue';
import { formatDateTime } from 'src/composable/DateUtils';

const totalPages = ref<number>(1);
const current = ref<number>(1);
//表格載入中
const loading = ref(false);
const firstCategoryOptions = ref<{ label: string; value: number }[]>([]);
const secondCategoryOptions = ref<{ label: string; value: number }[]>([]);
const thirdCategoryOptions = ref<{ label: string; value: number }[]>([]);
//分頁資訊
const initialPagination = ref({
  sortBy: 'name,ASC',
  descending: false,
  page: 0,
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
const pastDate = new Date('1999-01-01');
const currentDate = new Date();
const formattedCurrentDate = formatDateTime(currentDate); // 格式化为 ISO 字符串
const formattedPastDate = formatDateTime(pastDate);
// 初始化表單數據
const formData = ref<FormData>({
  name: '',
  baseSku: '',
  firstCategory: { label: '', value: 0 },
  secondCategory: { label: '', value: 0 },
  thirdCategory: { label: '', value: 0 },
  discountPrice: 0,
  inStock: true,
  startTime: formattedPastDate,
  endTime: formattedCurrentDate,
  page: initialPagination.value.page,
  size: initialPagination.value.rowsPerPage,
  sort: initialPagination.value.sortBy,
});

// 定義表單數據型別
interface FormData {
  name?: string;
  baseSku?: string;
  firstCategory: { value: number; label: string };
  secondCategory: { value: number; label: string };
  thirdCategory: { value: number; label: string };
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
    const requestParams = {
      baseSku: formData.value.baseSku,
      name: formData.value.name,
      firstCategory: formData.value.firstCategory.value,
      secondCategory: formData.value.secondCategory.value,
      thirdCategory: formData.value.thirdCategory.value,
      startTime: formData.value.startTime,
      endTime: formData.value.endTime,
      page: formData.value.page,
      size: formData.value.size,
      sort: formData.value.sort,
    };
    // 打印请求参数
    console.log('Request Params:', JSON.stringify(requestParams, null, 2));
    const response = await getProductList(requestParams);

    if (response && response.data) {
      // 處理返回數據
      console.log('Product list:', response.data);
      products.value = response.data.content;
      const pageNumber = response.data.pageable.pageNumber;
      if (typeof pageNumber === 'number' && !isNaN(pageNumber)) {
        current.value = pageNumber;
      } else {
        console.error('Invalid pageNumber:', pageNumber);
        current.value = 1; // Set to default if invalid
      }
      console.log('current.value:', current.value);
      totalPages.value = response.data.totalPages;
      console.log('totalPages.value:', totalPages.value);
    }
  } catch (error) {
    console.error('Error fetching product list:', error);
  }
};

const reset = () => {
  Object.assign(formData.value, {
    name: '',
    baseSku: '',
    firstCategory: { label: '', value: 0 },
    secondCategory: { label: '', value: 0 },
    thirdCategory: { label: '', value: 0 },
    minPrice: 0,
    maxPrice: 0,
    unitPrice: 0,
    salePrice: 0,
    discountPrice: 0,
    inStock: true,
    startTime: formattedPastDate,
    endTime: formattedCurrentDate,
    page: 0,
    size: 10,
    sort: 'name,ASC',
  });
};
// 呼叫 API 取得分類資料
const fetchCategories = async () => {
  try {
    // 發送 API 請求
    const response = await getCategoryList();
    console.log('response', response);
    // 檢查 API 回應
    if (response && response.data && Array.isArray(response.data)) {
      const categories = response.data;

      console.log('Categories list:', categories);

      // 更新第一層分類選項 (level = 1)
      firstCategoryOptions.value = categories
        .filter((category) => category.level === 1) // 過濾出 level = 1 的分類
        .map((category) => ({
          label: category.name,
          value: category.id,
        }));

      // 更新第二層分類選項 (level = 2)
      secondCategoryOptions.value = categories
        .filter((category) => category.level === 2) // 過濾出 level = 2 的分類
        .map((category) => ({
          label: category.name,
          value: category.id,
        }));

      thirdCategoryOptions.value = categories
        .filter((category) => category.level === 3) // 過濾出 level = 3 的分類
        .map((category) => ({
          label: category.name,
          value: category.id,
        }));
      if (
        firstCategoryOptions.value.length > 0 &&
        !formData.value.firstCategory.value
      ) {
        formData.value.firstCategory.value =
          firstCategoryOptions.value[0].value;
        formData.value.firstCategory.label =
          firstCategoryOptions.value[0].label;
      }

      if (
        secondCategoryOptions.value.length > 0 &&
        !formData.value.secondCategory.value
      ) {
        formData.value.secondCategory.value =
          secondCategoryOptions.value[0].value;
        formData.value.secondCategory.label =
          secondCategoryOptions.value[0].label;
      }

      if (
        thirdCategoryOptions.value.length > 0 &&
        !formData.value.thirdCategory.value
      ) {
        formData.value.thirdCategory.value =
          thirdCategoryOptions.value[0].value;
        formData.value.thirdCategory.label =
          thirdCategoryOptions.value[0].label;
      }
    } else {
      console.error('Invalid category list format:', response);
    }
  } catch (error) {
    console.error('Error fetching category list:', error);
  }
};
const handlePageChange = () => {
  console.log('current.value:', current.value);
  formData.value.page = current.value;
  console.log('formData.value.page', formData.value.page);
  fetchProductList();
};

const init = async () => {
  await fetchCategories();
  await fetchProductList();
};
init();

watch(
  () => initialPagination.value,
  async (newPagination, oldPagination) => {
    // 如果頁碼或每頁數量有變動，重新發送請求
    if (
      newPagination.page !== oldPagination.page ||
      newPagination.rowsPerPage !== oldPagination.rowsPerPage
    ) {
      formData.value.page = newPagination.page;
      formData.value.size = newPagination.rowsPerPage;
      await fetchProductList();
    }
  },
  { deep: true } // 深度監控，確保 pagination 變化被捕獲
);

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
    name: 'totalCost',
    required: true,
    align: 'left',
    sortable: true,
    label: '總成本',
    field: 'totalCost',
  },
  {
    name: 'estimatedTotalProfit',
    required: true,
    align: 'left',
    sortable: true,
    label: '預估總利潤',
    field: 'estimatedTotalProfit',
  },
  {
    name: 'unitPrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '單件成本',
    field: 'unitPrice',
  },
  {
    name: 'salePrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '單件售價',
    field: 'salePrice',
  },
  {
    name: 'discountPrice',
    required: true,
    align: 'left',
    sortable: true,
    label: '單件優惠價',
    field: 'discountPrice',
  },
  {
    name: 'inStock',
    required: true,
    align: 'left',
    sortable: true,
    label: '是否已到貨',
    field: 'inStock',
  },
  {
    name: 'startTime',
    required: true,
    align: 'left',
    sortable: true,
    label: '上架時間',
    field: 'startTime',
  },

  {
    name: 'endTime',
    required: true,
    align: 'left',
    sortable: true,
    label: '下架時間',
    field: 'endTime',
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
  {
    name: 'thirdCategory',
    required: true,
    align: 'left',
    sortable: true,
    label: '第三層分類',
    field: 'thirdCategory',
  },
  {
    name: 'wholesaler',
    required: true,
    align: 'left',
    sortable: true,
    label: '批發商',
    field: 'wholesaler',
  },
  {
    name: 'isSettled',
    required: true,
    align: 'left',
    sortable: true,
    label: '是否已結清',
    field: 'isSettled',
  },
  {
    name: 'isOld',
    required: true,
    align: 'left',
    sortable: true,
    label: '是否舊貨',
    field: 'isOld',
  },
]);
</script>

<style scoped>
/* Add any custom styles for the ProductList page */
</style>
