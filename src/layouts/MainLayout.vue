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
        <q-list padding>
          <q-item clickable v-ripple :to="'/dashboard'" class="items-center">
            <q-icon name="home" />

            <q-item-section> DashBoard</q-item-section>
          </q-item>
          <q-separator />
          <q-item
            clickable
            v-ripple
            :to="'/product-management'"
            class="items-center"
          >
            <q-icon name="dataset" class="q-mr2" /><q-item-section>
              商品管理
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :to="'/order-management'"
            class="items-center"
          >
            <q-icon name="list_alt" class="q-mr2" /><q-item-section>
              訂單管理</q-item-section
            >
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="'/product-management'"
            class="items-center"
          >
            <q-icon name="category" class="q-mr2" /><q-item-section>
              分類管理</q-item-section
            >
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="'/product-management'"
            class="items-center"
          >
            <q-icon name="emoji_people" class="q-mr2" /><q-item-section>
              廠商管理</q-item-section
            >
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="'/product-management'"
            class="items-center"
          >
            <q-icon name="move_up" class="q-mr2" />
            <q-item-section>出攤管理</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="'/product-management'"
            class="items-center"
          >
            <q-icon name="face" class="q-mr2" />
            <q-item-section>會員管理</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="'/product-management'"
            class="items-center"
          >
            <q-icon name="emoji_nature" />
            <q-item-section>優惠券管理</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="'/product-management'"
            class="items-center"
          >
            <q-icon name="emoji_nature" />
            <q-item-section>活動管理</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            :to="'/product-management'"
            class="items-center"
          >
            <q-icon name="logout" class="q-mr2" />
            <q-item-section>登出</q-item-section>
          </q-item>
        </q-list>
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
