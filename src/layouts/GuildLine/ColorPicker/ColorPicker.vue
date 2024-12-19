<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Color Picker + Popup Proxy + button </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/color-picker">https://quasar.dev/vue-components/color-picker</a>
  </q-toolbar>
  <div class="row justify-evenly q-ma-md">
    <div class="col-3">
      <q-btn round :style="`background-color:${color}`" disable class="guide-btn darken-hover outline">
        <q-icon name="colorize" />
        <q-popup-proxy :offset="[-50, -40]">
          <q-color v-model="color" no-header no-footer default-view="palette" style="max-width: 250px" />
        </q-popup-proxy>
      </q-btn>
      <div class="divStyle">不可編輯不顯示</div>
      <q-btn class="guide-btn darken-hover q-mb-lg" style="width: 100%" color="accent" @click="copyHtml(copyList[0])"
        >複製上方元件</q-btn
      >
    </div>
    <div class="col-3">
      <!--q-btn round :style="`--button-color: ${color}`" class="guide-btn darken-hover color-picker-button">-->
      <q-btn round :style="`background-color:${color}`" class="guide-btn darken-hover">
        <q-icon name="colorize" />
        <q-popup-proxy :offset="[-50, -40]">
          <q-color v-model="color" no-header no-footer default-view="palette" style="max-width: 250px" />
        </q-popup-proxy>
      </q-btn>
      <div class="divStyle">可編輯可顯示</div>
      <q-btn class="guide-btn darken-hover q-mb-lg" style="width: 100%" color="accent" @click="copyHtml(copyList[1])"
        >複製上方元件</q-btn
      >
    </div>
    <div class="col-3">
      <q-btn round :style="`background-color:${color}`" class="guide-btn darken-hover">
        <q-icon name="colorize" :style="`color:${color}`" />
        <q-popup-proxy :offset="[-50, -40]" :target="false">
          <q-color v-model="color" no-header no-footer default-view="palette" style="max-width: 250px" />
        </q-popup-proxy>
      </q-btn>
      {{ color }}
      <div class="divStyle">
        只顯示目前顏色但不能編輯,如需從顯示狀態改為編輯狀態 需要改變 target 或 v-if 控制不出現菜單
      </div>
      <q-btn class="guide-btn darken-hover q-mb-lg" style="width: 100%" color="accent" @click="copyHtml(copyList[2])"
        >複製上方元件</q-btn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCopy } from '../Composable/useCopy';
const color = ref('');
const copyList = ref([
  `<q-btn round :style="\`background-color:\${color}\`" disable class="guide-btn darken-hover outline">
        <q-icon name="colorize" />
        <q-popup-proxy :offset="[-50, -40]">
          <q-color v-model="color" no-header no-footer default-view="palette" style="max-width: 250px" />
        </q-popup-proxy>
      </q-btn>`,
  `<q-btn round :style="\`background-color:\${color}\`" class="guide-btn darken-hover">
        <q-icon name="colorize" />
        <q-popup-proxy :offset="[-50, -40]">
          <q-color v-model="color" no-header no-footer default-view="palette" style="max-width: 250px" />
        </q-popup-proxy>
      </q-btn>`,
  `<q-btn round :style="\`background-color:\${color}\`" class="guide-btn darken-hover">
        <q-icon name="colorize" :style="\`color:\${color}\`" />
        <q-popup-proxy :offset="[-50, -40]" :target="false">
          <q-color v-model="color" no-header no-footer default-view="palette" style="max-width: 250px" />
        </q-popup-proxy>
      </q-btn>`,
]);
const { copyText } = useCopy();
const copyHtml = (item: string) => {
  copyText(item, 'color picker');
};
</script>
<style scoped lang="scss">
.divStyle {
  margin-top: 10px;
  height: 100px;
}
.color-picker-button {
  background-color: var(--button-color); /* 使用 CSS 變量 */
}
</style>
