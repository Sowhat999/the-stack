new Chart(document.getElementById("before-covid-pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Letter Grades", "Pass/No Pass"],
    datasets: [{
      label: "Before",
      backgroundColor: ['#77b1d2', '#CFCFC4'],
      data: [153028, 7781]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'During On-Campus Learning',
      fontSize: 19
    },
    plugins: {
      datalabels: {
        formatter: function (value, context) {
          val = value / (153028 + 7781)
          return val.toLocaleString('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          });
        },
        font: {
          size: 16,
        },
        anchor: 'end',
        clamp: true,
        align: 'start'
      }
    }
  }
});

new Chart(document.getElementById("after-covid-pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Letter Grades", "Pass/No Pass"],
    datasets: [{
      label: "After",
      backgroundColor: ['#77b1d2', '#CFCFC4'],
      data: [156343, 12780]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'During Online Learning',
      fontSize: 19
    },
    plugins: {
      datalabels: {
        formatter: function (value, context) {
          val = value / (156343 + 12780)
          return val.toLocaleString('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          });
        },
        font: {
          size: 16
        },
        anchor: 'end',
        clamp: true,
        align: 'start'
      }
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          console.log(tooltipItem)
          // return tooltipItem.datasets.data[tooltipItem.index].toLocaleString('en-US', {
          //   style: 'decimal',
          //   maximumFractionDigits: 2,
          // });
        },
      },
    },
  }
});

