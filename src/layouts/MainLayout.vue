<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>後台管理</q-toolbar-title>

        <div class="avatar-container">
          <router-link to="/">
            <img
              src="~/assets/images/logo.png"
              alt="Logo"
              class="square-image"
            />
          </router-link>
        </div>
        <router-link to="/login">
          <q-btn flat round dense icon="login" color="white" />
        </router-link>
      </q-toolbar>
    </q-header>
    <div>
      <GuildLineController />
    </div>
    <q-drawer v-model="drawer" show-if-above bordered>
      <q-list>
        <q-item clickable v-ripple :to="'/dashboard'">
          <q-item-section> DashBoard</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="'/product-management'">
          <q-item-section> 商品管理 </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="'/order-management'">
          <q-item-section> 訂單管理</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <div class="bg-grey-2 text-black q-mt-xl">
        <div
          class="q-pa-xl row justify-between items-center"
          style="min-height: 100px"
        >
          <div>
            <div class="flex">
              <div class="col-4">
                <div>© 2024 葳兔童裝有限公司</div>
              </div>
            </div>
          </div>
          <div></div>
          <div class="q-pa-md">
            <q-btn flat round dense icon="facebook" color="primary" />
            <q-btn flat round dense icon="instagram" color="primary" />
            <q-btn flat round dense icon="youtube" color="primary" />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';
const drawer = ref(false);
</script>
<script setup lang="ts">
// import { getCurrentInstance } from 'vue';
import GuildLineController from './GuildLine/GuildLineController.vue';
defineOptions({
  name: 'MainLayout',
});
// const instance = getCurrentInstance();
// const q = instance?.appContext.config.globalProperties.$q;
</script>
<style scoped>
.avatar-container {
  width: 80px; /* 设置宽度 */
  height: 80px; /* 设置高度 */
  border-radius: 0; /* 使容器变为圆形 */
  overflow: hidden; /* 超出部分隐藏 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.square-image {
  width: 100px; /* Set width */
  height: 100px; /* Set height to match width for a square */
  /* Remove any circular styling */
  border-radius: 0;
}
</style>
