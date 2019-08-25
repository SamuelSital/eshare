<template>
  <div class="container">
    <div class="container-row1">
      <div class="container-cell cell1">
        <span class="title">Leaderboard</span>
        <span class="sub-title"></span>
        <div class="cell">
          <div class="header">
            <span class="header-value"></span>
            <span class="header-value">Name</span>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  components: {
  },
  data() {
    return {
      list: [
        { name: 'Donald Trump', energy_produced: 300, energy_consumed: 200, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 200, energy_consumed: 100, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 150, energy_consumed: 30, consumers: 4 },
        { name: 'Donald Trump', energy_produced: 120, energy_consumed: 20, consumers: 3 },
        { name: 'Donald Trump', energy_produced: 100, energy_consumed: 30, consumers: 2 },
        { name: 'Donald Trump', energy_produced: 90, energy_consumed: 30, consumers: 1 },
        { name: 'Donald Trump', energy_produced: 300, energy_consumed: 200, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 200, energy_consumed: 100, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 150, energy_consumed: 30, consumers: 4 },
        { name: 'Donald Trump', energy_produced: 120, energy_consumed: 20, consumers: 3 },
        { name: 'Donald Trump', energy_produced: 100, energy_consumed: 30, consumers: 2 },
        { name: 'Donald Trump', energy_produced: 90, energy_consumed: 30, consumers: 1 },
        { name: 'Donald Trump', energy_produced: 300, energy_consumed: 200, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 200, energy_consumed: 100, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 150, energy_consumed: 30, consumers: 4 },
        { name: 'Donald Trump', energy_produced: 120, energy_consumed: 20, consumers: 3 },
        { name: 'Donald Trump', energy_produced: 100, energy_consumed: 30, consumers: 2 },
        { name: 'Donald Trump', energy_produced: 90, energy_consumed: 30, consumers: 1 },
        { name: 'Donald Trump', energy_produced: 300, energy_consumed: 200, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 200, energy_consumed: 100, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 150, energy_consumed: 30, consumers: 4 },
        { name: 'Donald Trump', energy_produced: 120, energy_consumed: 20, consumers: 3 },
        { name: 'Donald Trump', energy_produced: 100, energy_consumed: 30, consumers: 2 },
        { name: 'Donald Trump', energy_produced: 90, energy_consumed: 30, consumers: 1 },
        { name: 'Donald Trump', energy_produced: 300, energy_consumed: 200, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 200, energy_consumed: 100, consumers: 6 },
        { name: 'Donald Trump', energy_produced: 150, energy_consumed: 30, consumers: 4 },
        { name: 'Donald Trump', energy_produced: 120, energy_consumed: 20, consumers: 3 },
        { name: 'Donald Trump', energy_produced: 100, energy_consumed: 30, consumers: 2 },
        { name: 'Donald Trump', energy_produced: 90, energy_consumed: 30, consumers: 1 },
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
    }
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
  font-size: 22px;
  color: $gray3;
}
$row: 30px 1fr 1fr 1fr 1fr;

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
    background-color: hsl(217, 23%, 94%);
    color: $gray3;
    padding: 8px;
    font-size: 0.7em;
    font-weight: 600;
    border-radius: 100%;
    margin-right: 10px;
  }
}

.row:nth-child(even) {
  background-color: hsl(217, 23%, 98%);
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