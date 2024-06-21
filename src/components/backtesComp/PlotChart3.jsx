import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';

const PlotlyChart3 = ({ohlc, symbol}) => {
  
  useEffect(() => {
    // Any side effects based on `ohlc` can be handled here
  }, [ohlc]);

  const plotData = [
    {
      x: ohlc.map(data => data.time.slice(5,12)),
      close: ohlc.map(data => data.Close),
      decreasing: { line: { color: 'red' } },
      high: ohlc.map(data => data.High),
      increasing: { line: { color: 'green' } },
      low: ohlc.map(data => data.Low),
      open: ohlc.map(data => data.Open),
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y',
    }
  ];

  const layout = {
    title: {
      text: symbol+" (2024)",
      font: {
        size: 24,  // Increase the font size
        weight: 'bold',  // Make the title bold
      },
    },
    dragmode: 'zoom',
    showlegend: true,
    legend: {
      orientation: 'w',
      y: -0.15, // Move the legend below the plot area
    },
    xaxis: {
      title: 'Time',
      rangeslider: {
        visible: false,
      },
      gridcolor: '',    // grid line color
      zerolinecolor: '#444444', // zero line color
      tickfont: {
        size: 11,  // Adjust x-axis label font size
      }
    },
    yaxis: {
      title: 'Price',
      gridcolor: '#444444',    // grid line color
      zerolinecolor: '#444444' // zero line color
    },
    margin: {
      t: 40,  // Adjust top margin to position plot area below title
    },
    paper_bgcolor: '000000',  // background color
    plot_bgcolor: '000000',   // plot area background color
    font: {
      color: '#ffffff'         // text color
    },
  };

  const config = {
    displayModeBar: true,
    modeBarButtonsToRemove: ['toImage', 'toggleSpikelines'],
    displaylogo: false,
  };

  return (
    <Plot
      data={plotData}
      layout={layout}
      useResizeHandler
      style={{ width: '100%', height: '100%' }}
      config={{displayModeBar: true}}  
    />
  );  
};

export default PlotlyChart3;
