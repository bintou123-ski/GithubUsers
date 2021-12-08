import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const ChartComponent = ()=>{
  const chartConfigs = {
    type: 'doughnut2d',
    width: "100%",
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Stars per languages",
        "theme": "candy",
        "decimals":0,
      },
     "data": [
        {
          "label": "HTML",
          "value": "23"
        },
        {
          "label": "CSS",
          "value": "33"
        },
        {
          "label": "JavaScript",
          "value": "80"
        },
      ]
    },
  };
  return <ReactFC {...chartConfigs} />;
}

ReactDOM.render(
  <ChartComponent />,
  document.getElementById('root'),
);

export default ChartComponent;