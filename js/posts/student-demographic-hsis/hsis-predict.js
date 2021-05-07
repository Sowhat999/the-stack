let ctx7 = document.getElementById('HSIS_Projection');

var HSIS_Projection = new Chart(ctx7, {
  type: 'line',
  data: {
    labels: [
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
      '2026',
      '2027',
      '2028',
      '2029',
      '2030',
      '2031',
      '2032',
      '2033',
      '2034',
      '2035',
      '2036',
      '2037',
      '2038',
      '2039',
      '2040',
      '2041',
    ],
    datasets: [
      {
        label: 'Actual % UCLA Hispanic Students',
        data: [
          0.12,
          0.12,
          0.13,
          0.13,
          0.13,
          0.13,
          0.13,
          0.13,
          0.13,
          0.13,
          0.13,
          0.14,
          0.15,
          0.15,
          0.16,
          0.17,
          0.18,
          0.18,
          0.18,
          0.18,
          0.18,
        ],
        borderColor: '#0066CC',
        fill: false,
      },
      {
        label:
          'Trend Line of % Hispanic Students',
        data: [
          0.1126406926,
          0.11604329,
          0.1194458874,
          0.1228484848,
          0.1262510823,
          0.1296536797,
          0.1330562771,
          0.1364588745,
          0.1398614719,
          0.1432640693,
          0.1466666667,
          0.1500692641,
          0.1534718615,
          0.1568744589,
          0.1602770563,
          0.1636796537,
          0.1670822511,
          0.1704848485,
          0.1738874459,
          0.1772900433,
          0.1806926407,
        ],
        lineTension: 0.1,
        borderColor: '#0000CC',
        fill: false,
      },
      {
        label: 'Projected % Hispanic Students',
        data: [
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          NaN,
          0.1806926407,
          0.1840952381,
          0.1874978355,
          0.1909004329,
          0.1943030303,
          0.1977056277,
          0.2011082251,
          0.2045108225,
          0.2079134199,
          0.2113160173,
          0.2147186147,
          0.2181212121,
          0.2215238095,
          0.2249264069,
          0.2283290043,
          0.2317316017,
          0.2351341991,
          0.2385367965,
          0.2419393939,
          0.2453419913,
          0.2487445887,
          0.2521471861,
        ],
        borderColor: '#6600CC',
        lineTension: 0.1,
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: 'HSI Threshold (25%)',
        borderColor: '#FF0000',
        lineTension: 0.1,
        data: [
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
          0.25,
        ],
        fill: false,
      },
    ],
  },
  options: {
    reponsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    title: {
      display: true,
      text: 'Yearly Percentage of Hispanic Students at UCLA',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              return value.toLocaleString('en-US', {
                style: 'percent',
                minimumFractionDigits: 0,
              }); // convert value to dollar format
            },
            min: 0,
            max: 0.3,
            stepSize: 0.05,
          },
          scaleLabel: {
            display: true,
            labelString: 'Hispanic Students (%)',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Year',
          },
        },
      ],
    },
    tooltips: {
      intersect: true,
      displayColors: true,
      callbacks: {
        label: function (tooltipItem, datasets) {
          label = tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          });
          return label;
        },
      },
    },
    animation: false
  },
  lineAtIndex: [
    // { index: 41, text: ['2040', 'UCLA becomes', 'a HSI'] },
  ],
});

if (window.matchMedia('(max-width: 480px)').matches) {
  HSIS_Projection.canvas.style = 'max-height:300px';
  HSIS_Projection.options.maintainAspectRatio = false;
  HSIS_Projection.update();
}
