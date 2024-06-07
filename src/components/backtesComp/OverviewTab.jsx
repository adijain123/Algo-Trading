import React from 'react';

const OverviewTab = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-row justify-between md:flex-wrap mb-2 md:mb-3">
    Final Equity: <span className="text-green-500 ml-1">${data.finalEquity}</span>
     </div>

  <div className="flex flex-row justify-between md:flex-wrap mb-2 md:mb-3 mr-2">
    Trades: <span className="text-yellow-400 ml-1">{data.trades}</span>
  </div>
  <div className="flex flex-row justify-between md:flex-wrap mb-2 md:mb-3">
    Win Rate: <span className="text-fuchsia-400 ml-1">{data.winRate}%</span>
  </div>
  <div className="flex flex-row justify-between md:flex-wrap mb-2 md:mb-3 mr-1">
    Profit Factor: <span className='text-lime-500 ml-1'>{data.profitFactor}</span>
  </div>
  <div className="flex flex-row justify-between md:flex-wrap mb-3 md:mb-3"> 
    Max Drawdown: <span className='text-rose-400 ml-1'>{data.maxDrawdown}%</span>
  </div>
</div>
<div className="h-64 bg-gray-900">Graph Placeholder</div>
    </div>
  );
};

export default OverviewTab;
