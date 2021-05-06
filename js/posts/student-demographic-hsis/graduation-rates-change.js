window.onload = function () {

    let ctx2 = document.getElementById('grad-rate-change').getContext("2d");
    //let ctx2 = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'Los Angeles',
                fill: false,
                borderColor: '#3284BF',
                backgroundColor: '#3284BF',
                lineTension: 0,
                data: [0.00, 2.40, -1.70, -0.20, 2.70, 1.30, 1.20, 0.60, 1.60],
            }, {

                label: 'Irvine',
                fill: false,
                borderColor: '#FFD200',
                backgroundColor: '#FFD200',
                lineTension: 0,
                data: [0.00, -0.30, -0.90, 2.70, 4.50, 0.70, -1.80, -3.40, -0.70],
                hidden: true,

            }, {

                label: 'Santa Barbara',
                fill: false,
                borderColor: '#004D9F',
                backgroundColor: '#004D9F',
                lineTension: 0,
                data: [0.00, 0.20, 2.40, 5.00, 4.50, 6.30, 3.50, 5.10, 7.60],
                hidden: true,

            }, {

                label: 'Merced',
                fill: false,
                borderColor: '#0091B3',
                backgroundColor: '#0091B3',
                lineTension: 0,
                data: [0.00, 4.20, 6.60, 7.80, 12.50, 9.10, 3.00, 9.00, 13.30],
                hidden: true,


            }, {

                label: 'Riverside',
                fill: false,
                borderColor: '#add8e6',
                backgroundColor: '#add8e6',
                lineTension: 0,
                data: [0.00, -7.20, -2.70, 1.10, 4.40, 5.00, 7.70, 9.70, 9.50],
                hidden: true,

            }, {

                label: 'Santa Cruz',
                fill: false,
                borderColor: '#f29813',
                backgroundColor: '#f29813',
                lineTension: 0,
                data: [0.00, -2.00, -4.10, -0.30, 3.20, 1.60, 1.70, -1.70, 0.60],
                hidden: true,

            }],


        },

        options: {
            title: {
                display: true,
                text: 'Comparing UCLA and Designated UC HSIs Change in Hispanic Graduation Rates Since 2011'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value) {
                          return (value ) + '%'; // convert it to percentage
                        },
                        min: -15,
                    max: 15,
                    stepSize: 3,
                },
    
                    scaleLabel: {
                        display: true,
                        labelString: 'Change in Hispanic Graduation Rate since 2011'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Year'
                    }
                }],
                tooltips: {
                    intersect: true,
                    displayColors: true,
                    callbacks: {
                        label: function (tooltipItem, chart) {
                            return (tooltipItem.yLabel) + '%'; // convert it to percentage
                        },
                    },
                },
            }

        }
    },
    );
}
if (window.matchMedia('(max-width: 480px)').matches) {
    linechart.canvas.style = 'max-height:300px';
    linechart.options.maintainAspectRatio = false;
    linechart.update();
}






