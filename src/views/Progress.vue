<template>
  <div class="container">
    <div class="container-row2">
      <div v-if="progress" class="container-cell cell3">
        <h1 class="title">
          €344 <span id="h1-small">of €550 raised this month</span>
        </h1>

        <!-- [oooooooooooooooo________] (this is a progress bar) -->

        <div class="progress-wrapper">
          <div class="progress">{{ current.month }}</div>

          <h4>
            {{ current.ProsumersNeeded }} Prosumers needed
            &nbsp;&nbsp;&nbsp;&nbsp; {{ current.Coverage }}% coverage
          </h4>
        </div>

        <br />
        <!-- <h3>Matching Energy Demand</h3> -->
        <p>
          <b>3 more donators are needed </b> in order to match the energy bills
          for the energy poor housholds in your neighborhood.
        </p>

        <p>
          Do you know any like-minded residents in your neighborhood, in
          posession of solar panels? You can invite them with your
          <b>referral link</b>:
        </p>

        <!-- <div style="text-align: center">
            <a href="">www.enershare.eu/referral?id=8DSfdLdska3</a> &nbsp;<span class="copyButton"> <i class="fa fa-copy"></i> Copy</span>
          </div> -->
        <div class="link-wrapper">
          <a class="link" href="">www.enershare.com/referral?id=8DSfdLdska3</a>
          <div class="link-copy" href="#"><i class="fa fa-copy"></i></div>
        </div>
        <!-- <p>Let's solve energy poverty together!</p> -->

        <h2>Predictions</h2>

        <div
          :key="item.index"
          v-for="item in progress"
          class="progress-wrapper prediction"
        >
          <div
            :style="{ 'max-width': `${item.Coverage}%` }"
            class="progress"
            id="prediction1"
          >
            {{ item.month }}
          </div>
          <h4>
            {{ item.ProsumersNeeded }} Prosumers needed &nbsp;&nbsp;&nbsp;&nbsp;
            {{ item.Coverage }}% Coverage
          </h4>
        </div>
      </div>

      <div v-else class="container-cell cell4">
        loading
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Progress',
  data() {
    return {
      current: null,
      progress: null,
    }
  },
  methods: {
    showData(data) {
      const monthsToIndex = { "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12, }
      const currentMonth = new Date().getMonth() + 1;
      const futureMonths = Object.keys(data)
        .filter(k => monthsToIndex[k] >= currentMonth)
        .map(k => ({ month: k, index: monthsToIndex[k], ...data[k] }))
        .map(d => d.Coverage < 10 ? ({ ...d, Coverage: d.Coverage * 5 }) : d)
        .sort((a, b) => a.index - b.index);
      this.current = futureMonths[0];
      this.progress = futureMonths.slice(1, futureMonths.length);
    }
  },
  mounted() {
    fetch('http://35.204.156.137/coverage')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        this.showData(data);
      })
      .catch(e => console.log(e));
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
  margin: 0;
  // font-weight: 500;
}

.sub-title {
  font-size: 13px;
  color: $gray2;
  margin-bottom: 10px;
}

.container-row2 {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 450px;
  color: $gray3;

  .cell3 {
    width: 100%;
    margin-left: 20px;
    background: #ffffff;
    border: 1px solid #f5f9ff;
    box-shadow: 0 5px 11px -3px #eceff3;
    padding: 20px;
    border-radius: 5px;

    .link-wrapper {
      text-align: center;
      background-color: hsl(217deg, 00%, 97%);
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .link {
        text-decoration: none;
        color: $gray3;
      }

      .link-copy {
        padding: 15px;
        border-radius: 3px;
        margin-left: 15px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background-color: $gray21;
        }
      }
    }
  }
}

#h1-small {
  font-size: 18px;
  font-weight: 500;
}

@keyframes growProgress {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.progress {
  width: 0%;
  height: 100%;

  background-color: #69d8d4;
  border-radius: 5px;

  animation: 1s ease-out 0s forwards growProgress;

  overflow: hidden;
  color: white;
  font-weight: 900;
  text-indent: 16px;
  line-height: 48px;

  max-width: 62%;

  &#prediction1 {
    background-color: #69d8d4;
    max-width: 67%;
    animation-delay: 0.2s;
  }
  &#prediction2 {
    // background-color: #84dbd8;
    background-color: #69d8d4;
    max-width: 74%;
    animation-delay: 0.4s;
  }
}

h4 {
  font-weight: 600;
}

.progress-wrapper {
  width: 400px;
  background-color: hsl(217, 10%, 90%);
  margin: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 5px;
}

.copyButton {
  -moz-box-shadow: inset 0px 1px 0px 0px #ffffff;
  -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #f9f9f9),
    color-stop(1, #e9e9e9)
  );
  background: -moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
  background: -webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
  background: -o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
  background: -ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);
  background-color: #f9f9f9;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
}
.copyButton:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #e9e9e9),
    color-stop(1, #f9f9f9)
  );
  background: -moz-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
  background: -webkit-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
  background: -o-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
  background: -ms-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
  background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='#f9f9f9',GradientType=0);
  background-color: #e9e9e9;
}
.copyButton:active {
  position: relative;
  top: 1px;
}

@keyframes progress-animation {
  from {
    width: 0px;
  }
  to {
    width: 66%;
  }
}
</style>