<template>
  <q-dialog ref="dialogRef">
    <div class="q-pa-md notification-container">
      <div :class="`bg-${backGroundType} message`">
        <div class="row justify-between items-center">
          <div class="message-content">
            <q-icon :name="icon" size="2rem" color="white" />
            <div class="column justify-start items-start q-ml-sm">
              <p class="text-white textSize-h5">{{ message }}</p>
              <span v-if="content" class="text-white">{{ content }}</span>
            </div>
          </div>

          <q-btn
            v-if="!deleteConfirmStatus"
            v-close-popup
            class="bg-white message-btn q-ml-lg"
            flat
            round
            icon="close"
            :color="backGroundType"
          />
        </div>

        <div
          v-if="deleteConfirmStatus"
          class="row justify-end items-center q-mt-md"
        >
          <q-btn
            v-close-popup
            no-caps
            class="guide-btn darken-hover textSize-16"
            :color="backGroundType"
            label="取消"
          />

          <q-btn
            no-caps
            class="guide-btn darken-hover textSize-16"
            :color="backGroundType"
            label="確定"
            @click="onDialogOK"
          />
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDialogPluginComponent } from 'quasar';

const { dialogRef, onDialogOK } = useDialogPluginComponent();

const props = withDefaults(
  defineProps<{
    type: string;
    deleteConfirmStatus?: boolean;
    message?: string;
    content?: string;
  }>(),
  {
    deleteConfirmStatus: false,
  }
);

const backGroundType = ref('');
const icon = ref('');

const switchIcon = () => {
  switch (props.type) {
    case 'info':
      icon.value = 'campaign';
      backGroundType.value = 'info';
      break;

    case 'black':
      icon.value = 'check_circle_outline';
      backGroundType.value = 'black';
      break;

    case 'positive':
      icon.value = 'error_outline';
      backGroundType.value = 'positive';
      break;

    case 'negative':
      icon.value = 'error_outline';
      backGroundType.value = 'negative';
      break;

    case 'warning':
      icon.value = 'notifications_none';
      backGroundType.value = 'warning';
      break;
  }
};

watch(
  () => props.type,
  (newVal) => {
    if (!newVal) return;

    switchIcon();
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
:deep(.q-dialog__backdrop) {
  background: none;
}

.notification-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.message {
  padding: 12px 20px;
  border: 2px;
  border-radius: 16px;
  min-width: 300px;
  display: flex;
  flex-direction: column;

  .message-content {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
      font-weight: 900 !important;
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

.btn {
  display: flex;
}
</style>
