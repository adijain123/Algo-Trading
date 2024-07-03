import React from 'react'
import { HeroHighlightDemo } from '../../UI/HeroHighlightDemo'
import StockTicker from './MovingTicker'
import {SparklesPreview} from '../../UI/SparklesPreview'
import SearchBar from './SearchBar'

const Home = () => {
  return (
    <div>
      <StockTicker></StockTicker>
      <HeroHighlightDemo></HeroHighlightDemo>
      <SearchBar></SearchBar>
      <SparklesPreview></SparklesPreview>
    </div>
    
  )
}

export default Home
