<template>
  <div class="consumers">
    <span class="title">Consumers</span>
    <span class="sub-title">Consumption per consumer</span>
    <div class="cell">
      <div class="header">
        <span>Name</span>
        <span>Share(%)</span>
        <span>Donated(kWh)</span>
      </div>
      <div class="list-wrapper">
        <div :key="item.id" v-for="item in list" class="list-item">
          <span>{{ item.name }}</span>
          <span>{{ item.share }}</span>
          <span>{{ item.energy }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Consumers',
  props: {
  },
  data() {
    return {
      list: [
        { name: 'Donald Trump', share: 4, energy: 53, id: 1, },
        { name: 'Donald Trump', share: 4, energy: 53, id: 2, },
        { name: 'Donald Trump', share: 4, energy: 53, id: 3, },
        { name: 'Donald Trump', share: 4, energy: 53, id: 4, },
        { name: 'Donald Trump', share: 4, energy: 53, id: 5, },
        // { name: 'Donald Trump', share: 4, energy: 53, id: 5, },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../global.scss";
$table: 2fr 1fr 1fr;

.consumers {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cell {
  background: #ffffff;
  border: 1px solid #f5f9ff;
  box-shadow: 0 5px 11px -3px #eceff3;
  border-radius: 5px;
  // padding: 10px 0px;
  height: 100%;
}

.header {
  display: grid;
  grid-template-columns: $table;
  color: $gray2;
  padding: 10px 20px;
  font-size: 0.7em;
}

.list-item:nth-child(odd) {
  background-color: hsl(217, 23%, 99%);
}

.list-item {
  display: grid;
  grid-template-columns: $table;
  padding: 15px 20px;
  color: hsl(217, 13%, 46%);
  font-weight: 500;
  font-size: 0.8em;
}

.list-item:hover {
  background-color: $gray1;
}
</style>
