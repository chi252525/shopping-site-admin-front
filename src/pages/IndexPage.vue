<template>
  <q-page-container class="q-pa-lg q-mx-md"> </q-page-container>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});
</script>
<style scoped>
.full-width {
  width: 100%; /* 使图片宽度填满容器 */
  height: auto; /* 高度自适应 */
  object-fit: cover; /* 保持纵横比并裁剪 */
}
.content {
  padding-bottom: 100px; /* 为内容增加底部边距，确保内容不会被页脚遮挡 */
}
</style>
