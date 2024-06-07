import React from 'react'
import { HeroHighlightDemo } from '../../UI/HeroHighlightDemo'
import { AnimatedTooltipPreview } from '../../UI/AnimatedTooltipPreview'
import StockTicker from './MovingTicker'
import {SparklesPreview} from '../../UI/SparklesPreview'

const Home = () => {
  return (
    <div>
      <StockTicker></StockTicker>
     <HeroHighlightDemo></HeroHighlightDemo>
      <AnimatedTooltipPreview></AnimatedTooltipPreview>
      <SparklesPreview></SparklesPreview>
    </div>
    
  )
}

export default Home
