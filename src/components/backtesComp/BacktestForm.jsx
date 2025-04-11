import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../../../stock.json';

const BacktestForm = ({ onResult, sym }) => {
  const [strategy, setStrategy] = useState('');
  const [symbol, setSymbol] = useState(sym);
  const [period, setPeriod] = useState('');
  const [cash, setCash] = useState(5000); // default value set to 5000
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (symbol) {
      const filteredSuggestions = data.filter((stock) =>
        stock.Symbol.toLowerCase().startsWith(symbol.toLowerCase()) ||
        stock.Name.toLowerCase().startsWith(symbol.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [symbol]);

  const handleSubmit = async (e) => {
    setLoading(true)
    setErr(false)
    e.preventDefault();
    const sym = symbol.split('.')[0]

    const payload = {
      strategy,
      sym,
      cash,
      period
    };

    try {
      const response = await axios.post('https://quant-flask-backend.onrender.com/api/backtest', payload);
      onResult(response.data);
      if(response){
        setLoading(false);
        setErr(false)
      }
    } 
    catch (error) {
      setLoading(false)
      setErr(true)
      if(error.response.status==500){
        alert(`Date range is too high for selected timeframe \n Usually occurs for timeframe less than 1 day`)
      }
      console.error('Error fetching backtest data', error);
    }
  };

  return (
    <div className="w-full mx-auto">
  <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">Strategy Configuration</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-blue-300 mb-1 text-sm font-medium">Strategy</label>
      <select
        value={strategy}
        onChange={(e) => setStrategy(e.target.value)}
        className="bg-gray-800 text-white p-2 rounded-md w-full border border-blue-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        required
      >
        <option value="">Select Strategy</option>
        <option value="SmaCross">SmaCross</option>
        <option value="BollingerBands">BollingerBands</option>
      </select>
    </div>

    <div>
      <label className="block text-blue-300 mb-1 text-sm font-medium">Stock Symbol</label>
      <div className="relative">
        <input
          type="text"
          value={symbol}
          placeholder="eg: AAPL.NAS, GOOGL.NAS"
          onChange={(e) => {setSymbol(e.target.value);}}
          className="bg-gray-800 text-white p-2 rounded-md w-full border border-blue-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
        />
        {showSuggestions && (
          <ul className="absolute bg-gray-800 text-white overflow-auto max-h-40 w-full mt-1 rounded-md shadow-lg border border-blue-900 z-10">
            {suggestions.map((stock) => (
              <li
                key={stock.Symbol}
                onClick={() => {
                  setSymbol(stock.Symbol);
                  setShowSuggestions(false);
                }}
                className="p-2 cursor-pointer hover:bg-blue-900 border-b border-gray-700 last:border-b-0"
              >
                {stock.Symbol} - {stock.Name} ({stock.Exchange})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    
    <div>
      <label className="block text-blue-300 mb-1 text-sm font-medium">Period</label>
      <select
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className="bg-gray-800 text-white p-2 rounded-md w-full border border-blue-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        required
      >
        <option value="">Select Period</option>
        <option value="1mo">3 month</option>
        <option value="6mo">6 month</option>
        <option value="1y">1 year</option>
        <option value="2y">2 year</option>
        <option value="5y">5 year</option>
        <option value="10y">10 year</option>
        <option value="ytd">ytd</option>
        <option value="max">max</option>
      </select>
    </div>
    
    <div>
      <label className="block text-blue-300 mb-1 text-sm font-medium">Amount to Backtest</label>
      <input
        type="number"
        value={cash}
        onChange={(e) => setCash(e.target.value)}
        placeholder="Enter amount in USD"
        className="bg-gray-800 text-white p-2 rounded-md w-full border border-blue-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        step="1000"
        min="5000"
        required
      />
    </div>

    <button 
      type="submit" 
      className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md w-full transition-colors duration-300 border border-blue-600 shadow-md"
    >
      Run Backtest
    </button>
  </form>
  
  {loading && <div className="text-center text-blue-400 mt-4 animate-pulse">Processing...</div>}
  {err && <div className="text-center text-red-500 mt-4">Error in fetching data</div>}
</div>
  );
};

export default BacktestForm;
