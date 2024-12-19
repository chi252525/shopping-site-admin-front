<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Form - Checkbox </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/checkbox">https://quasar.dev/vue-components/checkbox</a>
  </q-toolbar>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-checkbox v-model="shape" val="line" label="Line" />
        <q-checkbox v-model="shape" val="rectangle" label="Rectangle" />
        <q-checkbox v-model="shape" val="ellipse" label="Ellipse" />
        <q-checkbox v-model="shape" val="polygon" label="Polygon" />
        <q-checkbox v-model="shape" val="disable" label="Disable Style" disable />
        <q-btn class="q-ml-xl guide-btn darken-hover" color="accent" @click="copyHtml(radioList)">複製</q-btn>
      </div>
      <div class="row q-mt-xl">
        <div class="col guide-checkbox-default">
          <div class="q-ml-sm checkbox-title">Default</div>
          <q-checkbox v-model="confirm" val="option1" label="選擇1" color="info" />
          <q-checkbox v-model="confirm" val="option2" label="選擇2" color="info" />
        </div>
        <div class="col guide-checkbox-grizzle">
          <div class="q-ml-sm checkbox-title">Color Grey</div>
          <q-checkbox v-model="confirm" val="option1" label="選擇1" color="grey" />
          <q-checkbox v-model="confirm" val="option2" label="選擇2" color="grey" />
        </div>
        <div class="col guide-checkbox-warning">
          <div class="q-ml-sm checkbox-title">Color Yellow (warning)</div>
          <q-checkbox v-model="confirm" val="option1" label="選擇1" color="warning" />
          <q-checkbox v-model="confirm" val="option2" label="選擇2" color="warning" />
        </div>
        <div class="col guide-checkbox-primary">
          <div class="q-ml-sm checkbox-title">Color Primary</div>
          <q-checkbox v-model="confirm" val="option1" label="選擇1" color="primary" />
          <q-checkbox v-model="confirm" val="option2" label="選擇2" color="primary" />
        </div>
        <div class="col guide-checkbox-secondary">
          <div class="q-ml-sm checkbox-title">Color Secondary</div>
          <q-checkbox v-model="confirm" val="option1" label="選擇1" color="secondary" />
          <q-checkbox v-model="confirm" val="option2" label="選擇2" color="secondary" />
        </div>
        <div class="col guide-checkbox-positive">
          <div class="q-ml-sm checkbox-title">Color Positive</div>
          <q-checkbox v-model="confirm" val="option1" label="選擇1" color="positive" />
          <q-checkbox v-model="confirm" val="option2" label="選擇2" color="positive" />
        </div>
        <div class="col guide-checkbox-accent">
          <div class="q-ml-sm checkbox-title">Color Accent</div>
          <q-checkbox v-model="confirm" val="option1" label="選擇1" color="accent" />
          <q-checkbox v-model="confirm" val="option2" label="選擇2" color="accent" />
        </div>
      </div>
      <div class="row q-mt-xl">
        <div v-for="(item, index) in groupRadioList" :key="index" class="col">
          <q-btn class="q-ml-xl guide-btn darken-hover" color="accent" @click="copyHtml(item)">複製</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCopy } from '../../Composable/useCopy';
import checkJson from './groupList.json';
const shape = ref(['line']);
const confirm = ref([]);
const radioList = `<q-checkbox v-model="shape" val="line" label="Line" />
        <q-checkbox v-model="shape" val="rectangle" label="Rectangle" />
        <q-checkbox v-model="shape" val="ellipse" label="Ellipse" />
        <q-checkbox v-model="shape" val="polygon" label="Polygon" />
        <q-checkbox v-model="shape" val="disable" label="Disable Style" disable />`;
const groupRadioList = checkJson;

const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};
</script>
<style scoped lang="scss"></style>
