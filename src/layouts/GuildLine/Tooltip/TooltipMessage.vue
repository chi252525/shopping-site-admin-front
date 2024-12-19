<template>
  <q-toolbar class="bg-primary text-white">
    <q-toolbar-title> 提示訊息 </q-toolbar-title>
  </q-toolbar>

  <q-separator />

  <div class="q-gutter-md tooltip">
    <q-btn v-for="item in tooltipList" :key="item.id" color="secondary" @click="copyHtml(item)">
      {{ item.title }}

      <div v-html="item.htmlText"></div>

      <q-tooltip :anchor="item.anchor" :self="item.self" :offset="[10, 10]">
        <strong>{{ item.title }}</strong>
      </q-tooltip>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ITooltipListType } from './type';
import { useCopy } from '../Composable/useCopy';

const tooltipList = ref<ITooltipListType[]>([
  {
    id: 1,
    title: 'top',
    anchor: 'top middle',
    self: 'bottom middle',
    htmlText: `  <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
    <strong>top</strong>
  </q-tooltip>`,
  },
  {
    id: 2,
    title: 'right',
    anchor: 'center right',
    self: 'center left',
    htmlText: `  <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
    <strong>right</strong>
  </q-tooltip>`,
  },
  {
    id: 3,
    title: 'left',
    anchor: 'center left',
    self: 'center right',
    htmlText: `  <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
    <strong>left</strong>
  </q-tooltip>`,
  },
  {
    id: 4,
    title: 'bottom',
    anchor: 'bottom middle',
    self: 'top middle',
    htmlText: `  <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
    <strong>bottom</strong>
  </q-tooltip>`,
  },
]);

const { copyText } = useCopy();
const copyHtml = (item: ITooltipListType) => {
  copyText(item.htmlText, `${item.title} template`);
};
</script>

<style scoped lang="scss">
.tooltip {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>
