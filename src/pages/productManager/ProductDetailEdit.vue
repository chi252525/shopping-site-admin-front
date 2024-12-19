<template>
  <div class="product-detail-edit">
    <h1>編輯產品詳細信息</h1>
    <form @submit.prevent="saveProduct">
      <div class="form-group">
        <label for="name">產品名稱</label>
        <input
          type="text"
          id="name"
          v-model="product.name"
          placeholder="輸入產品名稱"
          required
        />
      </div>

      <div class="form-group">
        <label for="description">產品描述</label>
        <textarea
          id="description"
          v-model="product.description"
          placeholder="輸入產品描述"
          rows="4"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="price">價格</label>
        <input
          type="number"
          id="price"
          v-model.number="product.price"
          placeholder="輸入產品價格"
          required
          min="0"
        />
      </div>

      <div class="form-group">
        <label for="stock">庫存數量</label>
        <input
          type="number"
          id="stock"
          v-model.number="product.stock"
          placeholder="輸入庫存數量"
          required
          min="0"
        />
      </div>

      <div class="form-group">
        <label for="category">分類</label>
        <select id="category" v-model="product.category">
          <option disabled value="">請選擇分類</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="status">狀態</label>
        <input type="checkbox" id="status" v-model="product.isAvailable" />
        <label for="status">可用</label>
      </div>

      <button type="submit" class="save-button">保存</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        category: '',
        isAvailable: false,
      },
      categories: ['電子產品', '服飾', '家居用品', '書籍', '其他'],
    };
  },
  methods: {
    saveProduct() {
      // 模擬保存功能
      console.log('保存的產品信息：', this.product);
      alert('產品信息已保存！');
    },
  },
};
</script>

<style scoped>
.product-detail-edit {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1;
}
</style>
