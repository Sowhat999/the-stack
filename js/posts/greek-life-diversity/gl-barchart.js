// Load and munge data, then make the visualization.
let greeklifeFileName =
  '../../../../datasets/greek-life-diversity/Demographics.csv';

let dropdownValue = 'Year';

d3
  .csv('/datasets/greek-life-diversity/Demographics.csv', function(d) {
    return { Year: d.Year };
  })
  .then(function(data) {
    initDropdown(data);
  });

function initDropdown(Year) {
  d3
    .select('#dropdown-menu')
    .on('change', function() {
      dropdownValue = d3.select(this).property('value');
      let choice = $('#dropdown-menu option:selected').text();
      loadCSVData(choice, MainChart);
    })
    .selectAll('option')
    .data(Year)
    .enter()
    .append('option')
    .attr('value', function(d) {
      return d.Year;
    })
    .text(function(d) {
      return d.Year;
    });
}

const labels = [
  'White',
  'Asian',
  'Hispanic',
  'Two or more races ',
  'Black',
  'Unknown',
  'Pacific Islander',
  'American Indian',
  'International',
  'Transfer',
  'First Generation',
];

function loadCSVData(choice, chart) {
  //return new Promise(resolve => {
  d3.csv(greeklifeFileName).then(function(csv) {
    csv = csv.filter(function(row) {
      return row['Year'] == choice;
    });
    let greeklifeData = [
      csv[0]['White_GL'],
      csv[0]['Asian_GL'],
      csv[0]['Hispanic_GL'],
      csv[0]['Two_GL'],
      csv[0]['Black_GL'],
      csv[0]['Unknown_GL'],
      csv[0]['PacificIslander_GL'],
      csv[0]['AmericanIndian_GL'],
      csv[0]['International_GL'],
      csv[0]['Transfer_GL'],
      csv[0]['FirstGeneration_GL'],
    ];
    let studentbodyData = [
        csv[0]['White_SB'],
        csv[0]['Asian_SB'],
        csv[0]['Hispanic_SB'],
        csv[0]['Two_SB'],
        csv[0]['Black_SB'],
        csv[0]['Unknown_SB'],
        csv[0]['PacificIslander_SB'],
        csv[0]['AmericanIndian_SB'],
        csv[0]['International_SB'],
        csv[0]['Transfer_SB'],
        csv[0]['FirstGeneration_SB'],
    ];
    const NewChartdata = [
      {
        label: 'Greek Life',
        text: 'Greek Life',
        data: greeklifeData,
        backgroundColor: '#B5BAF2',
      },
      {
        label: 'Student Body',
        text: 'Student Body',
        data: studentbodyData,
        backgroundColor: '#FFE589',
      },
    ];
    chart.data.datasets = NewChartdata;
    chart.update();
  });
}

const Chartdata = {
  labels: labels,
  datasets: [
    {
      label: 'Greek Life',
      text: 'Greek Life',
      data: [
        62.3,9.86,13.05,8.075,0.95,2.225,0.3,0.15,2.1,7.2,9.9,
      ],
      backgroundColor: '#B5BAF2',
    },
    {
      label: 'Student Body',
      text: 'Student Body',
      data: [
        27.31,27.7125,22.01,5.49,3.325,2.2825,0.2625,0.205,11.43,23.1,27.5225,
      ],
      backgroundColor: '#FFE589',
    },
  ],
};

var ctxMain = document.getElementById('main-chart').getContext('2d');
var MainChart = new Chart(ctxMain, {
  type: 'bar',
  data: Chartdata,
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 1,
            callback: function(value) {
              return value.toLocaleString('en-US', {
                style: 'percent',
                maximumFractionDigits: 2,
              }); // convert it to percentage
            },
          },
          scaleLabel: {
            display: true,
            labelString: 'Percentage of People',
          },
          beginAtZero: true,
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Race',
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'Greek Life and Student Body Diversity at UCLA',
      fontSize: 16,
    },

    animation: false,

    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].text;
          var value = tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          });
          return label + ': ' + value;
        },
      },
    },
  },
});

if (window.matchMedia('(max-width: 480px)').matches) {
  MainChart.canvas.style = 'max-height:600px';
  MainChart.options.maintainAspectRatio = false;
  MainChart.update();
}
