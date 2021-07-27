new Chart(document.getElementById("before-covid-pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Letter Grades", "Pass/No Pass"],
      datasets: [{
        label: "Before",
        backgroundColor: ['#77b1d2','#CFCFC4'],
        data: [153028,7781]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'During On-Campus Learning',
        fontSize: 19
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: ['grey','grey'],
          precision: 1,
          position: 'outside',
          textMargin: 7,
          fontSize: 17,
          //outsidePadding: 100,
          //rotation: [160,160]
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
        backgroundColor: ['#77b1d2','#CFCFC4'],
        data: [156343,12780]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'During Online Learning',
        fontSize: 19
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: ['grey','grey'],
          precision: 1,
          position: 'outside',
          fontSize: 17,
          textMargin: 7,
          //outsidePadding: 100,
          //rotate: [60,60]
        }
      }
    }
});

