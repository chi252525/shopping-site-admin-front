<template>
  <q-toolbar class="bg-primary text-white">
    <q-toolbar-title> Button </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/button"> https://quasar.dev/vue-components/button </a>
  </q-toolbar>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="q-mt-sm text-h6">1. 新增 <code>.guide-btn</code></div>
        <ul>
          <li>修改按鈕圓角</li>
          <li>消除按鈕下方陰影</li>
          <li>維持按鈕字形隨著按鈕變大</li>
        </ul>
        <div class="q-mt-sm text-h6">2. 新增 <code>.guide-btn.darken-hover:hover</code></div>
        <ul>
          <li>修改按鈕Hover變深</li>
        </ul>
        <div class="q-mt-sm text-h6">3. 新增 <code>.guide-btn.q-btn.disabled</code></div>
        <ul>
          <li>disable樣式一律是灰色</li>
        </ul>
        <div class="q-mt-sm text-h6">4. 套用 <code>no-caps</code>屬性確保按鈕英文可以呈現大小寫</div>
        <div class="q-mt-sm text-h6">5. 新增 <code>.guide-btn.q-btn--outline:before</code> 讓outlined border加1</div>
      </div>
    </div>
    <div class="q-pl-md q-gutter-sm">
      <div class="text-h6">
        <span>Default style & Hover</span>
      </div>
      <span v-for="(item, index) in buttonDefaultList" :key="index" @click="copyHtml(item.htmltxt)">
        <q-btn no-caps class="guide-btn darken-hover" :color="item.color" :label="item.color" size="lg" />
      </span>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div class="text-h6">
        <span>Disable style 仍需套用原始disable屬性後 + 客製化class讓無論color是什麼顏色都會變灰</span>
      </div>
      <q-btn disable no-caps class="guide-btn darken-hover" label="Button" size="lg" />
      <q-btn no-caps class="guide-btn darken-hover" color="accent" @click="copyHtml(buttonDisable)">
        Disable clicked失效，複製請按這裡</q-btn
      >
      <q-btn disable no-caps class="guide-btn darken-hover outline" label="Button" size="lg" />
      <q-btn no-caps class="guide-btn darken-hover" color="accent" @click="copyHtml(buttonDisableOutline)">
        Disable clicked失效，複製請按這裡</q-btn
      >
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div class="text-h6">
        <span>Size</span>
      </div>
      <span v-for="(item, index) in buttonSizeList" :key="index" @click="copyHtml(item.htmltxt)">
        <q-btn
          no-caps
          class="guide-btn darken-hover"
          color="primary"
          :label="'Button_' + item.size"
          :size="item.size"
        />
      </span>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div class="text-h6">
        <span>Outlined style</span>
      </div>
      <span v-for="(item, index) in buttonOutlinedList" :key="index" @click="copyHtml(item.htmltxt)">
        <q-btn outline no-caps class="guide-btn darken-hover" :color="item.color" :label="item.color" size="lg" />
      </span>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div class="text-h6">
        <span>Button style with icon</span>
      </div>
      <span v-for="(item, index) in buttonIconList" :key="index" @click="copyHtml(item.htmltxt)">
        <q-btn
          outline
          no-caps
          :icon="item.icon"
          class="guide-btn darken-hover"
          :color="item.color"
          label="Button"
          size="lg"
        />
      </span>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div class="text-h6">
        <span>Only Icon Button</span>
      </div>
      <span v-for="(item, index) in onlyIconList" :key="index" @click="copyHtml(item.htmltxt)">
        <q-btn outline no-caps :icon="item.icon" class="guide-btn darken-hover" :color="item.color" size="lg" />
      </span>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div class="text-h6">
        <span>Text Icon Button</span>
      </div>
      <span v-for="(item, index) in textButton" :key="index" @click="copyHtml(item.htmltxt)">
        <q-btn
          flat
          no-caps
          :icon="item.icon"
          class="guide-btn darken-hover"
          :color="item.color"
          label="Button"
          size="lg"
        />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCopy } from '../Composable/useCopy';
const buttonDefaultList = ref([
  {
    htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="primary" label="Button" size="lg" />',
    color: 'primary',
  },
  {
    htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="secondary" label="Button" size="lg" />',
    color: 'secondary',
  },
  {
    htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="accent" label="Button" size="lg" />',
    color: 'accent',
  },
  { htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="dark" label="Button" size="lg" />', color: 'dark' },
  {
    htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="positive" label="Button" size="lg" />',
    color: 'positive',
  },
  {
    htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="negative" label="Button" size="lg" />',
    color: 'negative',
  },
  { htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="info" label="Button" size="lg" />', color: 'info' },
  {
    htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="warning" label="Button" size="lg" />',
    color: 'warning',
  },
]);
const buttonOutlinedList = ref([
  {
    htmltxt: '<q-btn outline no-caps class="guide-btn darken-hover" color="primary" label="Button" size="lg" />',
    color: 'primary',
  },
  {
    htmltxt: '<q-btn outline no-caps class="guide-btn darken-hover" color="secondary" label="Button" size="lg" />',
    color: 'secondary',
  },
  {
    htmltxt: '<q-btn outline no-caps class="guide-btn darken-hover" color="accent" label="Button" size="lg" />',
    color: 'accent',
  },
  {
    htmltxt: '<q-btn outline no-caps class="guide-btn darken-hover" color="dark" label="Button" size="lg" />',
    color: 'dark',
  },
  {
    htmltxt: '<q-btn outline no-caps class="guide-btn darken-hover" color="positive" label="Button" size="lg" />',
    color: 'positive',
  },
  {
    htmltxt: '<q-btn outline no-caps class="guide-btn darken-hover" color="negative" label="Button" size="lg" />',
    color: 'negative',
  },
  {
    htmltxt: '<q-btn outline no-caps class="guide-btn darken-hover" color="info" label="Button" size="lg" />',
    color: 'info',
  },
  {
    htmltxt: '<q-btn outline no-caps class="guide-btn darken-hover" color="warning" label="Button" size="lg" />',
    color: 'warning',
  },
]);
const buttonSizeList = ref([
  { htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="primary" label="Button" size="xl" />', size: 'xl' },
  { htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="primary" label="Button" size="lg" />', size: 'lg' },
  { htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="primary" label="Button" size="md" />', size: 'md' },
  { htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="primary" label="Button"  />' },
  { htmltxt: '<q-btn no-caps class="guide-btn darken-hover" color="primary" label="Button" size="sm" />', size: 'sm' },
]);

const buttonIconList = ref([
  {
    htmltxt:
      '<q-btn outline no-caps icon="map" class="guide-btn darken-hover" color="primary" label="Button" size="lg" />',
    color: 'primary',
    icon: 'map',
  },
  {
    htmltxt:
      '<q-btn outline no-caps icon="add" class="guide-btn darken-hover" color="secondary" label="Button" size="lg" />',
    color: 'secondary',
    icon: 'add',
  },
  {
    htmltxt:
      '<q-btn outline no-caps icon="lock" class="guide-btn darken-hover" color="accent" label="Button" size="lg" />',
    color: 'accent',
    icon: 'lock',
  },
  {
    htmltxt:
      '<q-btn outline no-caps icon="remove" class="guide-btn darken-hover" color="dark" label="Button" size="lg" />',
    color: 'dark',
    icon: 'remove',
  },
  {
    htmltxt:
      '<q-btn outline no-caps icon="check" class="guide-btn darken-hover" color="positive" label="Button" size="lg" />',
    color: 'positive',
    icon: 'check',
  },
  {
    htmltxt:
      '<q-btn outline no-caps icon="settings" class="guide-btn darken-hover" color="negative" label="Button" size="lg" />',
    color: 'negative',
    icon: 'settings',
  },
  {
    htmltxt:
      '<q-btn outline no-caps icon="info" class="guide-btn darken-hover" color="info" label="Button" size="lg" />',
    color: 'info',
    icon: 'info',
  },
  {
    htmltxt:
      '<q-btn outline no-caps icon="delete" class="guide-btn darken-hover" color="warning" label="Button" size="lg" />',
    color: 'warning',
    icon: 'delete',
  },
]);
const onlyIconList = ref([
  {
    htmltxt: '<q-btn outline no-caps icon="map" class="guide-btn darken-hover" color="primary" size="lg" />',
    color: 'primary',
    icon: 'map',
  },
  {
    htmltxt: '<q-btn outline no-caps icon="add" class="guide-btn darken-hover" color="secondary" size="lg" />',
    color: 'secondary',
    icon: 'add',
  },
  {
    htmltxt: '<q-btn outline no-caps icon="lock" class="guide-btn darken-hover" color="accent" size="lg" />',
    color: 'accent',
    icon: 'lock',
  },
  {
    htmltxt: '<q-btn outline no-caps icon="remove" class="guide-btn darken-hover" color="dark" size="lg" />',
    color: 'dark',
    icon: 'remove',
  },
  {
    htmltxt: '<q-btn outline no-caps icon="check" class="guide-btn darken-hover" color="positive" size="lg" />',
    color: 'positive',
    icon: 'check',
  },
  {
    htmltxt: '<q-btn outline no-caps icon="settings" class="guide-btn darken-hover" color="negative" size="lg" />',
    color: 'negative',
    icon: 'settings',
  },
  {
    htmltxt: '<q-btn outline no-caps icon="info" class="guide-btn darken-hover" color="info" size="lg" />',
    color: 'info',
    icon: 'info',
  },
  {
    htmltxt: '<q-btn outline no-caps icon="delete" class="guide-btn darken-hover" color="warning" size="lg" />',
    color: 'warning',
    icon: 'delete',
  },
]);

const textButton = ref([
  {
    htmltxt:
      '<q-btn flat no-caps icon="map" class="guide-btn darken-hover" label="Button" color="primary" size="lg" />',
    color: 'primary',
    icon: 'map',
  },
  {
    htmltxt:
      '<q-btn flat no-caps icon="add" class="guide-btn darken-hover" label="Button" color="secondary" size="lg" />',
    color: 'secondary',
    icon: 'add',
  },
  {
    htmltxt:
      '<q-btn flat no-caps icon="lock" class="guide-btn darken-hover" label="Button"  color="accent" size="lg" />',
    color: 'accent',
    icon: 'lock',
  },
  {
    htmltxt:
      '<q-btn flat no-caps icon="remove" class="guide-btn darken-hover" label="Button"  color="dark" size="lg" />',
    color: 'dark',
    icon: 'remove',
  },
  {
    htmltxt:
      '<q-btn flat no-caps icon="check" class="guide-btn darken-hover" label="Button"  color="positive" size="lg" />',
    color: 'positive',
    icon: 'check',
  },
  {
    htmltxt:
      '<q-btn flat no-caps icon="settings" class="guide-btn darken-hover" label="Button"  color="negative" size="lg" />',
    color: 'negative',
    icon: 'settings',
  },
  {
    htmltxt: '<q-btn flat no-caps icon="info" class="guide-btn darken-hover" label="Button"  color="info" size="lg" />',
    color: 'info',
    icon: 'info',
  },
  {
    htmltxt:
      '<q-btn flat no-caps icon="delete" class="guide-btn darken-hover" label="Button"  color="warning" size="lg" />',
    color: 'warning',
    icon: 'delete',
  },
]);
const buttonDisableOutline =
  '<q-btn disable no-caps class="guide-btn darken-hover outline"  label="Button" size="lg" />';
const buttonDisable = '<q-btn disable no-caps class="guide-btn darken-hover"  label="Button" size="lg" />';
const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, '');
};
</script>

<style scoped lang="scss">
li {
  font-size: 16px;
}
</style>
