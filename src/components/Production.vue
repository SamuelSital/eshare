<template>
  <div class="production">
    <span class="title">Production</span>
    <span class="sub-title">Energy production this month</span>
    <div class="cell" v-if="chartdata">
      <BarChart :height="233" :chartdata="chartdata" />
    </div>
    <div class="loading" v-else>
      <i class="fa fa-spin fa-circle-notch fa-1x" /> Loading...
    </div>
  </div>
</template>

<script>
import BarChart from './BarChart';
import Loader from './Loader';
import { Promise } from 'q';
import { apiUrl } from '../config';

export default {
  name: 'Production',
  props: {
  },
  components: {
    BarChart,
  },
  data() {
    return {
      chartdata: null
    };
  },
  methods: {
    showData(labels, data) {
      this.chartdata = {
        labels: labels,
        datasets: [
          {
            label: 'Production',
            backgroundColor: '#00D6CF',
            borderColor: '#00D6CF',
            data: data,
          }
        ]
      }
    }
  },

  mounted() {
    const test = false;
    if (test) {
      let data = [];
      let labels = [];
      for (let i = 0; i < 31; i++) {
        data.push(Math.random() * 100);
        labels.push(i + 1);
      }
      return this.showData(labels, data);
    }
    fetch(`${apiUrl}/producer_history`)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(res => {
        let production = res.reverse().slice(0, 31).reverse();
        let data = [];
        let labels = [];
        production.forEach(([time, value]) => {
          labels.push(new Date(time).getDate())
          data.push(value);
        })
        this.showData(labels, data);
      });
  }
}
</script>

<style scoped lang="scss">
@import "../global.scss";
.production {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.cell {
  background: #ffffff;
  border: 1px solid #f5f9ff;
  box-shadow: 0 5px 11px -3px #eceff3;
  border-radius: 5px;
  padding: 20px;
}

.loading {
  background: #ffffff;
  border: 1px solid #f5f9ff;
  box-shadow: 0 5px 11px -3px #eceff3;
  border-radius: 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $gray2;
  font-size: 1.2em;
  i {
    margin-right: 5px;
  }
}
</style>
