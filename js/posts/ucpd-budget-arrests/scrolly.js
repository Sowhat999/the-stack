//const { ChartLabel } = require("react-vis");

let scrolly = document.querySelector("#stick");
let article = scrolly.querySelector("article");
let step = article.querySelectorAll(".step");
let figure = article.querySelectorAll(".figure");
// initialize the scrollama
let scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }
    // console.log(response);
    // add to color to current step
    response.element.classList.add("is-active");
    // console.log(response.index);
    // console.log(response.direction);
    // let i;
    // if (window.matchMedia('(max-width: 480px)').matches){
    //     i = response.index+1;
    // }
    // else{
    //     i = response.index;
    // } 
    let i = response.index;
    if(response.direction === 'down'){
        if (i ===1){
            makeBudgetArrests();
            addData(0);
            changeOptions(0);
        }
        else if (i === 2){
            removeData();
            //myChart.destroy();
            //document.getElementById('myChart').id = 'stacked_bar';
            document.getElementById('BudgetStop').innerHTML = `<canvas id = stacked_bar></canvas> <p class = caption>UCPD’s annual budget from 2012 to 2019 was acquired through a CPRA. Values are given for fiscal years. The 2018-2019 data is a proposed budget, not yet approved. </p>`
            d3.csv('/datasets/ucpd-budget-arrests/ucla-pd-budget.csv').then(makeChart);
            //myChart = StackedBar
            //ChangeBar();
        }
        else if (i === 3){
            //ChangeLine();
            //StackedBar.destroy();
            document.getElementById('BudgetStop').innerHTML = '<canvas id = myChart></canvas> <p class = caption>The budget values shown here are per $100,000 to match them to the scale of stops and arrests for easier comparison. Stop and arrest data was collected via CPRA submitted to UCPD. </p>'
            // myChart = new Chart(ctx, {
            //     type: 'line',
            //     data: data,
            //     options: options1
            //     }
            // );
            makeBudgetArrests();
            changeOptions(1);
            addData(1);
        }
        else if (i ===4) {
            addData(2);
        }
        else if (i===5){
            addData(3)
        }
    }
}
    //console.log(response.element.attributes.data-step.value);

function handleStepExit(response) {
    // response = { element, direction, index }
    //console.log(response);
    // remove color from current step
    response.element.classList.remove("is-active");
    //removeData();
    if (response.direction === 'up'){
        removeData();
    }
}


function init() {
    //setupStickyfill();
    // set random padding for different step heights (not required)
    // step.forEach(function(step) {
    //     let v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
    //     step.style.padding = v + "px 0px";
    // });

    // 1. setup the scroller with the bare-bones options
    // 		this will also initialize trigger observations
    // 2. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
        step: "#stick article .step",
        debug: true,
        offset: 0.5
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);

    // 3. setup resize event
    window.addEventListener("resize", scroller.resize);
}

// kick things off
init();