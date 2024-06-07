import React, { useState } from 'react';
import axios from 'axios';

const BacktestForm = ({ onResult }) => {
  const [strategy, setStrategy] = useState('');
  const [symbol, setSymbol] = useState('');
  const [period, setPeriod] = useState('');
  const [noResult, setnoResult] = useState(null);
  const [beforeResult, setbeforeResult] = useState(1);

  const handleSubmit = async (e) => {
    setbeforeResult(null)
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/backtest', { strategy, symbol, period });
      onResult(response.data);
    } catch (error) {
      setnoResult(1)
      console.error('Error fetching backtest data', error);
    }
  };

  return (
    <div className="md:w-3/4 mx-auto">
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto md:w-1/2">
      <div>
        <label className="block text-gray-400">Strategy</label>
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded w-full"
          required
        >
          <option value="">Select Strategy</option>
          <option value="SmaCross">SmaCross</option>
          <option value="BollingerBands">BollingerBands</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-400">Stock Symbol</label>
        <input
          type="text"
          value={symbol}
          placeholder='eg: AAPL, GOOGL, AMZN, MSFT, TSLA, META etc'
          onChange={(e) => setSymbol(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-gray-400">Period</label>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded w-full"
          required
        >
          <option value="">Select Period</option>
          <option value="1d">1d</option>
          <option value="5d">5d</option>
          <option value="1mo">1mo</option>
          <option value="3mo">3mo</option>
          <option value="6mo">6mo</option>
          <option value="1y">1y</option>
          <option value="2y">2y</option>
          <option value="5y">5y</option>
          <option value="10y">10y</option>
          <option value="ytd">YTD</option>
          <option value="max">Max</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 p-2 rounded w-full">Backtest</button>
    </form>
    <h1 className='text-center text-xl italic mt-4'>" It is far better to foresee even without certainty than not to foresee at all " <br /> — Henri Poincare </h1>
    {beforeResult && 
            <>
          <h1 className="text-center md:text-3xl text-2xl lg:text-5xl mt-6 font-bold text-amber-200">Searching for the Best Results <br /> Start Backtesting . . . .</h1>
          </>
    }
    {noResult && 
          <h1 className="text-center md:text-3xl text-2xl lg:text-5xl mt-12 font-bold text-lime-300">OOPs Backend Server Error </h1>
    }
    </div>
  );
};

export default BacktestForm;
