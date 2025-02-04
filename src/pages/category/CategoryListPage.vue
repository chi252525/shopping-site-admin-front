<template>
  <q-page class="q-mt-md q-pa-lg" justify="center">
    <q-table
      :rows="categories"
      :columns="columnData"
      row-key="id"
      class="guide-table q-mt-md"
      style="height: 500px"
      :loading="loading"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <template v-if="col.name === 'edit'">
              <router-link
                :to="{ path: '/category/' + props.row.id + '/edit' }"
              >
                <q-btn
                  size="md"
                  dense
                  class="guide-btn darken-hover"
                  color="primary"
                  outline
                  icon="edit"
                />
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
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getChineseYesNo } from '../helper/stringHelper';
import { Category } from '../helper/categoryHelper';
import { QTableProps } from 'quasar';
import { getCategoryList } from 'src/api/category';

const categories = ref<Category[]>([]);
const loading = ref(false);

const fetchCategories = async () => {
  loading.value = true;
  try {
    // 發送 API 請求
    const response = await getCategoryList();
    console.log('response', response);

    // 檢查 API 回應
    if (response && response.data && Array.isArray(response.data)) {
      categories.value = response.data;
    } else {
      console.error('Invalid category list format:', response);
    }
  } catch (error) {
    console.error('Error fetching category list:', error);
  } finally {
    loading.value = false; // 無論成功還是失敗都會結束 loading 狀態
  }
};

const init = async () => {
  await fetchCategories();
};
init();
const columnData = ref<QTableProps['columns']>([
  {
    name: 'edit',
    label: '編輯',
    field: 'edit',
  },
  {
    name: 'id',
    required: true,
    align: 'left',
    sortable: true,
    label: 'ID',
    field: 'id',
  },
  {
    name: 'name',
    required: true,
    align: 'left',
    sortable: true,
    label: '名稱',
    field: 'name',
  },
  {
    name: 'level',
    required: true,
    align: 'left',
    sortable: true,
    label: '層級',
    field: 'level',
  },
  {
    name: 'enabled',
    required: true,
    align: 'left',
    sortable: true,
    label: '啟用',
    field: 'enabled',
    format: (val: boolean | undefined) => getChineseYesNo(val),
  },
]);
</script>
