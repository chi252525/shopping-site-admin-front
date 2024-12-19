<template>
  <div class="sales-chart">
    <canvas id="salesChart"></canvas>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'SalesChart',
  setup() {
    onMounted(() => {
      const ctx = document.getElementById('salesChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label: '銷售額',
              data: [12000, 15000, 17000, 13000, 19000, 22000],
              borderColor: '#42a5f5',
              backgroundColor: 'rgba(66, 165, 245, 0.2)',
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
    });
  },
};
</script>

<style scoped>
.sales-chart {
  width: 100%;
  max-width: 800px;
}
</style>
