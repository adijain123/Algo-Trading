import React, { useState, useEffect } from 'react';
import data from '../../stock.json';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const SearchBar = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [stock, setStock] = useState(null);
  const [sym, setSym] = useState(null);
  const [loading, setLoading] = useState(null);
  const [companyinfo, setCompanyinfo] = useState(null);

  useEffect(() => {
    if (stock) {
      setLoading(null)
      navigate('/backtesting', { state: { stock, sym } });
    }
  }, [stock, sym, navigate]);

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


  const LaunchChart = async(suggestion) =>{
    setLoading("loading")
    setQuery(suggestion.Name);
    setSuggestions([]);
    const symbol = suggestion.Symbol
    try {
      const response = await axios.post('http://127.0.0.1:5000/liveChart', {symbol});
      setStock(response.data)
      setSym(symbol)
    } catch (error) {
      console.error('Error fetching backtest data', error);
    }
    
  }

  const seeOverview = async(suggestion) =>{
    setLoading("loading")
    setQuery(suggestion.Name);
    setSuggestions([]);
    const symbol1 = suggestion.Symbol.split('.')[0];
    try {
      const response = await axios.post('http://127.0.0.1:5000/companyinfo', {symbol1});
      setCompanyinfo(response.data)
      setLoading(null)
    } catch (error) {
      console.error('Error fetching backtest data', error);
    }
    console.log(symbol1);
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
        <ul className=" border border-gray-300 rounded text-black mx-auto max-w-3xl w-full max-h-60 overflow-y-auto bg-white font-semibold md:text-base text-sm">

             <li className="p-2 hover:bg-gray-300 border border-b-neutral-100 md:flex md:flex-row">
             <div className='md:ml-1 md:mr-20'>Symbol</div>  <div className='md:ml-32'>Company</div>
            </li>

          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => LaunchChart(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-300 border border-b-neutral-100 md:flex md:flex-row justify-between"
            >
             <div className='text-blue-700 my-auto'>{suggestion.Symbol}</div> 
             <div className='text-gray-600 my-auto'>{suggestion.Name}</div>

            <div className='md:flex md:justify-between px-1'>
            <button className="text-xs border border-gray-500 font-normal py-1 px-2 hover:bg-blue-600 hover:text-white rounded m-1">Launch chart</button>
            <button   onClick={(event) => {event.stopPropagation(); seeOverview(suggestion)}}className="text-xs border border-gray-500 font-normal py-1 px-2 hover:bg-blue-600 hover:text-white rounded m-1">see overview</button>
            </div>
            </li>
          ))}
        </ul>
      )}
    {loading && <div className='text-3xl text-yellow-300'>Loading....</div>}

    {companyinfo && 
      <div className='bg-gray-950 w-full max-w-3xl mx-auto'>
        <h1 className='text-3xl mb-3'>{companyinfo.name}</h1>
        <table className='mx-auto md:w-11/12 text-justify border'>
      <tbody>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Country</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'>{companyinfo.country}</td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Currency</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'>{companyinfo.currency}</td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Exchange</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'>{companyinfo.exchange}</td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>IPO</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'>{companyinfo.ipo}</td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Market Capitalization</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'>${companyinfo.marketCapitalization}</td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Phone</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'>{companyinfo.phone}</td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Share Outstanding</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'>{companyinfo.shareOutstanding}</td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Ticker</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'>{companyinfo.ticker}</td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Web URL</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'><a href={companyinfo.weburl} target='_blank' rel='noopener noreferrer' className=' hover:text-red-400'>{companyinfo.weburl}</a></td>
        </tr>
        <tr>
          <td className='w-1/4 border border-yellow-900 p-2'>Logo</td>
          <td className='w-3/4 border border-yellow-900 p-2 whitespace-normal break-all'><a href={companyinfo.logo} target='_blank' rel='noopener noreferrer' className='hover:text-red-400'>{companyinfo.logo}</a></td>
        </tr>
      </tbody>
    </table>
      </div>}
    </div>
  );
};

export default SearchBar;
