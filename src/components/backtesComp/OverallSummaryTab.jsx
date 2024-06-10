import React from 'react';

const PerformanceSummaryTab = ({ data }) => {
  return (
    <>
    <span className='font-normal m-4'>Overall performance summary</span>
    <div class="md:grid md:grid-cols-3 gap-4 bg-gray-900">
        <div class="space-y-2 m-3">
            <div>Exposure Time: <span class="text-yellow-500">{data.exposureTime}%</span></div>
            <div>Equity Final: <span class="text-purple-400">${data.equityFinal}</span></div>
            <div>Equity Peak: <span class="text-indigo-400">${data.equityPeak}</span></div>
            <div>Return: <span class="text-pink-500">{data.return}%</span></div>
            <div>Buy and Hold Return: <span class="text-orange-500">{data.buyAndHoldReturn}%</span></div>
            <div>Return (Annualized): <span class="text-teal-500">{data.annualReturn}%</span></div>
            <div>Volatility (Annualized): <span class="text-blue-500">{data.annualVolatility}%</span></div>
            
        </div>
        <div class="space-y-2 m-3">
             <div>Sharpe Ratio: <span class="text-green-500">{data.sharpeRatio}</span></div>
            <div>Sortino Ratio: <span class="text-red-500">{data.sortinoRatio}</span></div>
            <div>Calmar Ratio: <span class="text-yellow-500">{data.calmarRatio}</span></div>
            <div>Max Drawdown: <span class="text-purple-500">{data.maxDrawdown}%</span></div>
            <div>Avg Drawdown: <span class="text-indigo-500">{data.avgDrawdown}%</span></div>
            <div>Trades: <span class="text-teal-500">{data.trades}</span></div>
            <div>Win Rate: <span class="text-blue-500">{data.winRate}%</span></div>  
        </div>
        <div class="space-y-2 m-3">
            <div>Expectancy: <span class="text-orange-500">{data.expectancy}%</span></div>
            <div>SQN: <span class="text-teal-500">{data.sqn}</span></div>
            <div>Best Trade: <span class="text-green-500">{data.bestTrade}%</span></div>
            <div>Worst Trade: <span class="text-red-500">{data.worstTrade}%</span></div>
            <div>Avg Trade: <span class="text-yellow-500">{data.avgTrade}%</span></div>
            <div>Profit Factor: <span class="text-pink-500">{data.profitFactor}</span></div>
           
        </div>
    </div>
    </>
  );
};

export default PerformanceSummaryTab;
