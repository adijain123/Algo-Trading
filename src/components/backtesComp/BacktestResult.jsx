import React, { useState } from 'react';
import OverviewTab from './OverviewTab';
import PerformanceSummaryTab from './OverallSummaryTab';
import PropertiesTab from './PropertiesTab';

const TABS = ['Overview', 'Overall Summary', 'Properties'];

const BacktestResult = ({ result }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const strategyName = result?.strategyName ?? 'N/A';
  const overview = result?.overview ?? null;
  const performanceSummary = result?.performanceSummary ?? null;
  const properties = result?.properties ?? null;
  const plotEquity = result?.plotEquity ?? null;

  return (
    <div className="w-full mx-auto">
    <div className="flex flex-col space-y-4">
      <div className="flex flex-wrap items-center mb-4">
        <div className="text-xl font-bold text-white mr-4">
          Strategy: <span className="text-blue-400">{strategyName}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                activeTab === tab 
                  ? 'bg-blue-800 text-white border border-blue-600 shadow-md' 
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-4 border border-blue-900">
        {activeTab === 'Overview' && <OverviewTab data={overview} plotEquity={plotEquity}/>}
        {activeTab === 'Overall Summary' && <PerformanceSummaryTab data={performanceSummary} />}
        {activeTab === 'Properties' && <PropertiesTab data={properties} />}
      </div>
    </div>
  </div>
  );
};

export default BacktestResult;
