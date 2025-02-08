<template>
  <q-page class="q-mt-md q-pa-lg" justify="center">
    <q-table :rows="rows" :columns="columns" row-key="id">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td :props="props" label="ID">{{ props.row.id }}</q-td>
          <q-td :props="props" label="Name">{{ props.row.name }} </q-td>
          <q-td :props="props" label="Image">
            <q-input
              type="file"
              v-model="fileModel"
              accept="image/*"
              @change="onImageChange(props.row, $event)"
              dense
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Row {
  id: number;
  name: string;
  image: string;
}

export default defineComponent({
  name: 'ImageUploadTable',
  setup() {
    const fileModel = ref(null);
    const columns: {
      name: string;
      label: string;
      align: 'left' | 'right' | 'center';
      field: string | ((row: string) => string);
      required?: boolean;
      sortable?: boolean;
      sort?: (a: string, b: string, rowA: string, rowB: string) => number;
      headerClasses?: string;
    }[] = [
      {
        name: 'id',
        label: 'ID',
        align: 'left',
        field: 'id',
        required: true,
        sortable: true,
      },
      {
        name: 'name',
        label: 'Name',
        align: 'center',
        field: 'name',
        sortable: false,
      },
      {
        name: 'image',
        label: 'Image',
        align: 'center',
        field: 'image',
        sortable: false,
      },
    ];

    const rows = ref<Row[]>([
      { id: 1, name: 'Item 1', image: 'ewe' },
      { id: 2, name: 'Item 2', image: 'ewew' },
      { id: 3, name: 'Item 3', image: 'ewe' },
    ]);

    const onImageChange = (row: Row, event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files ? input.files[0] : null;

      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          row.image = reader.result as string; // Set the base64 string
        };
        reader.readAsDataURL(file);
      }
    };

    return {
      columns,
      rows,
      onImageChange,
      fileModel,
    };
  },
});
</script>
