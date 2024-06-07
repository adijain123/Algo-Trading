import React, { useState } from 'react';
import BacktestForm from './backtesComp/BacktestForm';
import BacktestResult from './backtesComp/BacktestResult';

const Backtesting = () => {
  const [result, setResult] = useState(null);

  const handleResult = (data) => {
    setResult(data);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl text-center mx-auto md:w-3/4 font-bold mb-8">Backtesting Interface</h1>
      <BacktestForm onResult={handleResult} />
      {result && <BacktestResult result={result} />}
    </div>
  );
};

export default Backtesting;
