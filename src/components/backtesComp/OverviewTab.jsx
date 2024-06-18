import React from 'react';
import Chart from './Plotlychart2';

const OverviewTab = ({ data, plotEquity}) => {
  const finalEquity = data?.finalEquity ?? 'N/A';
  const trades = data?.trades ?? 'N/A';
  const winRate = data?.winRate ?? 'N/A';
  const profitFactor = data?.profitFactor ?? 'N/A';
  const maxDrawdown = data?.maxDrawdown ?? 'N/A';

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-row justify-between md:flex-wrap mb-2 md:mb-3">
          Final Equity: <span className="text-green-500 ml-1">${finalEquity}</span>
        </div>
        <div className="flex flex-row justify-between md:flex-wrap mb-2 md:mb-3 mr-2">
          Trades: <span className="text-yellow-400 ml-1">{trades}</span>
        </div>
        <div className="flex flex-row justify-between md:flex-wrap mb-2 md:mb-3">
          Win Rate: <span className="text-fuchsia-400 ml-1">{winRate}%</span>
        </div>
        <div className="flex flex-row justify-between md:flex-wrap mb-2 md:mb-3 mr-1">
          Profit Factor: <span className="text-lime-500 ml-1">{profitFactor}</span>
        </div>
        <div className="flex flex-row justify-between md:flex-wrap mb-3 md:mb-3"> 
          Max Drawdown: <span className="text-rose-400 ml-1">{maxDrawdown}%</span>
        </div>
      </div>
      <div>
      {plotEquity && <Chart plotData={plotEquity}/>}
      </div>
      
    </div>
  );
};

export default OverviewTab;
