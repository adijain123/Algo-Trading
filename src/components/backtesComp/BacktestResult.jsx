import React, { useState } from 'react';
import OverviewTab from './OverviewTab';
import PerformanceSummaryTab from './OverallSummaryTab';
import PropertiesTab from './PropertiesTab';

const TABS = ['Overview', 'Overall Summary', 'Properties'];

const BacktestResult = ({ result }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
 
  return (
    <div className="mt-8 md:w-3/4 mx-auto font-bold">
      <div className="text-2xl font-bold mb-4">Strategy: <span className="text-amber-400">{result.strategyName}</span> </div>

      <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 mb-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`p-2 mx-1 rounded ${activeTab === tab ? 'bg-blue-500' : 'bg-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 p-4 rounded">
        {activeTab === 'Overview' && <OverviewTab data={result.overview} />}
        {activeTab === 'Overall Summary' && <PerformanceSummaryTab data={result.performanceSummary} />}
        {activeTab === 'Properties' && <PropertiesTab data={result.properties} />}
      </div>
    </div>
  );
};

export default BacktestResult;
