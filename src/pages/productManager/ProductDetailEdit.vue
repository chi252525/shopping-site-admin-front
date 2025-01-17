<template>
  <q-row class="q-gutter-md q-pl-md q-pr-md" align="center" justify="center">
    <q-col cols="auto" class="q-pa-md text-center">
      <div class="q-pa-md q-mt-md row">
        <div class="col-lg-6 col-xs-12 q-pa-md">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6">基本資訊</div>
            </q-card-section>
            <div class="q-pa-md q-mt-md row">
              <UploadFile v-model="image" />
            </div>
            <q-card-section class="q-pt-md">
              <q-input
                v-model="inputVal"
                outlined
                label="baseSku"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="inputVal"
                outlined
                label="name"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="inputVal"
                outlined
                label="成本"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="inputVal"
                outlined
                label="售價"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-input
                v-model="inputVal"
                outlined
                label="優惠價"
                class="is_require q-mt-md"
              >
              </q-input>
              <q-select
                v-model="inputVal"
                :options="options"
                outlined
                placeholder="大分類"
                class="q-mt-md"
                :rules="[(val) => val.length === 10]"
              />
              <q-select
                v-model="inputVal"
                :options="options"
                outlined
                placeholder="小分類"
                class="q-mt-md"
                :rules="[(val) => val.length === 10]"
              />
              <q-select
                v-model="inputVal"
                outlined
                :options="options"
                label="開始時間"
                class="q-mt-md"
                placeholder="Placeholder"
              >
                <template v-slot:prepend>
                  <q-icon name="event" color="primary" />
                </template>
              </q-select>
              <q-select
                v-model="inputVal"
                outlined
                :options="options"
                label="結束時間"
                class="q-mt-md"
                placeholder="Placeholder"
              >
                <template v-slot:prepend>
                  <q-icon name="event" color="primary" />
                </template>
              </q-select>

              <q-select
                v-model="inputVal"
                :options="options"
                outlined
                label="單位"
                placeholder="單位"
                class="q-mt-md"
                :rules="[(val) => val.length === 10]"
              />
              <q-checkbox v-model="inputVal" val="line" label="是否已到貨" />
              <q-checkbox
                v-model="inputVal"
                val="line"
                label="是否已結清款項"
              />
              <q-checkbox
                v-model="inputVal"
                val="line"
                label="是否顯示在前台"
              />
              <q-checkbox v-model="inputVal" val="line" label="是否舊貨" />
              <q-editor v-model="inputVal" min-height="340px" />
            </q-card-section>

            <q-separator inset />

            <q-card-section> </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-6 col-xs-12 q-pa-md">
          <q-card flat bordered>
            <q-card-section class="q-pt-md">
              <div class="text-h6">規格</div>
              <q-select
                v-model="inputVal"
                :options="options"
                outlined
                label="選擇模板"
                placeholder="選擇模板"
                class="q-mt-md"
                :rules="[(val) => val.length === 10]"
              />
              <q-select
                v-model="inputVal"
                :options="options"
                outlined
                label="選擇顏色"
                placeholder="選擇顏色"
                class="q-mt-md"
                :rules="[(val) => val.length === 10]"
              />
              <q-btn
                outline
                no-caps
                class="guide-btn darken-hover"
                color="positive"
                label="套入"
                size="lg"
              />
            </q-card-section>
          </q-card>
        </div>

        <div class="col-lg-6 col-xs-12 q-mt-md q-pa-md">
          <q-card flat bordered>
            <q-card-section class="q-pt-md">
              <div class="text-h6">尺寸</div>
              <q-select
                v-model="inputVal"
                :options="options"
                outlined
                label="選擇模板"
                placeholder="選擇模板"
                class="q-mt-md"
                :rules="[(val) => val.length === 10]"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <q-row class="q-gutter-md flex flex-center">
        <q-btn
          outline
          no-caps
          class="guide-btn darken-hover"
          color="positive"
          label="新增或更新"
          size="lg"
        />
      </q-row>
    </q-col>
  </q-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const inputVal = ref('');
const image = ref('');
const options = ref(['第一層分類', '第二層分類', '第三層分類']);
import UploadFile from './component/UploadFile.vue';
</script>
<style scoped></style>
