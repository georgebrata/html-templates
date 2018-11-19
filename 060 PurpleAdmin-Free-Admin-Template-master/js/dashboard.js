(function($) {
  'use strict';
  $(function() {
    if ($("#sales-chart").length) {
      var ctx = document.getElementById('sales-chart').getContext("2d");

      var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke1.addColorStop(0, 'rgba(83, 227 ,218, 0.9)');
      gradientStroke1.addColorStop(1, 'rgba(45, 180 ,235, 0.9)');

      var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke2.addColorStop(0, 'rgba(132, 179 ,247, 0.9)');
      gradientStroke2.addColorStop(1, 'rgba(164, 90 ,249, 0.9)');

      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: [1, 2, 3, 4, 5, 6, 7, 8],
              datasets: [
                {
                  label: "Audi",
                  borderColor: gradientStroke2,
                  backgroundColor: gradientStroke2,
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 1,
                  fill: 'origin',
                  data: [0, 30, 60, 25, 60, 25, 50, 0]
                },
                {
                  label: "BMW",
                  borderColor: gradientStroke1,
                  borderColor: gradientStroke1,
                  backgroundColor: gradientStroke1,
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 1,
                  fill: 'origin',
                  data: [0, 60, 25, 80, 35, 75, 30, 0]
                }
            ]
          },
          options: {
              legend: {
                  position: "top"
              },
              scales: {
                xAxes: [{
                  ticks: {
                    display: true,
                    beginAtZero:true,
                    fontColor: 'rgba(0, 0, 0, 1)'
                  },
                  gridLines: {
                    display:false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#eeeeee'
                  }
                }],
                yAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display:true,
                    color: '#eeeeee',
                  },
                  categoryPercentage: 0.5,
                  ticks: {
                    display: true,
                    beginAtZero: true,
                    stepSize: 20,
                    max: 100,
                    fontColor: 'rgba(0, 0, 0, 1)'
                  }
                }]
              },
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            })
    }
    if ($("#satisfaction-chart").length) {
      var ctx = document.getElementById('satisfaction-chart').getContext("2d");

      var gradientStrokeBluePurple = ctx.createLinearGradient(0, 0, 0, 250);
      gradientStrokeBluePurple.addColorStop(0, '#5607fb');
      gradientStrokeBluePurple.addColorStop(1, '#9425eb');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
              datasets: [
                {
                  label: "Audi",
                  borderColor: gradientStrokeBluePurple,
                  backgroundColor: gradientStrokeBluePurple,
                  hoverBackgroundColor: gradientStrokeBluePurple,
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 1,
                  fill: 'origin',
                  data: [50, 45, 25, 35, 40, 25, 15, 40, 20, 15, 30, 50, 26, 45, 37, 26]
                }
            ]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          display: false,
                          min: 0,
                          stepSize: 10
                      },
                      gridLines: {
                        drawBorder: false,
                        display: true
                      }
                  }],
                  xAxes: [{
                      gridLines: {
                        display:false,
                        drawBorder: false,
                        color: 'rgba(0,0,0,1)',
                        zeroLineColor: '#eeeeee'
                      },
                      ticks: {
                          padding: 20,
                          fontColor: "rgba(0,0,0,1)",
                          autoSkip: true,
                          maxTicksLimit: 6
                      },
                      barPercentage: 0.7
                  }]
                }
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            })
    }
  });
})(jQuery);