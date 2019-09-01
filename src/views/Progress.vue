<template>
  <div class="container">
    <div class="container-row2">
      <div class="container-cell cell3">
        <!-- <Division /> -->
        <h1 class="title">
          €344 <span id="h1-small">of €550 raised this month</span>
        </h1>

        <!-- [oooooooooooooooo________] (this is a progress bar) -->

        <div id="progress-wrapper">
          <div id="progress" />
        </div>

        <h4>6 Supporters &nbsp;&nbsp;&nbsp;&nbsp; 62% coverage</h4>

        <p>
          <!-- There are <b>6</b> donators in your neighborhood. -->
          <!-- <br /> -->
          In order to match the energy bills for the energy poor housholds in
          your neighborhood, <b>3</b> additional donators would be needed.
        </p>

        <p>
          Do you know any like-minded residents in your neighborhood, in
          posession of solar panels? You can invite them with your
          <b>referral link</b>:
        </p>

        <div class="link-wrapper">
          <a class="link" href="">www.enershare/referral?id=8DSfdLdska3</a>
          <div class="link-copy" href="#"><i class="fa fa-copy"></i></div>
        </div>
        <p>
          Let's solve energy poverty together!
        </p>
      </div>
      <div class="container-cell cell4">
        <!-- <Consumers /> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Progress',
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

#progress {
  width: 66%;
  height: 100%;
  background-color: $primary;
  border-radius: 5px;
  animation-name: progress-animation;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

#progress-wrapper {
  width: 400px;
  background-color: hsl(217, 10%, 90%);
  margin: 50px;
  height: 50px;
  border-radius: 5px;
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