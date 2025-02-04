<template>
  <div class="upload-container">
    <input
      type="file"
      ref="fileInput"
      @change="onFileChange"
      accept="image/*"
    />
    <button @click="uploadImage" :disabled="!selectedFile">上傳圖片</button>
    <div v-if="uploadProgress">
      <p>上傳進度: {{ uploadProgress }}%</p>
    </div>
    <img v-if="uploadedImageUrl" :src="uploadedImageUrl" alt="Uploaded Image" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

// 定義變數
const selectedFile = ref<File | null>(null);
const uploadProgress = ref<number | null>(null);
const uploadedImageUrl = ref<string | null>(null);

// 處理文件變更
const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    selectedFile.value = input.files[0];
  }
};

// 上傳圖片
const uploadImage = async () => {
  if (!selectedFile.value) return;

  const formData = new FormData();
  formData.append('file', selectedFile.value);

  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          uploadProgress.value = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
        }
      },
    });
    uploadedImageUrl.value = response.data.imageUrl; // 假設後端返回圖片 URL
  } catch (error) {
    console.error('上傳圖片失敗', error);
  }
};
</script>

<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button:disabled {
  background-color: #ccc;
}
</style>
