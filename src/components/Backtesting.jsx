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
    <>
      <div className='md:flex md:flex-row'>
        {ohlc ? (
          <div className='md:w-4/5 mb-2'>
            <PlotlyChart3 ohlc={ohlc.ohlc} symbol={sym}/>
          </div>
        ) : (
          <div className='md:w-4/5 mb-2'>
            <PlotlyChart plotData={plot} result={result} />
          </div>
        )}

        
         <div className='md:w-1/5 mx-auto ml-2 my-4 md:my-0'>
          <BacktestForm onResult={handleResult} sym={sym}/>
        </div>
       

      </div>
      <BacktestResult result={result} />
    </>
  );
};

export default Backtesting;
