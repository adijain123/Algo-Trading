import React, { useState } from 'react';
import BacktestForm from './backtesComp/BacktestForm';
import BacktestResult from './backtesComp/BacktestResult';
import PlotlyChart from '../components/PlotChart';


const Backtesting = () => {
  const [result, setResult] = useState(null);
  const [plot, setplot] = useState(null);
  

  const handleResult = (data) => {
    setResult(data);
    setplot(data.plot);
    setplotEquity(data.plotEquity);
  };

  return (
    <>
      <div className='md:flex md:flex-row'>
        <div className='md:w-4/5 mb-2'>
          <PlotlyChart plotData={plot} result={result}/>
        </div>
        <div className='md:w-1/5 mx-auto ml-2 my-4 md:my-0'>
          <BacktestForm onResult={handleResult} />
        </div>
      </div>
      <BacktestResult result={result} />
    </>
  );
};

export default Backtesting;
