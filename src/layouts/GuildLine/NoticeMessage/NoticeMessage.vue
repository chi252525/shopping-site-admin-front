<template>
  <q-toolbar class="bg-primary text-white">
    <q-toolbar-title> 注意訊息 </q-toolbar-title>
  </q-toolbar>

  <q-separator />

  <div class="row wrap justify-start items-center">
    <div v-for="item in tipList" :key="item.id" class="tip-item" @click="copyComponent(item)">
      <TipComponent :type="item.type" :message="item.message" :content="item.content" :icon="item.icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ITipListType } from './type';
import TipComponent from './Component/TipComponent.vue';
import { useCopy } from '../Composable/useCopy';

const tipList = ref<ITipListType[]>([
  {
    id: 1,
    type: 'info',
    message: 'Info Message',
    content: '',
    icon: 'campaign',
    html: `import { useDialog } from 'src/composable/AlertDialog';
const { showNoticeMessage } = useDialog();

showNoticeMessage({
  type: 'info', //info, black, negative, warning, positive
  message: '',
  content: '',
});`,
  },
  {
    id: 2,
    type: 'black',
    message: 'black Message',
    content: '',
    icon: 'check_circle_outline',
    html: `import { useDialog } from 'src/composable/AlertDialog';
const { showNoticeMessage } = useDialog();

showNoticeMessage({
  type: 'black', //info, black, negative, warning, positive
  message: '',
  content: '',
});`,
  },
  {
    id: 3,
    type: 'negative',
    message: 'Negative Message',
    content: 'Negative message description and content is flexible.',
    icon: 'error_outline',
    html: `import { useDialog } from 'src/composable/AlertDialog';
const { showNoticeMessage } = useDialog();

 showNoticeMessage({
  type: 'negative', //info, black, negative, warning, positive
  message: '',
  content: '',
});`,
  },
  {
    id: 4,
    type: 'warning',
    message: 'Warning Message',
    content: 'Warning message description',
    icon: 'notifications_none',
    html: `import { useDialog } from 'src/composable/AlertDialog';
const { showNoticeMessage } = useDialog();

 showNoticeMessage({
  type: 'warning', //info, black, negative, warning, positive
  message: '',
  content: '',
});`,
  },
  {
    id: 5,
    type: 'negative',
    message: '確認刪除/停用組件',
    content: '',
    icon: 'notifications_none',
    html: `import { useDialog } from 'src/composable/AlertDialog';
  const { confirmMessage } = useDialog();

    const isConfirm = await confirmMessage({
      type: 'negative', // 刪除/停用 negative , 恢復 positive
      deleteConfirmStatus: true,
      message: '確定要刪除/停用 ?',
      content: '',
    });

    if (isConfirm) {
      // 確認執行的邏輯
    }`,
  },
  {
    id: 5,
    type: 'positive',
    message: '確認恢復組件',
    content: '',
    icon: 'notifications_none',
    html: `import { useDialog } from 'src/composable/AlertDialog';
  const { confirmMessage } = useDialog();

    const isConfirm = await confirmMessage({
      type: 'positive', // 刪除/停用 negative , 恢復 positive
      deleteConfirmStatus: true,
      message: '確定要恢復 ?',
      content: '',
    });

    if (isConfirm) {
      // 確認執行的邏輯
    }`,
  },
]);

const { copyText } = useCopy();
const copyComponent = (item: ITipListType) => {
  copyText(item.html, `${item.message} 組件`);
};
</script>
<style scoped lang="scss">
.tip-item {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
