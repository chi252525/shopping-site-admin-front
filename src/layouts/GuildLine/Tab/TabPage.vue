<template>
  <q-toolbar class="bg-primary text-white q-mt-md">
    <q-toolbar-title> Tab </q-toolbar-title>
    Quasar：<a href="https://quasar.dev/vue-components/tabs"> https://quasar.dev/vue-components/tabs</a>
  </q-toolbar>
  <div class="q-ma-lg">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <div class="q-mt-sm text-h6">1. 使用既有 class 加在 q-tabs 和 align="left"</div>
        <div class="q-mt-sm text-h6">2. 透過判斷 dark Mode 替換 Tab 顏色</div>
        <div class="tip-item" @click="copyComponent(tabList)">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              :class="darkMode ? 'bg-indigo-10' : 'text-grey-9 bg-grey-3'"
              :active-color="darkMode ? '' : 'secondary'"
              :active-bg-color="darkMode ? 'dark' : 'white'"
              :indicator-color="darkMode ? 'dark' : 'white'"
              align="left"
            >
              <q-tab name="mails" label="Mails" />
              <q-tab name="alarms" label="Alarms" />
              <q-tab name="movies" label="Movies" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ITabType } from './type';
import { useCopy } from '../Composable/useCopy';
import { useQuasar } from 'quasar';
const tab = ref('mails');
const $q = useQuasar();
const darkMode = ref($q.dark.isActive);

watch(
  () => $q.dark.isActive,
  (isActive) => {
    darkMode.value = isActive;
  }
);

const tabList = ref<ITabType>({
  id: 1,
  type: 'Tab',
  htmlTxt: `<q-card>
            <q-tabs
              v-model="tab"
              dense
              :class="darkMode ? 'bg-indigo-10' : 'text-grey-9 bg-grey-3'"
              :active-color="darkMode ? '' : 'secondary'"
              :active-bg-color="darkMode ? 'dark' : 'white'"
              :indicator-color="darkMode ? 'dark' : 'white'"
              align="left"
            >
              <q-tab name="mails" label="Mails" />
              <q-tab name="alarms" label="Alarms" />
              <q-tab name="movies" label="Movies" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>`,
});

const { copyText } = useCopy();
const copyComponent = (item: ITabType) => {
  copyText(item.htmlTxt, `${item.type} 組件`);
};
</script>
