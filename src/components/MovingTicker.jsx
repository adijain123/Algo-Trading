import React, { useEffect, useRef, useState } from 'react';

const StockTicker = () => {
  const [stocks, setStocks] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://127.0.0.1:5000/stockdata", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        }
      });
      response = await response.json();
      setStocks(response);
    } catch (error) {
      console.error('Failed to fetch stock data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const tickerRef = useRef(null);

  useEffect(() => {
    if (stocks.length === 0) return;

    const ticker = tickerRef.current;
    const tickerWidth = ticker.scrollWidth;
    let start = 0;

    const animate = () => {
      start--;
      if (start <= -tickerWidth / 2) {
        start = 0;
      }
      ticker.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [stocks]);

  return (
    <div className="bg-black overflow-hidden whitespace-nowrap">
      <div ref={tickerRef} className="flex">
        {stocks.map((stock, index) => (
          <div key={index} className="px-4 py-2 text-white flex-shrink-0">
            <span className="font-bold">{stock.symbol}</span>
            <span className="ml-2">${stock.value}</span>
            <span className={`ml-2 ${String(stock.change).startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
              {stock.change}%
            </span>
          </div>
        ))}
        {stocks.map((stock, index) => (
          <div key={`repeat-${index}`} className="px-4 py-2 text-white flex-shrink-0">
            <span className="font-bold">{stock.symbol}</span>
            <span className="ml-2">${stock.value}</span>
            <span className={`ml-2 ${String(stock.change).startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
              {stock.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;
