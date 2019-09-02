<template>
  <div class="container">
    <div class="container-row1">
      <div class="container-cell cell1">
        <span class="title">Leaderboard</span>
        <span class="sub-title">See your impact compared to other prosumers</span>

        <switch-button v-model="isNational" preLabel="National">Local</switch-button>

        <div v-if="isNational">
          <iframe src="https://public.tableau.com/shared/5YKTG4DTY?:display_count=yes&:showVizHome=no&:toolbar=no" height="300" style="width:100%;margin-bottom:-24px;z-index:0" frameborder="0" ></iframe>

          <div class="cell" style="z-index:1;position: relative;">
            <div class="header">
              <!-- Todo: Showing this kind of data in a leaderboard doesn't make a lot of sense... -->
              <span class="header-value"></span>
              <span class="header-value">Producer</span>
              <span class="header-value">Produced(kWh)</span>
              <span class="header-value">Consumed(kWh)</span>
              <span class="header-value">Consumers</span>
            </div>
            <div
              :key="item.energy_produced"
              v-for="(item, i) in list"
              class="row"
            >
              <span class="row-value number">{{ i + 1 }}</span>
              <span class="row-value">
                <div class="circle">
                  {{ getInitials(item.name) }}
                </div>
                <span>{{ item.name }}</span>
              </span>
              <span class="row-value">{{ item.energy_produced }}</span>
              <span class="row-value">{{ item.energy_consumed }}</span>
              <span class="row-value">{{ item.consumers }}</span>
            </div>
          </div>
        </div>

        <div v-else>
          <iframe src="https://public.tableau.com/views/4PPpostcodevlakkennagemeentelijkeherindeling2018/Sheet1?:display_count=yes&:showVizHome=no&:toolbar=no&:original_view=yes" height="300" style="width:100%;margin-bottom:-24px;z-index:0" frameborder="0" ></iframe>

          <div class="cell" style="z-index:1;position: relative;">
            <div class="header">
              <span class="header-value"></span>
              <span class="header-value">Zipcode</span>
              <span class="header-value">Donators</span>
              <span class="header-value">Recipients</span>
              <span class="header-value">Coverage</span>
            </div>
            <div
              :key="item.energy_produced"
              v-for="(item, i) in list"
              class="row"
            >
              <span class="row-value number">{{ i + 1 }}</span>
              <span class="row-value">
                <!-- <div class="circle">
                  {{ getInitials(item.name) }}
                </div> -->
                <span>{{ getZipCode() }}</span>
              </span>
              <span class="row-value">{{ Math.round(item.energy_produced / 100) }}</span>
              <span class="row-value">{{ Math.round(item.energy_consumed / 100) }}</span>
              <span class="row-value">{{ Math.round( 100 * Math.min(item.energy_consumed / item.energy_produced), 100) }}%</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

import SwitchButton from '../components/SwitchButton.vue';

export default {
  name: 'Leaderboard',
  components: {
    SwitchButton,
  },
  data() {
    return {
      /** national/local leaderboard */
      isNational: true,
      list: [
      ]
    }
  },
  methods: {
    getInitials(name) {
      return name.split(" ").map(x => x[0]).reduce((acc, it) => acc + it.toUpperCase(), "");
    },
    getColor(i) {
      const hue = (i / this.list.length * 360).toFixed(0);
      return {
        'background-color': `hsl(${hue}deg, 100%, 95%)`,
      }
    },
    getZipCode() {
      let res = '';
      for (let i = 0; i < 4; i++) {
        res += Math.ceil(Math.random() * 9);
      }
      return res;
    }
  },
  mounted() {
    fetch('http://35.204.156.137/leaderboard')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        const list = Object.keys(data).map(k => ({
          name: k,
          energy_produced: data[k][0].toFixed(2),
          energy_consumed: data[k][1].toFixed(2),
          consumers: data[k][2],
        }));
        list.sort((a, b) => b.energy_produced - a.energy_produced);
        this.list = list;
      })
  }

}
</script>

<style lang="scss" scoped>
@import "../global.scss";

.container {
  width: 1100px;
  display: block;
  margin: 0 auto;
  background: transparent;
  margin-top: 90px;
}

.title {
  font-size: 28px;
  color: $gray3;
}
$row: 30px 2fr 1fr 1fr 1fr;

.header {
  display: grid;
  grid-template-columns: $row;
  color: $gray2;
  font-size: 0.9em;
  padding: 10px 20px 10px 20px;
}

.row {
  display: grid;
  grid-template-columns: $row;
  color: $gray3;
  font-weight: 500;
  padding: 15px 20px;

  .number {
    color: $gray2;
  }

  .row-value {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(217, 23%, 94%);
    color: $gray2;
    width: 45px;
    height: 45px;
    font-size: 0.8em;
    font-weight: 600;
    border-radius: 100%;
    margin-right: 15px;
  }
}

.row:nth-child(even) {
  background-color: hsl(217, 33%, 99%);
  // background-color: hsl(217, 23%, 99%);
}

.row:hover {
  background-color: $gray1;
}

.sub-title {
  font-size: 13px;
  color: $gray2;
  margin-bottom: 10px;
}

.container-row1 {
  display: flex;
  background: transparent;
  margin-bottom: 30px;

  .container-cell {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .cell {
    background: #ffffff;
    border: 1px solid #f5f9ff;
    box-shadow: 0 5px 11px -3px #eceff3;
    border-radius: 5px;
    width: 100%;
  }

  .cell1 {
    background: transparent;
  }

  .cell2 {
    width: 100%;
    margin-left: 20px;
  }
}

.container-row2 {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 450px;
}
</style>