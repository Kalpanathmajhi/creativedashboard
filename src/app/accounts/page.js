"use client"
import React from 'react'
import { TableUsageExample } from './userTable'
import ResponsiveAppBar from '../components/header'

const user = () => {
  return (
    <div>
    <ResponsiveAppBar />
      <TableUsageExample />
    </div>
  )
}

export default user
