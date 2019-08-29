<template>
  <div class="loader">Loading...</div>
</template>

<script>
export default {
  name: 'Leaderboard',
  components: {
  },
  data() {
    return {
      list: [
      ]
    }
  },
  methods: {
  },
  mounted() {
  }

}
</script>

<style lang="scss" scoped>
@import "../global.scss";
.loader,
.loader:after {
  border-radius: 50%;
  width: 4em;
  height: 4em;
}
$backcolor: rgba(0, 214, 207, 0.2);

.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.5em solid $backcolor;
  border-right: 0.5em solid $backcolor;
  border-bottom: 0.5em solid $backcolor;
  border-left: 0.5em solid #00d6cf;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>