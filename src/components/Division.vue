<template>
  <div class="division">
    <span class="title">Production Division</span>
    <span class="sub-title">Usage of consumers vs personal use</span>

    <div class="cell">
      <svg
        width="618"
        height="195"
        viewBox="0 0 698 236"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Desktop-HD-Copy-4"
            transform="translate(-873.000000, -252.000000)"
          >
            <g id="Group-3" transform="translate(873.000000, 279.000000)">
              <text
                id="890"
                font-family="Montserrat-Medium, Montserrat"
                font-size="23"
                font-weight="400"
                letter-spacing="0.4809093"
                fill="#00D6CF"
              >
                <tspan x="30" y="91">890</tspan>
              </text>
              <text
                id="kWh"
                font-family="Montserrat-Medium, Montserrat"
                font-size="14"
                font-weight="400"
                letter-spacing="0.2927274"
                fill="#A6ADB7"
              >
                <tspan x="95" y="91">kWh</tspan>
              </text>
              <g
                id="Group-8"
                transform="translate(577.000000, 26.000000)"
                font-family="Montserrat-Medium, Montserrat"
                font-weight="400"
              >
                <text
                  id="300"
                  font-size="23"
                  letter-spacing="0.4809093"
                  fill="#00D6CF"
                >
                  <tspan x="0" y="66">300</tspan>
                </text>
                <text
                  id="kWh-Copy"
                  font-size="14"
                  letter-spacing="0.2927274"
                  fill="#A6ADB7"
                >
                  <tspan x="49" y="66">kWh</tspan>
                </text>
                <text
                  id="34%"
                  font-size="18"
                  letter-spacing="0.3763638"
                  fill="#00D6CF"
                >
                  <tspan x="45" y="17">34%</tspan>
                </text>
              </g>
              <g id="Group-2" transform="translate(0.000000, 109.000000)">
                <path
                  d="M6.5,0 L691.5,0 C695.089851,-6.59444907e-16 698,2.91014913 698,6.5 C698,10.0898509 695.089851,13 691.5,13 L440.13865,13 L6.5,13 C2.91014913,13 4.39629938e-16,10.0898509 0,6.5 C-4.39629938e-16,2.91014913 2.91014913,6.59444907e-16 6.5,0 Z"
                  id="Rectangle"
                  fill="#BAF0EF"
                ></path>
                <path
                  d="M469,0 L691.5,0 C695.089851,-6.59444907e-16 698,2.91014913 698,6.5 C698,10.0898509 695.089851,13 691.5,13 L469,13 L469,0 Z"
                  id="Rectangle-Copy-3"
                  fill="#00D6CF"
                ></path>
              </g>
              <g
                id="line_right"
                transform="translate(686.000000, 0.000000)"
                fill="#BAC3D1"
              >
                <circle id="Oval" cx="3.5" cy="115.5" r="3.5"></circle>
                <rect
                  id="Rectangle"
                  x="2"
                  y="0"
                  width="3"
                  height="116"
                  rx="1.5"
                ></rect>
              </g>
              <g
                id="line_left"
                transform="translate(4.000000, 0.000000)"
                fill="#BAC3D1"
              >
                <circle id="Oval" cx="3.5" cy="115.5" r="3.5"></circle>
                <rect
                  id="Rectangle"
                  x="2.0375"
                  y="0"
                  width="3"
                  height="117"
                  rx="1.5"
                ></rect>
              </g>
              <text
                id="66%"
                font-family="Montserrat-Medium, Montserrat"
                font-size="18"
                font-weight="400"
                letter-spacing="0.3763638"
                fill="#00D6CF"
              >
                <tspan x="30" y="42">66%</tspan>
              </text>
            </g>
            <text
              id="Personal-usage"
              font-family="Montserrat-Medium, Montserrat"
              font-size="20"
              font-weight="400"
              letter-spacing="-0.681818"
              fill="#A6ADB7"
            >
              <tspan x="877" y="269">Personal usage</tspan>
            </text>
            <g
              id="Group-4"
              transform="translate(1143.000000, 423.000000)"
              font-family="Montserrat-Medium, Montserrat"
              font-weight="400"
            >
              <g id="Group-5" transform="translate(37.000000, 0.000000)">
                <text
                  id="1190"
                  font-size="30"
                  letter-spacing="0.627273"
                  fill="#00D6CF"
                >
                  <tspan x="0" y="29">1190</tspan>
                </text>
                <text
                  id="kWh-Copy-2"
                  font-size="14"
                  letter-spacing="0.2927274"
                  fill="#A6ADB7"
                >
                  <tspan x="67" y="29">kWh</tspan>
                </text>
              </g>
              <text
                id="Total-production"
                font-size="20"
                letter-spacing="-0.681818"
                fill="#A6ADB7"
              >
                <tspan x="0" y="61">Total production</tspan>
              </text>
            </g>
            <text
              id="Consumer-usage"
              font-family="Montserrat-Medium, Montserrat"
              font-size="20"
              font-weight="400"
              letter-spacing="-0.68"
              fill="#A6ADB7"
            >
              <tspan x="1402" y="267">Consumer usage</tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Division',
  props: {
  }
}
</script>

<style scoped lang="scss">
@import "../global.scss";

.division {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cell {
  height: 100%;
  background: #ffffff;
  border: 1px solid #f5f9ff;
  box-shadow: 0 5px 11px -3px #eceff3;
  border-radius: 5px;
  width: 100%;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
}

#Rectangle-Copy-3 {
  fill: #00d6cf !important;
}
#Rectangle-Copy-3:hover {
  fill: hsla(178, 100%, 30%, 1);
}
#Rectangle:hover {
  fill: hsla(168, 40%, 50%, 0.3);
}
</style>
