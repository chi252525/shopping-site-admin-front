<template>
  <div>
    <q-page class="flex flex-center q-mt-md">
      <q-card class="q-pa-md" style="max-width: 400px; width: 100%">
        <!-- Logo -->
        <div class="text-center q-mb-md">
          <q-icon name="lock" size="56px" color="primary" />
          <div class="text-h6 q-mt-sm">管理員登入</div>
        </div>

        <!-- Login Form -->
        <q-form class="q-gutter-md q-mt-md">
          <!-- Email Input -->
          <q-input
            v-model="email"
            filled
            label="電子郵件"
            type="email"
            required
            :rules="[(val: string) => !!val || '請輸入電子郵件']"
          />

          <!-- Password Input -->
          <q-input
            v-model="password"
            filled
            label="密碼"
            type="password"
            required
            :rules="[(val: string) => !!val || '請輸入密碼']"
          />

          <!-- Submit Button -->

          <!-- Forgot Password -->
          <div class="text-caption text-center q-mt-md">
            <q-btn label="登入" color="primary" class="full-width" />
            <q-btn flat label="忘記密碼？" color="primary" />
          </div>
        </q-form>
        <q-btn
          label="使用 Google 登入"
          color="primary"
          type="submit"
          unelevated
          class="full-width"
          @click="googleLogin"
        />
        <hr />
        <span
          >當你點擊「登入」按鈕，即代表您同意我們的隱私權政策條款 →
          隱私權政策條款</span
        >
      </q-card>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定義響應式變數
const email = ref('');
const password = ref('');

// Google 登入方法
function googleLogin(): void {
  const baseUrl = process.env.VUE_APP_BACKEND_API_URL;
  if (!baseUrl) {
    console.error('環境變數 VUE_APP_BACKEND_API_URL 未定義');
    return;
  }
  console.log(baseUrl);
  window.location.href = `${baseUrl}/api/oauth2/login`;
}
</script>
