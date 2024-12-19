<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Form - Radio </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/radio">https://quasar.dev/vue-components/radio</a>
  </q-toolbar>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-radio v-model="shape" val="line" label="Line" />
        <q-radio v-model="shape" val="rectangle" label="Rectangle" />
        <q-radio v-model="shape" val="ellipse" label="Ellipse" />
        <q-radio v-model="shape" val="polygon" label="Polygon" />
        <q-radio v-model="shape" val="disable" label="Disable Style" disable />
        <q-btn class="q-ml-xl guide-btn darken-hover" color="accent" @click="copyHtml(radioList)">複製</q-btn>
      </div>
      <div class="row q-mt-xl">
        <div class="col guide-radio-default">
          <div class="q-ml-sm radio-title">Default</div>
          <q-radio v-model="confirm" val="yes" label="是" color="info" />
          <q-radio v-model="confirm" val="no" label="否" color="info" />
        </div>
        <div class="col guide-radio-grizzle">
          <div class="q-ml-sm radio-title">Color Grey</div>
          <q-radio v-model="confirm" val="yes" label="是" color="grey" />
          <q-radio v-model="confirm" val="no" label="否" color="grey" />
        </div>
        <div class="col guide-radio-warning">
          <div class="q-ml-sm radio-title">Color Yellow (warning)</div>
          <q-radio v-model="confirm" val="yes" label="是" color="warning" />
          <q-radio v-model="confirm" val="no" label="否" color="warning" />
        </div>
        <div class="col guide-radio-primary">
          <div class="q-ml-sm radio-title">Color Primary</div>
          <q-radio v-model="confirm" val="yes" label="是" color="primary" />
          <q-radio v-model="confirm" val="no" label="否" color="primary" />
        </div>
        <div class="col guide-radio-secondary">
          <div class="q-ml-sm radio-title">Color Secondary</div>
          <q-radio v-model="confirm" val="yes" label="是" color="secondary" />
          <q-radio v-model="confirm" val="no" label="否" color="secondary" />
        </div>
        <div class="col guide-radio-positive">
          <div class="q-ml-sm radio-title">Color Positive</div>
          <q-radio v-model="confirm" val="yes" label="是" color="positive" />
          <q-radio v-model="confirm" val="no" label="否" color="positive" />
        </div>
        <div class="col guide-radio-accent">
          <div class="q-ml-sm radio-title">Color Accent</div>
          <q-radio v-model="confirm" val="yes" label="是" color="accent" />
          <q-radio v-model="confirm" val="no" label="否" color="accent" />
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
import radioJson from './groupList.json';
const shape = ref('line');
const confirm = ref('');
const radioList = `<q-radio v-model="shape" val="line" label="Line" />
  <q-radio v-model="shape" val="rectangle" label="Rectangle" />
  <q-radio v-model="shape" val="ellipse" label="Ellipse" />
  <q-radio v-model="shape" val="polygon" label="Polygon" />
  <q-radio v-model="shape" val="disable" label="Disable Style" disable />`;
const groupRadioList = radioJson;

const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};
</script>
<style scoped lang="scss"></style>
