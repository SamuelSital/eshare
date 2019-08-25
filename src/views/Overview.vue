<template>
  <div class="container">
    <div class="container-row1">
      <div class="container-cell cell1">
        <Impact />
      </div>
      <div class="container-cell cell2">
        <Production />
      </div>
    </div>

    <div class="container-row2">
      <div class="container-cell cell3">
        <Division />
      </div>
      <div class="container-cell cell4">
        <Consumers />
      </div>
    </div>
  </div>
</template>

<script>
import Impact from '../components/Impact.vue';
import Division from '../components/Division.vue';
import Production from '../components/Production.vue';
import Consumers from '../components/Consumers.vue';

export default {
  name: 'Overview',
  components: {
    Impact,
    Division,
    Production,
    Consumers
  }
}
</script>

<style lang="scss">
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
  // font-weight: 500;
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

  .cell {
    background: #ffffff;
    border: 1px solid #f5f9ff;
    box-shadow: 0 5px 11px -3px #eceff3;
    border-radius: 5px;
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