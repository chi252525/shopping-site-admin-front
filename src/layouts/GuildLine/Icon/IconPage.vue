<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Icon </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/icon">https://quasar.dev/vue-components/icon</a>
  </q-toolbar>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="q-mt-sm text-h6">
          1. 請採用 Material Icons
          <a class="text-amber-9" href="https://fonts.google.com/icons?icon.set=Material+Icons"
            >https://fonts.google.com/icons?icon.set=Material+Icons</a
          >
        </div>
        <div class="q-mt-sm text-h6">
          <span>Size</span>
        </div>
        <span v-for="(item, index) in iconSizeList" :key="index" @click="copyHtml(item.htmlTxt)">
          <q-icon name="search" color="primary" :size="item.size" />
        </span>
        <div class="q-mt-sm text-h6">
          <span>Color</span>
        </div>
        <div>
          <span v-for="(item, index) in iconColorList" :key="index" @click="copyHtml(item.htmlTxt)">
            <q-icon name="search" :color="item.color" size="md" />
          </span>
          預設大小
        </div>
        <div class="q-mt-sm text-h6">
          <span>Name</span>
        </div>
        <div class="q-mt-sm text-h8">
          <pre><code>&lt;q-icon&nbsp;name=&quot;search&quot;&nbsp;color=&quot;primary&quot;&nbsp;size=&quot;md&quot;&nbsp;/&gt;</code></pre>
          <span v-for="(item, index) in iconNameList" :key="index">
            <span class="q-ma-md" @click="copyHtml(item.htmlTxt)">
              <q-icon :name="item.name" color="primary" size="md" /> {{ item.name }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCopy } from '../Composable/useCopy';
const iconSizeList = ref([
  { htmlTxt: '<q-icon name="search" color="primary" size="4rem" />', size: '4rem' },
  { htmlTxt: '<q-icon name="search" color="primary" size="xl" />', size: 'xl' },
  { htmlTxt: '<q-icon name="search" color="primary" size="lg" />', size: 'lg' },
  { htmlTxt: '<q-icon name="search" color="primary" size="md" />', size: 'md' },
  { htmlTxt: '<q-icon name="search" color="primary" size="sm" />', size: 'sm' },
  { htmlTxt: '<q-icon name="search" color="primary" size="xm" />', size: 'xm' },
]);
const iconColorList = ref([
  { htmlTxt: '<q-icon name="search" color="primary" size="lg">primary</q-chip>', color: 'primary' },
  { htmlTxt: '<q-icon name="search" color="secondary" size="lg">secondary</q-chip>', color: 'secondary' },
  { htmlTxt: '<q-icon name="search" color="accent" size="lg">accent</q-chip>', color: 'accent' },
  { htmlTxt: '<q-icon name="search" color="dark" size="lg">dark</q-chip>', color: 'dark' },
  { htmlTxt: '<q-icon name="search" color="positive" size="lg">positive</q-chip>', color: 'positive' },
  { htmlTxt: '<q-icon name="search" color="negative" size="lg">negative</q-chip>', color: 'negative' },
  { htmlTxt: '<q-icon name="search" color="info" size="lg">info</q-chip>', color: 'info' },
  { htmlTxt: '<q-icon name="search" color="warning" size="lg">warning</q-chip>', color: 'warning' },
]);

const iconNameList = ref([
  { htmlTxt: '<q-icon name="search" color="primary" size="md" />', name: 'search' },
  { htmlTxt: '<q-icon name="home" color="primary" size="md" />', name: 'home' },
  { htmlTxt: '<q-icon name="account_circle" color="primary" size="md" />', name: 'account_circle' },
  { htmlTxt: '<q-icon name="settings" color="primary" size="md" />', name: 'settings' },
  { htmlTxt: '<q-icon name="done" color="primary" size="md" />', name: 'done' },
  { htmlTxt: '<q-icon name="info" color="primary" size="md" />', name: 'info' },
  { htmlTxt: '<q-icon name="check_circle" color="primary" size="md" />', name: 'check_circle' },
  { htmlTxt: '<q-icon name="delete" color="primary" size="md" />', name: 'delete' },
  { htmlTxt: '<q-icon name="visibility" color="primary" size="md" />', name: 'visibility' },
  { htmlTxt: '<q-icon name="logout" color="primary" size="md" />', name: 'logout' },
  { htmlTxt: '<q-icon name="favorite_border" color="primary" size="md" />', name: 'favorite_border' },
  { htmlTxt: '<q-icon name="lock" color="primary" size="md" />', name: 'lock' },
  { htmlTxt: '<q-icon name="language" color="primary" size="md" />', name: 'language' },
  { htmlTxt: '<q-icon name="help_outline" color="primary" size="md" />', name: 'help_outline' },
]);

const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};
</script>
