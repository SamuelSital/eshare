<template>
  <div class="production">
    <span class="title">Production</span>
    <span class="sub-title">Energy production this month</span>
    <div class="cell">
      <BarChart :height="233" :chartdata="chartdata" />
    </div>
  </div>
</template>

<script>
import BarChart from './BarChart';

export default {
  name: 'Production',
  props: {
  },
  components: {
    BarChart,
  },
  data() {
    const data = [];
    const labels = [];
    for (let i = 0; i < 31; i++) {
      data.push(Math.random() * 100);
      labels.push(i + 1);
    }
    return {
      chartdata: {
        labels: labels,
        datasets: [
          {
            label: 'Production',
            backgroundColor: '#00FFCC',
            borderColor: '#00FFCC',
            data: data,
          }
        ]
      }
    };
  },

  mounted() {
  }
}
</script>

<style scoped lang="scss">
@import "../global.scss";
.production {
  display: flex;
  flex-direction: column;
}
.cell {
  background: #ffffff;
  border: 1px solid #f5f9ff;
  box-shadow: 0 5px 11px -3px #eceff3;
  border-radius: 5px;
  padding: 20px;
}
</style>
