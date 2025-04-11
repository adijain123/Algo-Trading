import React, { useState } from 'react';
import BacktestForm from './backtesComp/BacktestForm';
import BacktestResult from './backtesComp/BacktestResult';
import PlotlyChart from '../components/PlotChart';
import PlotlyChart3 from '../components/backtesComp/PlotChart3';
import { useLocation } from 'react-router-dom';

const Backtesting = () => {
  const [result, setResult] = useState(null);
  const [plot, setPlot] = useState(null);
  
  const location = useLocation();
  const stock = location.state?.stock;
  const sym = location.state?.sym;

  const [ohlc, setOhlc] = useState(stock);

  const handleResult = (data) => {
    setOhlc(null);
    setResult(data);
    setPlot(data.plot);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-8 px-4 sm:px-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Backtesting Engine
          </h1>
          <p className="text-blue-300 mt-2 text-sm">
            Test your trading strategies with historical market data
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Chart Section */}
          <div className="lg:w-4/5 order-2 lg:order-1">
            <div className="bg-gray-800/70 backdrop-blur rounded-xl shadow-xl border border-blue-900/50 overflow-hidden mb-6 h-[600px] transition duration-500 ease-in-out hover:shadow-blue-900/30 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-900/40 to-gray-800/40 py-3 px-4 border-b border-blue-900/30">
                <h2 className="text-lg font-medium text-blue-100">
                  {ohlc ? `Chart: ${sym || 'Loading...'}` : 'Strategy Performance'}
                </h2>
              </div>
              <div className="p-2 h-[550px]">
                {ohlc ? (
                  <PlotlyChart3 ohlc={ohlc.ohlc} symbol={sym}/>
                ) : (
                  <PlotlyChart plotData={plot} result={result} />
                )}
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="lg:w-1/5 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="bg-gray-800/80 backdrop-blur rounded-xl shadow-xl border border-blue-900/50 transition duration-500 ease-in-out hover:shadow-blue-900/30 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-900/40 to-gray-800/40 py-3 px-4 border-b border-blue-900/30">
                <h2 className="text-lg font-medium text-blue-100">Strategy Parameters</h2>
              </div>
              <div className="p-4">
                <BacktestForm onResult={handleResult} sym={sym}/>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
       
          <div className="mt-8">
            <div className="bg-gray-800/80 backdrop-blur rounded-xl shadow-xl border border-blue-900/50 transition duration-500 ease-in-out hover:shadow-blue-900/30 hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-900/40 to-gray-800/40 py-3 px-4 border-b border-blue-900/30">
                <h2 className="text-lg font-medium text-blue-100">Backtest Results (backest to get actual data)</h2>
              </div>
              <div className="p-6">
                <BacktestResult result={result} />
              </div>
            </div>
          </div>
        
        {/* Footer note */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>For educational purposes only. Past performance is not indicative of future results.</p>
        </div>
      </div>
    </div>
  );
};

export default Backtesting;