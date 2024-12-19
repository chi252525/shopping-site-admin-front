<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Form - FieldSet</q-toolbar-title>
    客製化樣式
  </q-toolbar>
  <div class="row">
    <div class="col-10">
      <div class="q-mt-xl">
        <div class="q-mt-sm guide-field-grizzle">
          <div class="q-ml-sm field-title">Color Grey</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm guide-field-warning">
          <div class="q-ml-sm field-title">Color Yellow (warning)</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm guide-field-primary">
          <div class="q-ml-sm field-title">Color Primary</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm guide-field-secondary">
          <div class="q-ml-sm field-title">Color Secondary</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm guide-field-positive">
          <div class="q-ml-sm field-title">Color Positive</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm guide-field-accent">
          <div class="q-ml-sm field-title">Color Accent</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm bg-guide-field-grizzle">
          <div class="q-ml-sm bg-field-title">Color Grey</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm bg-guide-field-warning">
          <div class="q-ml-sm bg-field-title">Color Yellow (warning)</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm bg-guide-field-primary">
          <div class="q-ml-sm bg-field-title">Color Primary</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm bg-guide-field-secondary">
          <div class="q-ml-sm bg-field-title">Color Secondary</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm bg-guide-field-positive">
          <div class="q-ml-sm bg-field-title">Color Positive</div>
          <div class="field-content">test</div>
        </div>
        <div class="q-mt-sm bg-guide-field-accent">
          <div class="q-ml-sm bg-field-title">Color Accent</div>
          <div class="field-content">test</div>
        </div>
      </div>
    </div>
    <div class="q-mt-xl col-2 d-flex justify-center items-center">
      <div
        v-for="(item, index) in felidSetList"
        :key="index"
        class="text-center"
        :style="index !== 0 ? { 'margin-top': '20px', 'padding-top': '20px' } : ''"
      >
        <q-btn class="q-mt-none q-mb-none guide-btn darken-hover" color="accent" @click="copyHtml(item)">複製</q-btn>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCopy } from '../../Composable/useCopy';
const felidSetList = ref([
  `<div class="q-mt-sm guide-field-grizzle">
          <div class="q-ml-sm field-title">Color Grey</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm guide-field-warning">
          <div class="q-ml-sm field-title">Color Yellow (warning)</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm guide-field-primary">
          <div class="q-ml-sm field-title">Color Primary</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm guide-field-secondary">
          <div class="q-ml-sm field-title">Color Secondary</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm guide-field-positive">
          <div class="q-ml-sm field-title">Color Positive</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm guide-field-accent">
          <div class="q-ml-sm field-title">Color Accent</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm bg-guide-field-grizzle">
          <div class="q-ml-sm bg-field-title">Color Grey</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm bg-guide-field-warning">
          <div class="q-ml-sm bg-field-title">Color Yellow (warning)</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm bg-guide-field-primary">
          <div class="q-ml-sm bg-field-title">Color Primary</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm bg-guide-field-secondary">
          <div class="q-ml-sm bg-field-title">Color Secondary</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm bg-guide-field-positive">
          <div class="q-ml-sm bg-field-title">Color Positive</div>
          <div class="field-content">test</div>
        </div>`,
  `<div class="q-mt-sm bg-guide-field-accent">
          <div class="q-ml-sm bg-field-title">Color Accent</div>
          <div class="field-content">test</div>
        </div>`,
]);
const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};
</script>
<style scoped lang="scss">
.text-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 126px;
}
</style>
