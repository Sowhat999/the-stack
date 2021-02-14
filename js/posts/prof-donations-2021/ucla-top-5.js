let ctx = document.getElementById('ucla-top-5');

let uclaTotal = 1742794.86;
let bidenTotalUCLA = 201469.93 + 199178.67;

let UCLAFullCommitteeNames = [
  'ActBlue',
  'Biden for President / Biden Victory Fund',
  'Democratic National Committee',
  'Democratic Congressional Campaign Committee',
  'Democratic Senatorial Campaign Committee',
];

var uclaBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: UCLAFullCommitteeNames,
    datasets: [
      {
        label: 'Donation Amount',
        data: [441971.4, bidenTotalUCLA, 113315.32, 52796.0, 39087],
        backgroundColor: [
          'rgba(255, 127, 80, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(250, 84, 255, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 127, 80, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(250, 84, 255, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            maxRotation: 0,
          },
          scaleLabel: {
            display: true,
            fontStyle: 'bold',
            fontSize: 12,
            labelString: 'Campaigns / Committees',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: uclaTotal * 0.35, // Your absolute max value
            stepSize: uclaTotal * 0.05,
            callback: function(value) {
              return (value / uclaTotal * 100).toFixed(0) + '%'; // convert it to percentage
            },
          },
          scaleLabel: {
            display: true,
            fontStyle: 'bold',
            labelString: 'Percentage of Total Donations',
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'Top 5 Campaigns Donated to by UCLA Professors',
      fontSize: 16,
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, chart) {
          return tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          });
        },
        title: function(tooltipItem, chart) {
          return UCLAFullCommitteeNames[tooltipItem[0].index];
        },
      },
    },
  },
});

if (window.matchMedia('(max-width: 480px)').matches) {
  uclaBarChart.canvas.style = 'max-height:300px';
  uclaBarChart.options.maintainAspectRatio = false;
  uclaBarChart.options.scales.xAxes[0].labels = [
    'ActBlue',
    'Biden',
    'DNC',
    'DCCC',
    'DSCC',
  ];
  uclaBarChart.update();
}
