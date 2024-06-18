import React from 'react';

const PropertiesTab = ({ data }) => {
  const initialCapital = data?.initialCapital ?? 'N/A';
  const dataRange = data?.dataRange ?? 'N/A';
  const symbolInfo = data?.symbolInfo ?? 'N/A';
  const start = data?.start ?? 'N/A';
  const end = data?.end ?? 'N/A';
  const duration = data?.duration ?? 'N/A';
  const maxDrawdownDuration = data?.maxDrawdownDuration ?? 'N/A';
  const avgDrawdownDuration = data?.avgDrawdownDuration ?? 'N/A';
  const maxTradeDuration = data?.maxTradeDuration ?? 'N/A';
  const avgTradeDuration = data?.avgTradeDuration ?? 'N/A';

  return (
    <div className='p-5'>
      <div>Initial Capital: <span className="text-green-400">${initialCapital}</span></div>
      <div>Data Range: <span className="text-amber-200">{dataRange}</span></div>
      <div>Symbol Info: <span className="text-rose-400">{symbolInfo}</span></div>
      <div>Start: <span className="text-blue-400">{start}</span></div>
      <div>End: <span className="text-green-400">{end}</span></div>
      <div>Duration: <span className="text-amber-400">{duration}</span></div>
      <div>Max Drawdown Duration: <span className="text-pink-500">{maxDrawdownDuration}</span></div>
      <div>Avg Drawdown Duration: <span className="text-orange-500">{avgDrawdownDuration}</span></div>
      <div>Max Trade Duration: <span className="text-purple-500">{maxTradeDuration}</span></div>
      <div>Avg Trade Duration: <span className="text-indigo-500">{avgTradeDuration}</span></div>
    </div>
  );
};

export default PropertiesTab;
