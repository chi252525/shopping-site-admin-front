<template>
  <div class="dashboard">
    <h5>儀表板</h5>
    <div class="stats">
      <CardInfo title="總銷售額" value="$123,456" />
      <CardInfo title="訂單數量" value="1,234" />
      <CardInfo title="活躍用戶" value="567" />
      <CardInfo title="退貨率" value="3%" />
    </div>
    <div class="charts">
      <SalesChart />
    </div>
  </div>
</template>

<script>
import CardInfo from './CardInfo.vue';
import SalesChart from './SalesChart.vue';

export default {
  components: {
    CardInfo,
    SalesChart,
  },
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
.stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.charts {
  display: flex;
  justify-content: center;
}
</style>
