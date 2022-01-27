d3.csv('../../../../js/posts/dining-halls/theStudy_Sunday.csv').then(makeChart);
console.log('accessed bar chart')

function makeChart(csvData) {
  console.log(csvData);

  const timeIntervals = ["12:00AM", "12:30AM", "1:00AM", "1:30AM", "2:00AM", "2:30AM", "3:00AM", "3:30AM", "4:00AM", 
  "4:30AM", "5:00AM", "5:30AM", "6:00AM", "6:30AM", "7:00AM", "7:30AM", "8:00AM", "8:30AM", "9:00AM", "9:30AM",
  "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM",  "3:00PM", 
  "3:30PM", "4:00PM", "4:30PM", "5:00PM", "5:30PM", "6:00PM", "6:30PM", "7:00PM", "7:30PM", "8:00PM", "8:30PM", "9:00PM", 
  "9:30PM", "10:00PM", "10:30PM", "11:00PM", "11:30PM"];

  /*const csvFilePath= csvData;
  const csv=require('csvtojson')
  csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
    console.log(jsonObj);
  })

  // Async / await usage
  const jsonArray=await csv().fromFile(csvFilePath);*/

  var Converter = require("csvtojson").Converter;

  var converter = new Converter({});

  converter.fromFile(csvData,function(err,result){

      if(err){
          console.log("Error");
          console.log(err);  
      } 
      var jsonArray = result;

      //to check json
      console.log(data);
  });

  var realTimes = [];
  var realCount = [];

  for(let i = 0; i < jsonArray.length(); i++){
      var time = timeIntervals[jsonArray[i]["IntervalCategory"]];
      realTimes.push(parseInt(time));
      var swipeCount = jsonArray[i]["count"]/4;
      realCount.push(parseInt(swipeCount));
  }

  let data = {
    labels: realTimes,
    datasets: realCount,
  };

  let options = {
    title: {
      display: true,
      text: 'Busy-ness chart',
    },
    scales: {
      xAxes: [
        {
          stacked: false,
        },
      ],
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  };

  let ctx = document.getElementById('barChart');
  let barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
  });
}