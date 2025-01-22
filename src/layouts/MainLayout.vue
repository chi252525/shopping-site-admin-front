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
    <q-drawer
      v-model="drawer"
      show-if-above
      bordered
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      class="bg-grey-3"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: '0' }">
        <q-list v-if="isLoggedIn" padding>
          <q-separator />
          <q-item
            v-for="(item, index) in menuItems"
            :key="index"
            clickable
            v-ripple
            :to="item.to"
            class="items-center"
          >
            <q-icon :name="item.icon" class="q-mr2" />
            <q-item-section>{{ item.text }}</q-item-section>
          </q-item>
        </q-list>
        <q-list v-if="!isLoggedIn" padding
          ><!-- 當用戶未登入時顯示提示 -->
          <q-item clickable class="items-center">
            <q-item-section>請先登入以訪問菜單</q-item-section>
          </q-item></q-list
        >
      </q-scroll-area>
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
const miniState = ref(false);
</script>
<script setup lang="ts">
// import { getCurrentInstance } from 'vue';
import GuildLineController from './GuildLine/GuildLineController.vue';
defineOptions({
  name: 'MainLayout',
});
// const instance = getCurrentInstance();
// const q = instance?.appContext.config.globalProperties.$q;
// JSON menu items
const isLoggedIn = ref(true);
//TODO
// const isLoggedIn = ref(localStorage.getItem('userToken') !== null);
const menuItems = [
  { to: '/dashboard', icon: 'home', text: 'DashBoard' },
  { to: '/product-management', icon: 'dataset', text: '商品管理' },
  // { to: '/order-management', icon: 'list_alt', text: '訂單管理' },
  // { to: '/product-management', icon: 'category', text: '分類管理' },
  // { to: '/product-management', icon: 'emoji_people', text: '廠商管理' },
  // { to: '/product-management', icon: 'move_up', text: '出攤管理' },
  // { to: '/product-management', icon: 'face', text: '會員管理' },
  // { to: '/product-management', icon: 'emoji_nature', text: '優惠券管理' },
  // { to: '/product-management', icon: 'emoji_nature', text: '活動管理' },
  { to: '/login', icon: 'logout', text: '登出' },
];

const init = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    isLoggedIn.value = false;
  }
};
init();
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
