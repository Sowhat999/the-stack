const ctx = document.getElementById('privvspubbar');

const labels = ['2021', '2020', '2019', '2018', '2017']
const data = {
    labels: labels,
    datasets: [
        {
            label: 'State educational appropriations',
            data: [454, 536, 493, 448, 511],
            backgroundColor: 'rgba(50, 132, 191, 0.9)',
            stack: 'Stack 0',
        },
        {
            label: 'Government grants & contracts',
            data: [893, 803, 773, 743, 707],
            backgroundColor: 'rgba(50, 132, 191, 0.55)',
            stack: 'Stack 0',
        },
        {
            label: 'Private gifts',
            data: [405, 365, 367, 379, 308],
            backgroundColor: 'rgba(255, 210, 0, 0.9)',
            stack: 'Stack 1',
        },
        {
            label: 'Private industry grants & contracts',
            data: [295, 277, 276, 273, 241],
            backgroundColor: 'rgba(255, 210, 0, 0.4)',
            stack: 'Stack 1',
        },
    ]

}
const privvspubbar = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        plugins:{
            title:{
                display:true,
                text: 'Private and public revenue (2017 - 2021)'
            },
            tooltip: {
                callbacks: {
                    title: function(context) {
                        console.log(context[0].label);
                        return `Year: ${context[0].label}`;
                      },
                      label: function(context) {
                        return `$${context.parsed.x} million`;
                    }

                }

            }
        },
        responsive: true,
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                },
                stacked: true,
                title: {
                    display: true,
                    text: "Revenue in millions of dollars",
                    padding: 20,
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Year",
                    padding: 20,
                },
                beginAtZero: true,
                stacked: true,
            }
        },
        layout: {
            padding: 0
        },
        maintainAspectRatio: false,
        indexAxis: 'y',
        
    }
});



