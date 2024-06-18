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
    <div className="md:mx-3 mx-auto">
      <div className="flex flex-wrap md:space-y-0 md:space-x-1">
        
      <div className="text-lg md:text-xl mx-2 font-bold">
        Strategy: <span className="text-amber-400">{strategyName}</span>
      </div>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`px-2 md:mx-1 my-1 mx-2 border border-blue-600 rounded ${activeTab === tab ? 'bg-blue-900' : 'bg-gray-950'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className=" p-4 rounded">
        {activeTab === 'Overview' && <OverviewTab data={overview} plotEquity={plotEquity}/>}
        {activeTab === 'Overall Summary' && <PerformanceSummaryTab data={performanceSummary} />}
        {activeTab === 'Properties' && <PropertiesTab data={properties} />}
      </div>
    </div>
  );
};

export default BacktestResult;
