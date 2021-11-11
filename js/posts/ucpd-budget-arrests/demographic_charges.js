console.log('loaded demographic charges chart')
d3.csv('/datasets/ucpd-budget-arrests/charge_category_race.csv').then(makeChargesChart);
function makeChargesChart(csvData) {
  //console.log(csvData);
  //const DemoChargeslabels = ['January', 'February','March','April','May','June'];
    let DemoChargesdata = {
    labels: [
        'CA Regs: Violate Curfew',
        'Driving Invalid License',
        'Fail to Appear After Written Promise',
        'False Identification to Specific Peace Officers',
        'Obstruct/Resist',
        'Outside Agency Infraction Warrant',
        'Threat',
        'Trespass',
        'UCPD Misdemeanor Bench Warrant',
        'Vandalism'
    ],
    datasets: [],
    };

    let colors = [
    '#374c80',
    '#7a5195',
    '#bc5090',
    '#ef5675',
    '#ff764a',
    '#ffa600',
    'green',
    'blue',
    'light blue',
    'purple'
    ];

    for (let i = 0; i < 6; i++) {
    DemoChargesdata.datasets.push({
        label: csvData[i].Race,
        data: Object.values(csvData[i]).slice(1),
        backgroundColor: colors[i],
        borderColor: colors[i],
    });
    }


    let ctxDemographicCharges = document.getElementById('demographic_charges');
    let Demographic_Charges = new Chart(ctxDemographicCharges, {
    type: 'horizontalBar',
    data: DemoChargesdata,
    options: {
        indexAxis: 'y',
        scales: {
            xAxes: [
                {
                    stacked: true,
                },
            ],
            yAxes: [
                {
                    stacked: true,
                },
            ],
            },
    },
    });
}
