<template>
  <q-toolbar class="bg-primary text-white">
    <q-toolbar-title> 顏色 </q-toolbar-title>
  </q-toolbar>

  <q-separator />

  <div v-for="item in colorList" :key="item.id">
    <h5 class="title">{{ item.title }}</h5>

    <div class="row wrap justify-start items-center">
      <div v-for="group in item.group" :key="group.id" class="column justify-center items-center group">
        <div :style="{ background: group.colorNumber }" class="group-block"></div>
        <div class="column justify-center items-center group-name">
          <p>{{ group.colorName }}</p>
          <span>{{ group.colorNumber }}</span>

          <div class="q-mt-md column justify-center items-center">
            <q-btn outline rounded color="purple" label="複製色碼" class="q-mr-md" @click="copyColor(group)">
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="textSize-16">
                <strong>{{ group.colorNumber }}</strong>
              </q-tooltip>
            </q-btn>

            <q-btn
              outline
              rounded
              color="brown"
              label="複製 text class name"
              class="q-mt-md"
              @click="copyClassNameText(group)"
            >
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="textSize-16">
                <strong>{{ group.textClassName }}</strong>
              </q-tooltip>
            </q-btn>

            <q-btn
              outline
              rounded
              color="amber"
              label="複製 bg class name"
              class="q-mt-md"
              @click="copyBgClassNameText(group)"
            >
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="textSize-16">
                <strong>{{ group.bgClassName }}</strong>
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { IColorListType, IGroupType } from './type';
import { useCopy } from '../Composable/useCopy';

const colorList = ref<IColorListType[]>([
  {
    id: 1,
    title: 'Base Color',
    group: [
      {
        id: 1.1,
        colorName: 'Primary',
        colorNumber: '#77CCD8',
        textClassName: 'text-primary',
        bgClassName: 'bg-primary',
      },
      {
        id: 1.2,
        colorName: 'Secondary',
        colorNumber: '#3966DA',
        textClassName: 'text-secondary',
        bgClassName: 'bg-secondary',
      },
      {
        id: 1.3,
        colorName: 'Accent',
        colorNumber: '#FC7B66',
        textClassName: 'text-accent',
        bgClassName: 'bg-accent',
      },
      {
        id: 1.4,
        colorName: 'Dark',
        colorNumber: '#0F3B81',
        textClassName: 'text-dark',
        bgClassName: 'bg-dark',
      },
    ],
  },
  {
    id: 2,
    title: 'Status  Color',
    group: [
      {
        id: 2.1,
        colorName: 'Positive',
        colorNumber: '#67C23A',
        textClassName: 'text-positive',
        bgClassName: 'bg-positive',
      },
      {
        id: 2.2,
        colorName: 'Negative',
        colorNumber: '#FF9173',
        textClassName: 'text-negative',
        bgClassName: 'bg-negative',
      },
      {
        id: 2.3,
        colorName: 'Info',
        colorNumber: '#6A798E',
        textClassName: 'text-info',
        bgClassName: 'bg-info',
      },
      {
        id: 2.4,
        colorName: 'Warning',
        colorNumber: '#ECC141',
        textClassName: 'text-warning',
        bgClassName: 'bg-warning',
      },
    ],
  },
  {
    id: 3,
    title: 'Sub color',
    group: [
      {
        id: 3.1,
        colorName: 'Black',
        colorNumber: '#202020',
        textClassName: 'text-black',
        bgClassName: 'bg-black',
      },
      {
        id: 3.2,
        colorName: 'Background',
        colorNumber: '#EFF4F1',
        textClassName: 'text-background',
        bgClassName: 'bg-background',
      },
      {
        id: 3.3,
        colorName: 'LightGrey',
        colorNumber: '#f1f3f5',
        textClassName: 'text-lightGrey',
        bgClassName: 'bg-lightGrey',
      },
      {
        id: 3.4,
        colorName: 'Border',
        colorNumber: '#D6D6D6',
        textClassName: 'text-border',
        bgClassName: 'bg-border',
      },
      {
        id: 3.5,
        colorName: 'Placeholder',
        colorNumber: '#8A8A8A',
        textClassName: 'text-placeholder',
        bgClassName: 'bg-placeholder',
      },
    ],
  },
]);

const { copyText } = useCopy();

const copyColor = (item: IGroupType) => {
  copyText(item.colorNumber, `${item.colorNumber}`);
};

const copyClassNameText = (item: IGroupType) => {
  copyText(item.textClassName, `${item.textClassName}`);
};

const copyBgClassNameText = (item: IGroupType) => {
  copyText(item.bgClassName, `${item.bgClassName}`);
};
</script>

<style scoped lang="scss">
.title {
  margin: 12px 0 0 0;
  font-weight: bold;
}

.group {
  margin: 0 16px 36px 0;
  cursor: pointer;

  &-block {
    margin: 16px;
    width: 64px;
    height: 64px;
  }

  &-name {
    margin: 16px;
    p {
      font-weight: bold;
      margin: 0;
    }
  }

  &:hover {
    background-color: #f0f0f0;
    transition: 0.3s;
  }
}
</style>
