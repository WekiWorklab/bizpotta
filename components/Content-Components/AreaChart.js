
import { Tooltip } from 'chart.js'
import React from 'react'

import { Area, AreaChart as AChart, CartesianGrid, XAxis, YAxis } from 'recharts'


const AreaChart = () => {
  
  return(
    <div className='w-full'>
        <AChart width={560} height={240} data={data} margin={{ top: 30, right: 0, left: -30, bottom: 20 }}> 
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={1}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" vertical = {false} />
        {/* <Tooltip /> */}

        <Area type="linear" dataKey="time" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AChart>
    </div>
  )

}


export default AreaChart

const data = [
  {
      month: "Jan",
      time:  0  },
  {
      month: "Feb",
      time:  0  },
  {
      month: "Mar",
      time:  0  },
  {
      month: "Apr",
      time:  0  },
  {
      month: "May",
      time:  0
  },
  {
      month: "Jun",
      time:  0  },
  {
      month: "Jul",
      time:  0  },
  {
      month: "Aug",
      time:  0  },
  {
      month: "Sep",
      time:   0  },
  {
      month: "Oct",
      time:   0  },
  {
      month: "Nov",
      time:   0  },
  {
      month: "Dec",
      time: 0
  },
]