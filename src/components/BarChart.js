import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    Chart.elements.Rectangle.prototype.draw = function () {

      var ctx = this._chart.ctx;
      var vm = this._view;
      var left, right, top, bottom, signX, signY, borderSkipped, radius;
      var borderWidth = vm.borderWidth;
      // Set Radius Here
      // If radius is large enough to cause drawing errors a max radius is imposed
      var cornerRadius = 2;

      if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top ? 1 : -1;
        borderSkipped = vm.borderSkipped || 'bottom';
      } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left ? 1 : -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
      }

      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize ? barSize : borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
        var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
        var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;

      // Corner points, from bottom-left to bottom-right clockwise
      // | 1 2 |
      // | 0 3 |
      var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
      ];

      // Find first (starting) corner with fallback to 'bottom'
      var borders = ['bottom', 'left', 'top', 'right'];
      var startCorner = borders.indexOf(borderSkipped, 0);
      if (startCorner === -1) {
        startCorner = 0;
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4];
      }

      // Draw rectangle from 'startCorner'
      var corner = cornerAt(0);
      ctx.moveTo(corner[0], corner[1]);
      var nextCornerId;
      var nextCorner;
      for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i + 1;
        if (nextCornerId == 4) {
          nextCornerId = 0
        }

        nextCorner = cornerAt(nextCornerId);

        var width = corners[2][0] - corners[1][0];
        var height = corners[0][1] - corners[1][1];
        var x = corners[1][0];
        var y = corners[1][1];

        var radius = cornerRadius;

        // Fix radius being too large
        if (radius > height / 2) {
          radius = height / 2;
        } if (radius > width / 2) {
          radius = width / 2;
        }

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

      }

      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      hover: {
        mode: 'nearest',
        intersect: true
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (tooltipItem, data) => {
            return parseFloat(tooltipItem.value).toFixed(1) + ' kWh';
          }
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            color: '#00000000',
          },
          categoryPercentage: 0.9,
          barPercentage: 1.0,
          ticks: {
            fontColor: "hsl(217deg, 30%, 80%)",
          },
        }],
        yAxes: [{
          gridLines: {
            display: false,
            color: '#00000000',
          },
          // scaleLabel: {
          //   display: true,
          //   labelString: 'Production(kWh)'
          // },
          ticks: {
            fontColor: "hsl(217deg, 30%, 80%)",
          },
        }]
      },
      legend: {
        display: false,
      }
    };
    console.log(this.chartdata);
    this.renderChart(this.chartdata, options)
  }
}