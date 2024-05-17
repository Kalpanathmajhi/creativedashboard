"use client"
import React from 'react'
import { DonutChartUsageExample } from './cardone'
import { Cardtwo } from './cardTwo'
import { CardThree } from './cardThree'
import { AreaChartUsageExample } from './seriesGraph'
import { BarChartUsageExample } from './sparkchart'


const record = () => {
  return (
    <div>
      <div><DonutChartUsageExample />
      <Cardtwo />
      <CardThree />
      </div>
      <div>
        <AreaChartUsageExample />
      <BarChartUsageExample />
      </div>
    </div>
  )
}

export default record
