<template>
  <q-dialog v-model="fixed" full-width persistent>
    <q-card>
      <q-toolbar>
        <q-toolbar-title>Guild Line</q-toolbar-title>

        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />
      <q-card-section style="max-height: 80vh" class="scroll">
        <q-list bordered class="rounded-borders q-pb-md">
          <!-- 字級 -->
          <q-expansion-item expand-separator label="字級">
            <FontLevel />
          </q-expansion-item>

          <!-- 顏色 -->
          <q-expansion-item expand-separator label="顏色">
            <ColorTemplate />
          </q-expansion-item>

          <!-- 提示訊息 -->
          <q-expansion-item expand-separator label="提示訊息(彈窗訊息)">
            <NoticeMessage />
          </q-expansion-item>

          <!-- 注意訊息 -->
          <q-expansion-item expand-separator label="注意訊息">
            <TooltipMessage />
          </q-expansion-item>
        </q-list>
        <!-- 顏色選擇器 -->
        <ColorPicker />
        <!-- table -->
        <TablePage />
        <!-- Form Input -->
        <InputComponent />
        <!-- Select Radio-->
        <SelectComponent />
        <!-- Form Radio-->
        <RadioComponent />
        <!-- Form CheckBox-->
        <CheckboxComponent />
        <!-- Form FieldSet -->
        <FieldComponent />
        <!-- Form Toggle -->
        <ToggleComponent />
        <!-- Button -->
        <ButtonPage />
        <!-- Tab 頁籤-->
        <TabPage />
        <!-- Chip -->
        <ChipPage />
        <!-- Icon -->
        <IconPage />
      </q-card-section>
      <q-separator />
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
export default {
  name: 'GuildLine',
};
</script>
<script setup lang="ts">
import FontLevel from './FontLevel/FontLevel.vue';
import ColorTemplate from './ColorTemplate/ColorTemplate.vue';
import TooltipMessage from './Tooltip/TooltipMessage.vue';
import NoticeMessage from './NoticeMessage/NoticeMessage.vue';
import TabPage from './Tab/TabPage.vue';
import ChipPage from './Chip/ChipPage.vue';
import IconPage from './Icon/IconPage.vue';
import ButtonPage from './Button/ButtonPage.vue';
import InputComponent from './Form/InputComponent/InputPage.vue';
import SelectComponent from './Form/SelectComponent/SelectPage.vue';
import RadioComponent from './Form/RadioComponent/RadioPage.vue';
import CheckboxComponent from './Form/CheckboxComponent/CheckBox.vue';
import FieldComponent from './Form/FieldComponent/FieldSet.vue';
import ToggleComponent from './Form/ToggleComponent/TogglePage.vue';
import TablePage from './Table/TablePage.vue';
import ColorPicker from './ColorPicker/ColorPicker.vue';

const fixed = defineModel('fixed', { type: Boolean });
</script>

<style scoped lang="scss"></style>
