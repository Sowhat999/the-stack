anychart.onDocumentReady(function () {
  // set the data
  var ArrestRaceDemographics = [
    { x: "White", value: 1163 },
    { x: "Black or African American", value: 1012 },
    { x: "Hispanic", value: 708 },
    { x: "Asian and Pacific Islander", value: 126 },
    { x: "American Indian and Alaska Native", value: 5 },
    { x: "Other", value: 221 },
    { x: "Uknown", value: 0 }
  ];

  // create the chart
  var racechart = anychart.pie();

  // set the chart title
  racechart.title("Arrests by Race");

  // add the data
  racechart.data(ArrestRaceDemographics);

  // display the chart in the container
  racechart.container('demographics-piechart');
  racechart.draw();

});

anychart.onDocumentReady(function () {
  // set the data
  var ArrestGenderDemographics = [
    { x: "Female", value: 388 },
    { x: "Male", value: 2850 },
    { x: "Other", value: 0 },
  ];

  // create the chart
  var genderchart = anychart.pie();

  // set the chart title
  genderchart.title("Arrests by Gender");

  // add the data
  genderchart.data(ArrestGenderDemographics);

  // display the chart in the container
  genderchart.container('demographics-piechart');
  genderchart.draw();

});