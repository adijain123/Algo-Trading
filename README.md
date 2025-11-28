# AlgoTrading: Algorithmic Trading Platform

A modern, full-featured algorithmic trading platform built with React and Vite. Create, test, and optimize trading strategies with comprehensive backtesting capabilities, interactive charts, and a user-friendly interface.

![Version](https://img.shields.io/badge/version-0.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Core Functionality

- **🎯 Strategy Builder**: Create and customize trading strategies with intuitive parameter inputs
  - Strategy type selection
  - Entry/exit rules configuration
  - Position sizing controls
  - Risk management protocols

- **📊 Backtesting Engine**: Comprehensive backtesting functionality with historical data analysis
  - Multiple strategy support
  - Customizable time periods
  - Initial capital configuration
  - Detailed performance metrics

- **📈 Interactive Charts**: Visualize trading performance with advanced charting
  - Real-time equity curves
  - OHLC candlestick charts
  - Strategy overlay visualization
  - Interactive Plotly.js charts

- **📑 Performance Analytics**: Detailed analysis of strategy performance
  - Overview tab with key metrics
  - Overall summary statistics
  - Strategy properties breakdown
  - Visual performance indicators

- **🔍 Stock Search**: Intelligent stock symbol search and autocomplete
  - Real-time suggestions
  - Symbol and company name search
  - Quick stock selection

- **👥 Community Features**: Engage with fellow traders
  - Discussion forums
  - Strategy sharing
  - Community collaboration

- **🎨 Modern UI/UX**: Beautiful, responsive interface
  - Dark theme optimized for trading
  - Smooth animations with Framer Motion
  - Mobile-responsive design
  - Intuitive navigation

## 🛠 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.2.0** - Build tool and dev server
- **React Router DOM 6.23.1** - Client-side routing
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Framer Motion 11.2.10** - Animation library

### Data Visualization
- **Plotly.js 2.33.0** - Interactive charts
- **React Plotly.js 2.6.0** - React wrapper for Plotly
- **D3.js 7.9.0** - Data manipulation and visualization

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Tabler Icons** - Additional icon set
- **TSParticles** - Particle effects

### HTTP & Utilities
- **Axios 1.7.2** - HTTP client
- **React TradingView Embed** - TradingView widget integration
- **React Modal** - Modal dialogs

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** (v7 or higher) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd algo-trading
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 💻 Usage

### Getting Started

1. **Sign Up / Login**
   - Navigate to `/signup` to create a new account
   - Or visit `/login` to access your existing account

2. **Build a Strategy**
   - Go to `/strategybuilder` to create your custom trading strategy
   - Configure entry/exit rules, position sizing, and risk parameters

3. **Backtest Your Strategy**
   - Visit `/backtesting` to test your strategy
   - Select a stock symbol using the search functionality
   - Configure backtest parameters:
     - Strategy type
     - Time period
     - Initial capital
   - Click "Run Backtest" to see results

4. **Analyze Results**
   - Review the interactive charts showing equity curves
   - Check the Overview tab for key performance metrics
   - Examine the Overall Summary for detailed statistics
   - Review Properties for strategy-specific information

5. **Engage with Community**
   - Visit `/discuss` to join trading discussions
   - Share strategies and insights with other traders

### Routes

- `/` - Home page
- `/backtesting` - Backtesting engine
- `/strategybuilder` - Strategy builder interface
- `/about` - About page
- `/discuss` - Community discussions
- `/signup` - User registration
- `/login` - User login

## 📁 Project Structure

```
algo-trading/
├── public/                 # Static assets
│   ├── *.jpg              # Team/community images
│   └── ...
├── src/
│   ├── components/        # React components
│   │   ├── backtesComp/   # Backtesting components
│   │   │   ├── BacktestForm.jsx
│   │   │   ├── BacktestResult.jsx
│   │   │   ├── OverviewTab.jsx
│   │   │   ├── OverallSummaryTab.jsx
│   │   │   ├── PropertiesTab.jsx
│   │   │   ├── PlotChart3.jsx
│   │   │   └── Plotlychart2.jsx
│   │   ├── About.jsx
│   │   ├── Backtesting.jsx
│   │   ├── Discuss.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── MovingTicker.jsx
│   │   ├── Navbar.jsx
│   │   ├── PlotChart.jsx
│   │   ├── SearchBar.jsx
│   │   └── StrategyBuilder.jsx
│   ├── UI/                # UI components and utilities
│   │   ├── ui/            # Reusable UI components
│   │   ├── utils/         # Utility functions
│   │   ├── BackgroundBoxesDemo.jsx
│   │   ├── HeroHighlightDemo.jsx
│   │   ├── Loginpage.jsx
│   │   ├── SignupFormDemo.jsx
│   │   └── SparklesPreview.jsx
│   ├── App.jsx            # Main app component with routing
│   ├── App.css            # App styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── dist/                  # Build output
├── data.json              # Stock data
├── stock.json             # Stock symbols data
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
```

### Building
```bash
npm run build        # Build for production
npm run clean        # Remove dist directory
```

### Deployment
```bash
npm run predeploy    # Build before deployment
npm run deploy       # Deploy to GitHub Pages
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

## 🔌 API Integration

The application integrates with a backend API for backtesting functionality:

**Backend Endpoint:**
- Base URL: `https://algotrading-apewaubbe4g8h9gx.eastasia-01.azurewebsites.net`
- Backtest API: `POST /api/backtest`

**Request Payload:**
```json
{
  "strategy": "strategy_name",
  "sym": "STOCK_SYMBOL",
  "cash": 5000,
  "period": "time_period"
}
```

**Response:**
The API returns comprehensive backtest results including:
- Strategy name
- Overview metrics
- Performance summary
- Strategy properties
- Equity curve plot data

## 🚢 Deployment

### Vercel Deployment

The project is configured for Vercel deployment with `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Deploy to Vercel:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages Deployment

The project includes scripts for GitHub Pages deployment:

```bash
npm run deploy
```

This will:
1. Build the project
2. Deploy to the `gh-pages` branch

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Ensure ESLint passes without errors

## ⚠️ Important Notes

- **Educational Purpose**: This platform is for educational purposes only
- **Past Performance**: Past performance is not indicative of future results
- **Risk Warning**: Trading involves substantial risk of loss
- **No Financial Advice**: This platform does not provide financial advice

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- Adi
- Dhruv
- Manvendra
- Rishi

## 🔗 Links

- [Live Demo](#) - Add your deployment URL here
- [Documentation](#) - Add documentation link if available
- [Issue Tracker](#) - Add GitHub issues link

## 📧 Contact

For questions, suggestions, or support, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for the trading community**
