import React, { useEffect, useRef, useState } from 'react';

const StockTicker = () => {
  const [stocks, setStocks] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading', 'success', 'error'
  const tickerRef = useRef(null);
  const animationRef = useRef(null);

  const loadData = async () => {
    try {
      setStatus('loading');
      let response = await fetch("https://algotrading-apewaubbe4g8h9gx.eastasia-01.azurewebsites.net/stockdata", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      setStocks(data);
      setStatus('success');
    } catch (error) {
      console.error('Failed to fetch stock data:', error);
      setStatus('error');
    }
  };

  useEffect(() => {
    loadData();
    
    // Refresh data every 5 minutes
    const intervalId = setInterval(loadData, 5 * 60 * 1000);
    
    return () => {
      clearInterval(intervalId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (stocks.length === 0 || status !== 'success' || !tickerRef.current) return;

    const ticker = tickerRef.current;
    const tickerWidth = ticker.scrollWidth;
    let start = 0;

    const animate = () => {
      start -= 0.8; // Adjust speed here (smaller = slower)
      if (start <= -tickerWidth / 2) {
        start = 0;
      }
      ticker.style.transform = `translateX(${start}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stocks, status]);

  // Loading state UI
  if (status === 'loading') {
    return (
      <div className="bg-black border-t border-b border-gray-800 py-2 flex items-center justify-center">
        <div className="flex items-center space-x-2 text-gray-400">
          <svg className="animate-spin h-4 w-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-sm font-medium">Loading real time market data...</span>
        </div>
      </div>
    );
  }

  // Error state UI
  if (status === 'error') {
    return (
      <div className="bg-black border-t border-b border-gray-800 py-2 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2 text-red-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Unable to load market data</span>
        </div>
        <button 
          onClick={loadData}
          className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors duration-200"
        >
          Retry
        </button>
      </div>
    );
  }

  // Success state - render the ticker
  return (
    <div className="bg-black border-t border-b border-gray-800 overflow-hidden whitespace-nowrap relative py-1.5">
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div ref={tickerRef} className="flex items-center py-0.5">
        {stocks.map((stock, index) => (
          <div key={index} className="px-4 text-gray-200 flex-shrink-0 flex items-center">
            <span className="font-bold text-white">{stock.symbol}</span>
            <span className="ml-2 font-medium">${Number(stock.value).toFixed(2)}</span>
            <span 
              className={`ml-2 text-sm font-medium flex items-center ${
                String(stock.change).startsWith('-') ? 'text-red-400' : 'text-green-400'
              }`}
            >
              {/* Arrow indicator */}
              {!String(stock.change).startsWith('-') ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              {stock.change}%
            </span>
            <span className="mx-4 text-gray-600">|</span>
          </div>
        ))}
        {/* Duplicate for smooth infinite scroll */}
        {stocks.map((stock, index) => (
          <div key={`repeat-${index}`} className="px-4 text-gray-200 flex-shrink-0 flex items-center">
            <span className="font-bold text-white">{stock.symbol}</span>
            <span className="ml-2 font-medium">${Number(stock.value).toFixed(2)}</span>
            <span 
              className={`ml-2 text-sm font-medium flex items-center ${
                String(stock.change).startsWith('-') ? 'text-red-400' : 'text-green-400'
              }`}
            >
              {/* Arrow indicator */}
              {!String(stock.change).startsWith('-') ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              {stock.change}%
            </span>
            <span className="mx-4 text-gray-600">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;