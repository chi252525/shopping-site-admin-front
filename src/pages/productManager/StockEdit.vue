<template>
  <q-row class="q-gutter-md q-pl-md q-pr-md" align="center" justify="center">
    <q-col cols="auto" class="q-pa-md text-center">
      <h5>刪庫存作業</h5>
      <hr />
      <div
        class="q-pa-md q-mt-md flex flex-center"
        align="center"
        justify="center"
      >
        <div class="q-mt-md">
          <q-card flat bordered>
            <q-img
              :key="'fill'"
              src="https://picsum.photos/500/300"
              style="max-width: 300px; height: 150px"
              :fit="'fill'"
            ></q-img>

            <q-card-section class="q-pt-none">
              <h4>商品名稱:</h4>
              <h4>baseSku</h4>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
              <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="my-card">
                  <q-card-section class="bg-primary text-white">
                    <div class="text-h6">尺寸：5｜庫存:4</div>
                    <div class="text-subtitle2">編號：</div>
                  </q-card-section>

                  <q-separator />

                  <q-card-actions align="right">
                    <q-btn flat>刪一件</q-btn>
                  </q-card-actions>
                </q-card>

                <q-card class="my-card">
                  <q-card-section class="bg-purple text-white">
                    <div class="text-h6">尺寸：5｜庫存:4</div>
                    <div class="text-subtitle2">編號：</div>
                  </q-card-section>

                  <q-card-actions align="around">
                    <q-btn flat>刪一件</q-btn>
                  </q-card-actions>
                </q-card>

                <q-card class="my-card">
                  <q-card-section class="bg-teal text-white">
                    <div class="text-h6">尺寸：5｜庫存:4</div>
                    <div class="text-subtitle2">編號：</div>
                  </q-card-section>

                  <q-card-actions vertical align="right">
                    <q-btn flat>刪一件</q-btn>
                  </q-card-actions>
                </q-card>

                <q-card class="my-card">
                  <q-card-section class="bg-grey-8 text-white">
                    <div class="text-h6">尺寸：5｜庫存:4</div>
                    <div class="text-subtitle2">編號：</div>
                  </q-card-section>

                  <q-card-actions vertical align="center">
                    <q-btn flat>刪一件</q-btn>
                  </q-card-actions>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-col>
  </q-row>
</template>
<script setup lang="ts"></script>
<style scoped></style>
