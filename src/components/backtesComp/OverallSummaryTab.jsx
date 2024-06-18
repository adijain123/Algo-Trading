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
    <>
      <span className='font-normal m-4'>Overall performance summary</span>
      <div className="md:grid md:grid-cols-3 gap-4">
        <div className="space-y-2 m-3">
          <div>Exposure Time: <span className="text-yellow-500">{exposureTime}%</span></div>
          <div>Equity Final: <span className="text-purple-400">${equityFinal}</span></div>
          <div>Equity Peak: <span className="text-indigo-400">${equityPeak}</span></div>
          <div>Return: <span className="text-pink-500">{returnVal}%</span></div>
          <div>Buy and Hold Return: <span className="text-orange-500">{buyAndHoldReturn}%</span></div>
          <div>Return (Annualized): <span className="text-teal-500">{annualReturn}%</span></div>
          <div>Volatility (Annualized): <span className="text-blue-500">{annualVolatility}%</span></div>
        </div>
        <div className="space-y-2 m-3">
          <div>Sharpe Ratio: <span className="text-green-500">{sharpeRatio}</span></div>
          <div>Sortino Ratio: <span className="text-red-500">{sortinoRatio}</span></div>
          <div>Calmar Ratio: <span className="text-yellow-500">{calmarRatio}</span></div>
          <div>Max Drawdown: <span className="text-purple-500">{maxDrawdown}%</span></div>
          <div>Avg Drawdown: <span className="text-indigo-500">{avgDrawdown}%</span></div>
          <div>Trades: <span className="text-teal-500">{trades}</span></div>
          <div>Win Rate: <span className="text-blue-500">{winRate}%</span></div>  
        </div>
        <div className="space-y-2 m-3">
          <div>Expectancy: <span className="text-orange-500">{expectancy}%</span></div>
          <div>SQN: <span className="text-teal-500">{sqn}</span></div>
          <div>Best Trade: <span className="text-green-500">{bestTrade}%</span></div>
          <div>Worst Trade: <span className="text-red-500">{worstTrade}%</span></div>
          <div>Avg Trade: <span className="text-yellow-500">{avgTrade}%</span></div>
          <div>Profit Factor: <span className="text-pink-500">{profitFactor}</span></div>
        </div>
      </div>
    </>
  );
};

export default PerformanceSummaryTab;
