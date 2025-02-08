<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <button @click="uploadImage">Upload</button>
    
    <!-- 顯示圖片 -->
    <div v-if="imageUrl">
      <h2>Uploaded Image</h2>
      <img :src="imageUrl" alt="Uploaded Image" width="300" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'UploadImage',
  setup() {
    // 定義狀態
    const selectedFile = ref<File | null>(null)
    const imageUrl = ref<string | null>(null)

    // 處理文件選擇
    const handleFileChange = (event: Event) => {
      const input = event.target as HTMLInputElement
      if (input.files && input.files.length > 0) {
        selectedFile.value = input.files[0]
      }
    }

    // 上傳圖片
    const uploadImage = async () => {
      if (!selectedFile.value) {
        alert('Please select a file first!')
        return
      }

      const formData = new FormData()
      formData.append('file', selectedFile.value)

      try {
        // 假設後端 API 路徑是 '/files/upload'
        const response = await axios.post('/files/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            // 添加認證令牌，如果需要的話
            // 'Authorization': `Bearer ${yourAuthToken}`
          },
        })

        // 假設後端返回的是圖片的 fileId
        const fileId = response.data
        // 使用 Google Drive 或你的儲存位置來生成圖片 URL
        imageUrl.value = `https://drive.google.com/uc?id=${fileId}`
      } catch (error) {
        console.error('Error uploading image:', error)
        alert('Error uploading image')
      }
    }

    return {
      selectedFile,
      imageUrl,
      handleFileChange,
      uploadImage,
    }
  },
})
</script>

<style scoped>
/* 自定義樣式 */
button {
  margin-top: 10px;
}
</style>
