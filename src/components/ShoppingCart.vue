<template>
  <div>
    <h1>您的購物車</h1>
    <div v-for="item in cart.items" :key="item.id">
      <p>{{ item.name }} - {{ item.quantity }} x {{ item.salePrice }}</p>
      <button @click="cart.removeFromCart(item)">移除</button>
    </div>
    <p>總數: {{ cart.itemCount }}</p>
    <p>總價格: {{ totalPrice }}</p>
    <button @click="cart.clearCart">清空購物車</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore';
// Access the cart store
const cart = useCartStore(); // Type assertion for the store

// Optionally, if you need computed values or methods, you can define them directly
// For example, calculating the total price:
const totalPrice = computed(() => cart.totalPrice);
</script>
