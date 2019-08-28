<template>
  <div class="container">
    <!-- <div class="container-row1">
      <div class="container-cell cell1">
        <h1>Thank you!</h1>
        Thank you for being part of this platform.


      </div>
      
      <div class="container-cell cell2">
        
      </div>
    </div> -->

    <div class="container-row2">
      <div class="container-cell cell3">
        <!-- <Division /> -->
        <div class="container-cell cell1">
          <h1>€344 <span id="h1-small">of €550 raised this month</span></h1>

          <!-- [oooooooooooooooo________] (this is a progress bar) -->



          <div id="progress-wrapper">
            <div id="progress" />
          </div>
          
          <h4>6 Supporters &nbsp;&nbsp;&nbsp;&nbsp; 62% coverage</h4>

          <p>
            <!-- There are <b>6</b> donators in your neighborhood. -->
            <!-- <br /> -->
            In order to match the energy bills for the energy poor housholds in your neighborhood, <b>3</b> additional donators would be needed.
          </p>

          <p>
            Do you know any like-minded residents in your neighborhood, in posession of solar panels?

            You can invite them with your <b>referral link</b>:
          </p>
            
            <div style="text-align: center">
              <a href="">www.enershare/referral?id=8DSfdLdska3</a> &nbsp;<button>Copy</button>
            </div>
          <p>
            Let's solve energy poverty together!
          </p>

        </div>
      </div>
      <div class="container-cell cell4">
        <!-- <Consumers /> -->
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
  name: 'Report',
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

#h1-small {
  font-size: 18px;
  font-weight: 500;
}

#progress {
  width: 66%;
  height: 100%;
  background-color: #00ffcc;
}

#progress-wrapper {
  width: 400px;
  background-color: #cae0dc;
  margin: 50px;
  height: 50px;
}

h2 {

}

</style>