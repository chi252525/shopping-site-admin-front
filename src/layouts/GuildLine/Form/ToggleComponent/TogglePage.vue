<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Form - Toggle </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/toggle">https://quasar.dev/vue-components/toggle</a>
  </q-toolbar>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md"></div>
      <div class="row q-mt-xl">
        <div class="col guide-toggle-default">
          <div class="q-ml-sm toggle-title">Default</div>
          <q-toggle v-model="confirm" label="On" color="info" />
        </div>
        <div class="col guide-toggle-grizzle">
          <div class="q-ml-sm toggle-title">Collor Grey</div>
          <q-toggle v-model="confirm" label="On" color="grey" />
        </div>
        <div class="col guide-toggle-warning">
          <div class="q-ml-sm toggle-title">Color Yellow (warning)</div>
          <q-toggle v-model="confirm" label="On" color="warning" />
        </div>
        <div class="col guide-toggle-primary">
          <div class="q-ml-sm toggle-title">Color Primary</div>
          <q-toggle v-model="confirm" label="On" color="primary" />
        </div>
        <div class="col guide-toggle-secondary">
          <div class="q-ml-sm toggle-title">Color Secondary</div>
          <q-toggle v-model="confirm" label="On" color="secondary" />
        </div>
        <div class="col guide-toggle-positive">
          <div class="q-ml-sm toggle-title">Color Positive</div>
          <q-toggle v-model="confirm" label="On" color="positive" />
        </div>
        <div class="col guide-toggle-accent">
          <div class="q-ml-sm toggle-title">Color Accent</div>
          <q-toggle v-model="confirm" label="On" color="accent" />
        </div>
      </div>
      <div class="row q-mt-xl">
        <div v-for="(item, index) in groupToggleList" :key="index" class="col">
          <q-btn class="q-ml-xl guide-btn darken-hover" color="accent" @click="copyHtml(item)">複製</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCopy } from '../../Composable/useCopy';
import toggleJson from './groupList.json';
const groupToggleList = toggleJson;
const confirm = ref('');
const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};
</script>
