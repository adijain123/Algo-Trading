import React from 'react';
import Chart from './Plotlychart2';

const OverviewTab = ({ data, plotEquity }) => {
  const finalEquity = data?.finalEquity ?? 'N/A';
  const trades = data?.trades ?? 'N/A';
  const winRate = data?.winRate ?? 'N/A';
  const profitFactor = data?.profitFactor ?? 'N/A';
  const maxDrawdown = data?.maxDrawdown ?? 'N/A';

  return (
    <div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-blue-900 p-4 rounded-lg border border-blue-700 shadow-md">
            <div className="text-blue-200 text-sm">Final Equity</div>
            <div className="text-blue-100 text-xl font-bold">${finalEquity}</div>
          </div>
          
          <div className="bg-blue-900 p-4 rounded-lg border border-blue-700 shadow-md">
            <div className="text-blue-200 text-sm">Trades</div>
            <div className="text-blue-100 text-xl font-bold">{trades}</div>
          </div>
          
          <div className="bg-blue-900 p-4 rounded-lg border border-blue-700 shadow-md">
            <div className="text-blue-200 text-sm">Win Rate</div>
            <div className="text-blue-100 text-xl font-bold">{winRate}%</div>
          </div>
          
          <div className="bg-blue-900 p-4 rounded-lg border border-blue-700 shadow-md">
            <div className="text-blue-200 text-sm">Profit Factor</div>
            <div className="text-blue-100 text-xl font-bold">{profitFactor}</div>
          </div>
          
          <div className="bg-blue-900 p-4 rounded-lg border border-blue-700 shadow-md">
            <div className="text-blue-200 text-sm">Max Drawdown</div>
            <div className="text-blue-100 text-xl font-bold">{maxDrawdown}%</div>
          </div>
        </div>
        
        <div className="bg-blue-900 p-4 rounded-lg border border-blue-700 shadow-md">
          <h2 className="text-blue-100 text-lg font-semibold mb-4">Equity Graph-</h2>
          {plotEquity && <Chart plotData={plotEquity}/>}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;