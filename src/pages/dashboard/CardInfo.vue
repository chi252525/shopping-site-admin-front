<template>
  <div class="card-info">
    <h3>{{ title }}</h3>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-info {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 150px;
}
.card-info h3 {
  font-size: 16px;
  margin-bottom: 8px;
}
.card-info p {
  font-size: 24px;
  color: #333;
}
</style>
