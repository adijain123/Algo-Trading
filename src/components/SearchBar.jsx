import React, { useState } from 'react';
import data from '../../stock.json';
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = data.filter(item =>
        item.Name.toLowerCase().includes(value.toLowerCase()) ||
        item.Symbol.toLowerCase().includes(value.toLowerCase()) ||
        item.Exchange.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.Name);
    navigate('/backtesting')
    setSuggestions([]);
  };

  const LaunchChart = (symbol) =>{
     console.log(symbol);
     navigate('/backtesting')
  }
  const seeOverview = (symbol) =>{
    console.log(symbol);
    navigate('/backtesting')
  }

  return (
    <div className="p-4 md:p-0 text-center">
      <h2 className="text-2xl font-semibold mb-4">Search stocks here</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="eg: AAPL"
        className="p-2 border-2 border-neutral-500 text-black font-semibold rounded w-full max-w-3xl"
      />
    
      {suggestions.length > 0 && (
        <ul className="border border-gray-300 rounded text-black mx-auto max-w-3xl w-full max-h-60 overflow-y-auto bg-white font-semibold md:text-base text-sm">

             <li className="p-2 hover:bg-gray-300 border border-b-neutral-100 md:flex md:flex-row">
             <div className='md:ml-1 md:mr-20'>Symbol</div>  <div className='md:ml-32'>Company</div>
            </li>

          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-300 border border-b-neutral-100 md:flex md:flex-row justify-between"
            >
             <div className='text-blue-700 my-auto'>{suggestion.Symbol}</div> 
             <div className='text-gray-600 my-auto'>{suggestion.Name}</div>

            <div className='md:flex md:justify-between px-1'>
            <button onClick={()=>LaunchChart(suggestion.Symbol)} className="text-xs border border-gray-500 font-normal py-1 px-2 hover:bg-blue-600 hover:text-white rounded m-1">Launch chart</button>
            <button onClick={()=>seeOverview(suggestion.Symbol)} className="text-xs border border-gray-500 font-normal py-1 px-2 hover:bg-blue-600 hover:text-white rounded m-1">see overview</button>
            </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
