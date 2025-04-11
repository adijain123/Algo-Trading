import React from 'react';

const PerformanceSummaryTab = ({ data }) => {
  const exposureTime = data?.exposureTime ?? 'N/A';
  const equityFinal = data?.equityFinal ?? 'N/A';
  const equityPeak = data?.equityPeak ?? 'N/A';
  const returnVal = data?.return ?? 'N/A';
  const buyAndHoldReturn = data?.buyAndHoldReturn ?? 'N/A';
  const annualReturn = data?.annualReturn ?? 'N/A';
  const annualVolatility = data?.annualVolatility ?? 'N/A';
  const sharpeRatio = data?.sharpeRatio ?? 'N/A';
  const sortinoRatio = data?.sortinoRatio ?? 'N/A';
  const calmarRatio = data?.calmarRatio ?? 'N/A';
  const maxDrawdown = data?.maxDrawdown ?? 'N/A';
  const avgDrawdown = data?.avgDrawdown ?? 'N/A';
  const trades = data?.trades ?? 'N/A';
  const winRate = data?.winRate ?? 'N/A';
  const expectancy = data?.expectancy ?? 'N/A';
  const sqn = data?.sqn ?? 'N/A';
  const bestTrade = data?.bestTrade ?? 'N/A';
  const worstTrade = data?.worstTrade ?? 'N/A';
  const avgTrade = data?.avgTrade ?? 'N/A';
  const profitFactor = data?.profitFactor ?? 'N/A';

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-1 h-8 bg-blue-500 rounded"></div>
        <h3 className="text-xl font-bold text-blue-400">Performance Summary</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl border border-blue-900/50 shadow-lg transition-all hover:shadow-blue-900/20 hover:border-blue-700/50">
          <h4 className="text-blue-400 font-medium mb-4 pb-2 border-b border-blue-900/30">Key Metrics</h4>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Exposure Time</span>
              <span className="text-purple-300 font-semibold">{exposureTime}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Equity Final</span>
              <span className="text-purple-300 font-semibold">${equityFinal}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Equity Peak</span>
              <span className="text-purple-300 font-semibold">${equityPeak}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Return</span>
              <span className="text-purple-300 font-semibold">{returnVal}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Buy and Hold Return</span>
              <span className="text-purple-300 font-semibold">{buyAndHoldReturn}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Return (Annualized)</span>
              <span className="text-purple-300 font-semibold">{annualReturn}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Volatility (Annualized)</span>
              <span className="text-purple-300 font-semibold">{annualVolatility}%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl border border-blue-900/50 shadow-lg transition-all hover:shadow-blue-900/20 hover:border-blue-700/50">
          <h4 className="text-blue-400 font-medium mb-4 pb-2 border-b border-blue-900/30">Risk Analysis</h4>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Sharpe Ratio</span>
              <span className="text-purple-300 font-semibold">{sharpeRatio}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Sortino Ratio</span>
              <span className="text-purple-300 font-semibold">{sortinoRatio}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Calmar Ratio</span>
              <span className="text-purple-300 font-semibold">{calmarRatio}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Max Drawdown</span>
              <span className="text-purple-300 font-semibold">{maxDrawdown}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Avg Drawdown</span>
              <span className="text-purple-300 font-semibold">{avgDrawdown}%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl border border-blue-900/50 shadow-lg transition-all hover:shadow-blue-900/20 hover:border-blue-700/50">
          <h4 className="text-blue-400 font-medium mb-4 pb-2 border-b border-blue-900/30">Trade Statistics</h4>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Total Trades</span>
              <span className="text-purple-300 font-semibold">{trades}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Win Rate</span>
              <span className="text-purple-300 font-semibold">{winRate}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Best Trade</span>
              <span className="text-purple-300 font-semibold">{bestTrade}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Worst Trade</span>
              <span className="text-purple-300 font-semibold">{worstTrade}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Avg Trade</span>
              <span className="text-purple-300 font-semibold">{avgTrade}%</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Profit Factor</span>
              <span className="text-purple-300 font-semibold">{profitFactor}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSummaryTab;