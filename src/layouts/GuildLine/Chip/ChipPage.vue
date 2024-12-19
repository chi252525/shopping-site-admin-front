<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Chip </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/chip"> https://quasar.dev/vue-components/chip</a>
  </q-toolbar>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="q-mt-sm text-h6">1. 使用原生Quasar樣式不做修改 選擇<code>outline square 屬性</code></div>
        <div class="q-mt-sm text-h6">
          <span>Size</span>
        </div>
        <span v-for="(item, index) in ChipSizeList" :key="index" @click="copyHtml(item.htmlTxt)">
          <q-chip outline square color="primary" :size="item.size">{{ item.size }}</q-chip>
        </span>
        <div class="q-mt-sm text-h6">
          <span>Color</span>
        </div>
        <div>
          <span v-for="(item, index) in ChipColorList" :key="index" @click="copyHtml(item.htmlTxt)">
            <q-chip outline square :color="item.color" size="md">預設大小</q-chip>
          </span>
        </div>
        <div class="q-mt-sm text-h6">
          <span>Close icon</span>
        </div>
        <div class="q-mt-sm text-h7 text-grey">
          tip：依據Quasar設計removed屬性有close功能的icon在右邊一般icon的在左邊
        </div>
        <div>
          <span @click="copyHtml(removeString)">
            <q-chip v-model="chipMode" removable outline square color="primary">primary</q-chip>
          </span>
          <span @click="copyHtml(iconString)">
            <q-chip v-model="chipMode2" removable outline square color="primary" icon="cake">primary</q-chip>
          </span>
          <span @click="copyHtml(onlyIconString)">
            <q-chip outline square color="primary" icon="cake">primary</q-chip>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCopy } from '../Composable/useCopy';
const chipMode = ref(true);
const chipMode2 = ref(true);
const ChipSizeList = ref([
  { htmlTxt: '<q-chip outline square color="primary" size="1.7rem">1.7rem</q-chip>', size: '1.7rem' },
  { htmlTxt: '<q-chip outline square color="primary" size="xl">xl</q-chip>', size: 'xl' },
  { htmlTxt: '<q-chip outline square color="primary" size="lg">lg</q-chip>', size: 'lg' },
  { htmlTxt: '<q-chip outline square color="primary" size="md">md</q-chip>', size: 'md' },
  { htmlTxt: '<q-chip outline square color="primary" size="sm">sm</q-chip>', size: 'sm' },
]);
const ChipColorList = ref([
  { htmlTxt: '<q-chip outline square color="primary" size="md">primary</q-chip>', color: 'primary' },
  { htmlTxt: '<q-chip outline square color="secondary" size="md">secondary</q-chip>', color: 'secondary' },
  { htmlTxt: '<q-chip outline square color="accent" size="md">accent</q-chip>', color: 'accent' },
  { htmlTxt: '<q-chip outline square color="dark" size="md">dark</q-chip>', color: 'dark' },
  { htmlTxt: '<q-chip outline square color="positive" size="md">positive</q-chip>', color: 'positive' },
  { htmlTxt: '<q-chip outline square color="negative" size="md">negative</q-chip>', color: 'negative' },
  { htmlTxt: '<q-chip outline square color="info" size="md">info</q-chip>', color: 'info' },
  { htmlTxt: '<q-chip outline square color="warning" size="md">warning</q-chip>', color: 'warning' },
]);
const removeString = '<q-chip v-model="chipMode" removable outline square color="primary">primary</q-chip>';
const iconString = '<q-chip v-model="chipMode" removable outline square color="primary">primary</q-chip>';
const onlyIconString = '<q-chip outline square color="primary" icon="cake">primary</q-chip>';

const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};
</script>
