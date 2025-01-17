<template>
  <input
    v-show="false"
    ref="uploadFile"
    accept="image/gif, image/jpeg, image/png"
    type="file"
    @change="handleFileUpload"
  />

  <div class="upload" @click="uploadImage">
    <q-img
      v-if="imageBase64"
      :src="`${imageBase64}`"
      alt="LOGO"
      class="upload-image"
    />
    <div v-else class="column items-center justify-center">
      <q-icon name="image" color="primary" size="md" class="icon" />
      <span class="textSize-16 text-primary">選擇 圖片並預覽</span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'UploadFile',
  // Your component logic here
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import { useDialog } from 'src/composable/AlertDialog';

const { showNoticeMessage } = useDialog();

const imageBase64 = defineModel();

// 依照寬高調整圖片大小
const resizeImage = (
  img: HTMLImageElement,
  maxSize: number
): { width: number; height: number } => {
  let { width, height } = img;

  if (width > height && width > maxSize) {
    height *= maxSize / width;
    width = maxSize;
  } else if (height > width && height > maxSize) {
    width *= maxSize / height;
    height = maxSize;
  }

  return { width, height };
};

// 壓縮圖片
const compressImage = (
  canvas: HTMLCanvasElement,
  imageQuality: number,
  maxSize: number
): string => {
  let imageData = canvas.toDataURL('image/jpeg', imageQuality); // 指定格式 image / jpeg

  while (imageData.length > maxSize && imageQuality > 0.1) {
    imageQuality -= 0.1;
    imageData = canvas.toDataURL('image/jpeg', imageQuality);
  }

  return imageData;
};

const processImage = (img: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const maxSize = 180;

  const { width, height } = resizeImage(img, maxSize);

  canvas.width = width;
  canvas.height = height;

  ctx && ctx.drawImage(img, 0, 0, width, height);

  const maxFileSize = 100 * 1024; // 上傳圖片的大小單位為 byte，轉 kb 要除 1024
  let imageQuality = 0.9;
  let imageData = compressImage(canvas, imageQuality, maxFileSize);

  if (imageData.length > maxFileSize) {
    showNoticeMessage({
      type: 'negative',
      message: '圖片壓縮完仍超過100kb,請選擇尺寸更小的原始圖片',
    });

    return;
  }

  imageBase64.value = imageData;
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (!target.files || target.files.length === 0) {
    showNoticeMessage({
      type: 'negative',
      message: '請選擇一個圖片文件',
    });
    return;
  }
  const file = target.files[0];
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  const reader = new FileReader();
  if (!allowedTypes.includes(file.type)) {
    showNoticeMessage({
      type: 'negative',
      message: '圖片格式錯誤,格式必須為 JPG,JPEG, PNG，請重新上傳',
    });
    return;
  }
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result as string;

    img.onload = () => processImage(img);
  };

  reader.readAsDataURL(file);
};

const uploadFile = ref<HTMLInputElement | null>(null);
const uploadImage = () => {
  if (uploadFile.value) {
    uploadFile.value.click();
  }
};
</script>

<style scoped lang="scss">
.upload {
  width: 180px;
  height: 180px;
  border-radius: 8px;
  border: 2px solid $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(58, 132, 201, 0.3);
    transition: 0.3s;
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>
