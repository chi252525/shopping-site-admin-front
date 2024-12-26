<template>
  <q-row class="q-gutter-md q-pl-md q-pr-md" align="center" justify="center">
    <q-col cols="auto" class="q-pa-md text-center">
      <h5>編輯產品</h5>
      <hr />
      <div
        class="q-pa-md q-mt-md flex flex-center"
        align="center"
        justify="center"
      >
        <div class="q-mt-md">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6">Basic</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <template>
                <div class="q-pa-md">
                  <q-uploader
                    label="Auto Uploader"
                    auto-upload
                    url="http://localhost:4444/upload"
                    multiple
                  />
                </div>
              </template>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <q-input
                v-model="inputVal"
                outlined
                hint="說明"
                label="姓名"
                class="is_require"
              >
              </q-input>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
        <div class="q-mt-md">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator inset />

            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-col>
  </q-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const inputVal = ref('');
</script>
<style scoped></style>
