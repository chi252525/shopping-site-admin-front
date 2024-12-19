import { defineStore } from 'pinia';
// 定义购物车中的商品项结构
interface CartItem {
  id: number; // 产品 ID
  base_sku: string; // 基本 SKU
  name: string; // 产品名称
  salePrice: number; // 销售价格
  quantity: number; // 购物车中该商品的数量
  // 可选字段
  price?: number; // 单位价格
  discountPrice?: number; // 折扣价格
  versionId?: number; // 版本 ID
  unit?: string; // 单位
  inStock?: boolean; // 是否有库存
  availableStartTime?: Date; // 可用开始时间
  availableEndTime?: Date; // 可用结束时间
  merchantId?: number; // 商家 ID
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[], // 存储购物车中的商品
  }),
  getters: {
    // 计算购物车中的商品总数
    itemCount: (state) => state.items.length,
    // 计算购物车中所有商品的总价格
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        const itemPrice = item.price ?? 0; // Use 0 if item.price is undefined
        return total + itemPrice * item.quantity;
      }, 0);
    },
  },
  actions: {
    // 添加商品到购物车
    addToCart(product: CartItem) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        // 如果商品已存在，增加数量
        existingItem.quantity++;
      } else {
        // 如果商品不存在，添加到购物车
        this.items.push({ ...product, quantity: 1 });
      }
    },
    // 移除商品从购物车
    removeFromCart(product: CartItem) {
      this.items = this.items.filter((item) => item.id !== product.id);
    },
    // 清空购物车
    clearCart() {
      this.items = [];
    },
  },
});
