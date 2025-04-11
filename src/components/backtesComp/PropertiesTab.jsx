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
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-1 h-8 bg-blue-500 rounded"></div>
        <h3 className="text-xl font-bold text-blue-400">Strategy Properties</h3>
      </div>

      <div className="bg-gray-800 rounded-xl border border-blue-900/50 shadow-lg p-6 transition-all hover:shadow-blue-900/20 hover:border-blue-700/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div className="space-y-6">
            <h4 className="text-blue-400 font-medium mb-4 pb-2 border-b border-blue-900/30">Basic Information</h4>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">Initial Capital</span>
                <span className="text-blue-300 font-semibold text-lg">${initialCapital}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">Symbol Info</span>
                <span className="text-blue-300 font-semibold text-lg">{symbolInfo}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">Data Range</span>
                <span className="text-blue-300 font-semibold text-lg">{dataRange}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-blue-400 font-medium mb-4 pb-2 border-b border-blue-900/30">Time Frames</h4>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">Start Date</span>
                <span className="text-blue-300 font-semibold text-lg">{start}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">End Date</span>
                <span className="text-blue-300 font-semibold text-lg">{end}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm mb-1">Total Duration</span>
                <span className="text-blue-300 font-semibold text-lg">{duration}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-blue-900/30">
          <h4 className="text-blue-400 font-medium mb-4">Duration Metrics</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col">
              <span className="text-gray-400 text-sm mb-2">Max Drawdown Duration</span>
              <span className="text-blue-300 font-semibold">{maxDrawdownDuration}</span>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col">
              <span className="text-gray-400 text-sm mb-2">Avg Drawdown Duration</span>
              <span className="text-blue-300 font-semibold">{avgDrawdownDuration}</span>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col">
              <span className="text-gray-400 text-sm mb-2">Max Trade Duration</span>
              <span className="text-blue-300 font-semibold">{maxTradeDuration}</span>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col">
              <span className="text-gray-400 text-sm mb-2">Avg Trade Duration</span>
              <span className="text-blue-300 font-semibold">{avgTradeDuration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesTab;