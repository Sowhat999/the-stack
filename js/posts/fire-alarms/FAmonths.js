const ctt = document.getElementById('FAmonths');
const FAmonths = new Chart(ctt, {
    type: 'bar',
    data: {
        labels: ['Jan-18', 'Feb-18', 'Mar-18', 'Apr-18', 'May-18', 'June-18', 'July-18', 'Aug-18', 'Sep-18', 'Oct-18', 'Nov-18', 'Dec-18', 'Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'June-19', 'July-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19', 'Jan-20', 'Feb-20', 'Mar-20', 'Apr-20', 'May-20', 'June-20', 'July-20', 'Aug-20', 'Sep-20', 'Oct-20', 'Nov-20', 'Dec-20', 'Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'June-21', 'July-21', 'Aug-21', 'Sep-21', 'Oct-21', 'Nov-21', 'Dec-21', 'Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'June-22', 'July-22', 'Aug-22', 'Sep-22', 'Oct-22', 'Nov-22', 'Dec-22'],
        datasets: [{
            label: '# of Fire Alarms',
            data: [38,27,43,41,30,57,47,48,46,52,52,50,69,48,39,26,42,39,38,37,47,44,31,32,33,43,47,33,41,48,44,41,41,36,32,20,25,35,32,34,28,23,34,30,42,45,41,48,40,33,38,33,31,36,53,58,56,65,71,49],
            backgroundColor: 'rgba(255, 132, 17, .8)',
            borderColor: 'rgba(255, 132, 17, .8)',
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                onClick: null
            }
        }
    }
});
