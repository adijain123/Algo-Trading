import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Sector Rotation Strategies for Long-Term Investors",
    summary:
      "Explore how sector rotation strategies can enhance investment plans by reallocating between defensive and cyclical sectors based on economic cycles.",
    date: "July 19, 2024",
    author: "Bookmap Insights",
    category: "Investment Strategies",
    image:
      "https://bookmap.com/wp-content/uploads/2024/07/2_result-29.webp",
    url: "https://bookmap.com/blog/sector-rotation-strategies-for-long-term-investors-maximizing-returns-by-capitalizing-on-market-trends",
  },
  {
    id: 2,
    title: "Top 15 Most Popular Trading Strategies in 2025",
    summary:
      "Discover effective trading strategies like scalping, trend following, swing trading, and arbitrage to navigate the dynamic markets of 2025.",
    date: "April 8, 2025",
    author: "Demetris Makrides & Vitaly Makarenko",
    category: "Trading Strategies",
    image:
      "https://wp.quadcode.com/wp-content/uploads/2025/04/Top_15_Most_Popular_Trading_Strategies-3-1024x512.png",
    url: "https://quadcode.com/blog/top-15-most-popular-trading-strategies",
  },
  {
    id: 3,
    title: "Top Algorithmic Trading Strategies of 2025",
    summary:
      "Learn about algorithmic trading strategies like trend following, arbitrage, and mean reversion to optimize trades with automation.",
    date: "January 20, 2025",
    author: "Pocketful.in Experts",
    category: "Algorithmic Trading",
    image:
      "https://wp-api.pocketful.in/blog/wp-content/uploads/2025/01/Algorithmic-Trading-Strategies-1.jpg",
    url: "https://www.pocketful.in/blog/trading/algorithmic-trading-strategies/",
  },
  {
    id: 4,
    title: "Momentum Trading vs. Swing Trading: Which Strategy Works Best in 2025?",
    summary:
      "Compare momentum and swing trading strategies, focusing on their benefits, risks, and suitability for different market conditions.",
    date: "October 3, 2024",
    author: "Noor Kaur",
    category: "Technical Analysis",
    image:
      "https://master-trust-strapi.s3.ap-south-1.amazonaws.com/algo_trading_banner_01_160d1a39cb.jpg",
    url: "https://www.mastertrust.co.in/blog/momentum-trading-vs-swing-trading-which-strategy-works-best-in-2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header with gradient */}
      <header className="bg-gradient-to-r from-blue-900 to-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">QuantTrader</h1>
          <p className="text-blue-300 text-xl">
            Advanced insights on algorithmic trading and market analysis
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Featured section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-blue-400">Latest Articles</h2>
            <div className="flex space-x-2">
            </div>
          </div>

          {/* Featured post - larger display */}
          <div className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-2xl overflow-hidden shadow-blue-900/30 shadow-lg mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-blue-400 text-sm font-medium mb-2">{blogPosts[0].category}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-300 mb-6">{blogPosts[0].summary}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-blue-300">
                    {blogPosts[0].date} · by {blogPosts[0].author}
                  </p>
                  <a
                    href={blogPosts[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center transition-colors"
                  >
                    Read more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content - Blog posts */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-700"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-blue-400 text-xs font-medium mb-2 block">{post.category}</span>
                    <h2 className="text-xl font-semibold text-white mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 text-sm">{post.summary}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">
                        {post.date} · by {post.author}
                      </p>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;