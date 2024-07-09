import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../../../stock.json';

const BacktestForm = ({ onResult, sym }) => {
  const [strategy, setStrategy] = useState('');
  const [symbol, setSymbol] = useState(sym);
  const [timeframe, setTimeframe] = useState('');
  const [datefrom, setDatefrom] = useState('');
  const [dateto, setDateto] = useState('');
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

    // Convert date inputs to Unix timestamps
    const datefromTimestamp = Math.floor(new Date(datefrom).getTime() / 1000);
    const datetoTimestamp = Math.floor(new Date(dateto).getTime() / 1000);

    const payload = {
      strategy,
      symbol,
      timeframe,
      cash,
      datetimefrom: datefromTimestamp,
      datetimeto: datetoTimestamp,
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/backtest', payload);
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

  const maxDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  return (
    <div className='w-11/12 mx-auto'>
      {/* <h1 className='text-center font-bold mx-auto'>Backtesting Interface</h1> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-400">Strategy</label>
          <select
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className="bg-gray-900 text-white p-2 rounded w-full"
            required
          >
            <option value="">Select Strategy</option>
            <option value="SmaCross">SmaCross</option>
            <option value="BollingerBands">BollingerBands</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-400">Stock Symbol</label>
          <div className="relative"> {/* This will be the positioning context for the suggestions */}
          <input
          type="text"
          value={symbol}
          placeholder='eg: AAPL.NAS, GOOGL.NAS'
          onChange={(e) => {setSymbol(e.target.value);}}
          className="bg-gray-900 text-white p-2 rounded w-full"
          required
        />
        {showSuggestions && (
          <ul className="absolute bg-gray-800 text-white overflow-auto max-h-40 w-full mt-2 rounded shadow-md">
          {suggestions.map((stock, index) => (
           <li
            key={stock.Symbol}
            onClick={() => {
            setSymbol(stock.Symbol);
            setShowSuggestions(false);
          }}
          className="p-2 cursor-pointer hover:bg-gray-700"
        >
          {stock.Symbol} - {stock.Name} ({stock.Exchange})
        </li>
      ))}
    </ul>
  )}
</div>
        </div>
        <div>
          <label className="block text-gray-400">Period</label>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-gray-900 text-white p-2 rounded w-full"
            required
          >
            <option value="">Select Timeframe</option>
            <option value="1 minutes">1 minutes</option>
            <option value="5 minutes">5 minutes</option>
            <option value="15 minutes">15 minutes</option>
            <option value="30 minutes">30 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="1 day">1 day</option>
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-400">Amount to Backtest</label>
          <input
            type="number"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            placeholder="Enter amount in USD"
            className="bg-gray-900 text-white p-2 rounded w-full"
            step="1000"
            min="5000"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Date from</label>
          <input
            type="date"
            value={datefrom}
            onChange={(e) => setDatefrom(e.target.value)}
            className="bg-gray-300 text-black p-2 rounded w-full"
            max={maxDate}
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Date to</label>
          <input
            type="date"
            value={dateto}
            onChange={(e) => setDateto(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded w-full"
            max={maxDate}
            required
          />
        </div>

        <button type="submit" className="hover:bg-blue-900 border border-blue-600 p-2 rounded w-full mt-3">Backtest</button>
      </form>
    <>{ loading && <div className='text-center text-lg'>Loading....</div> }</>
    <>{ err && <div className='text-center text-red-600'>Error in fetching data</div> }</>
    </div>
  );
};

export default BacktestForm;
