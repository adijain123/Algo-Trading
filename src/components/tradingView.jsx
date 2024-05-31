import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "BSE:SENSEX",
      "width": 350,
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
    });
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container mx-auto my-4">
      <div ref={containerRef} id="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="text-blue-500"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
