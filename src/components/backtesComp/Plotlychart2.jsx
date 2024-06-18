// PlotlyChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const Chart = ({ plotData }) => {
  const parsedPlotData = JSON.parse(plotData);
  //console.log(typeof(parsedPlotData.data))
  // console.log(parsedPlotData.data)

const layout = {
    
  dragmode: 'zoom',
  showlegend: true,
  
  xaxis: {
      title: 'Time',
      rangeslider: {
      visible: false,
    },
    gridcolor: '',    // grid line color
    zerolinecolor: '#444444', // zero line color
  },
  yaxis: {
    title: 'Equity',
    gridcolor: '#444444',    // grid line color
    zerolinecolor: '#444444', // zero line color
  },
  margin: {
    t: 0,  // Adjust top margin to position plot area below title
  },
  paper_bgcolor:'000000',  // background color
  plot_bgcolor: '000000',   // plot area background color
  font: {
    color: '#ffffff'         // text color
  },
};

  return (
    <Plot
      data={parsedPlotData.data}
      layout={layout}
      useResizeHandler
      style={{ width: '100%', height: '100%' }}
      config={parsedPlotData.config && {displayModeBar: true}}
    />
  );
};

export default Chart;
