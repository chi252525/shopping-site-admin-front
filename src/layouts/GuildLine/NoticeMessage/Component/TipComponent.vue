<template>
  <div v-if="showMessage" class="q-pa-md">
    <div :class="`bg-${type} message`">
      <div class="message-content">
        <q-icon :name="icon" size="2rem" color="white" />
        <div class="column justify-start items-start q-ml-sm">
          <p class="text-white">{{ message }}</p>
          <span class="text-white">{{ content }}</span>
        </div>
      </div>

      <q-btn class="bg-white message-btn" flat round icon="close" :color="type" @click.stop="closeMessage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showMessage = ref(true);

const closeMessage = () => {
  showMessage.value = false;
};

withDefaults(
  defineProps<{
    type: string;
    message?: string;
    content?: string;
    icon?: string;
  }>(),
  {
    type: 'info',
    message: 'Info Message',
    content: '',
    icon: 'close',
  }
);
</script>

<style scoped lang="scss">
.message {
  padding: 12px 20px;
  border: 2px;
  border-radius: 16px;
  width: 348px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .message-content {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  .message-btn {
    font-size: 6px;
  }
}
</style>
