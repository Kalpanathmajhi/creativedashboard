"use client"
import React from 'react'
import { CardOne } from './cardone'
import { Cardtwo } from './cardTwo'
import { CardThree } from './cardThree'
import { AreaChartUsageExample } from './seriesGraph'
import { BarChartUsageExample } from './sparkchart'
import { Button } from '@tremor/react';

import styles from "./records.module.css"
import ResponsiveAppBar from '../components/header'

const record = () => {
  return (
    <div>
    <ResponsiveAppBar />
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <h1>Reports</h1>
          <div>Home / Reports</div>
        </div>
        <div>
          <Button className={styles.button} variant="primary">Search</Button>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <CardOne className={styles.card} />
        <Cardtwo className={styles.card} />
        <CardThree className={styles.card} />
      </div>
      <div className={styles.cardsContainer2}>
        <AreaChartUsageExample />
        <BarChartUsageExample />
      </div>
    </div>
  )
}

export default record
