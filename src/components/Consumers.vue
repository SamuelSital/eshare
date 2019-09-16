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
          <span>
            <div class="user-icon">
              <i class="fa fa-user"></i>
            </div>
            {{ item.name }}</span
          >
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
        { name: 'Rachel Smith', share: 4, energy: 12, id: 1, },
        { name: 'Ella Hardin', share: 21, energy: 63, id: 2, },
        { name: 'Brian Stutzman', share: 34, energy: 102, id: 3, },
        { name: 'Kara Phillips', share: 5, energy: 15, id: 4, },
        { name: 'Richard Morgan', share: 36, energy: 108, id: 5, },
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
  background-color: hsl(217, 33%, 99%);
}

.list-item {
  display: grid;
  grid-template-columns: $table;
  padding: 12px 20px;
  color: hsl(217, 13%, 46%);
  font-weight: 500;
  font-size: 0.8em;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .user-icon {
    background-color: hsl(217, 33%, 95%);
    color: hsl(217, 23%, 75%);
    font-size: 0.8em;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin-right: 10px;
  }
}

.list-item:hover {
  background-color: $gray1;
}
</style>
