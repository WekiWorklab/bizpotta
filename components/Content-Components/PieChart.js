import React from 'react'
import { Cell, Pie, PieChart as PChart } from 'recharts'

const PieChart = () => {
  return (
    <PChart width={100} height={70}>
        <Pie data={data}  nameKey="name" dataKey="value" cx="50%" cy="50%" innerRadius={27} outerRadius={33} fill="" >
            {
              data.map((entry, index) => (
                <Cell key={index} fill={(index === 0 ? "#C14242" : "#ffffff")} />
              ))
            }
        </Pie>
        
    </PChart>
  )
}

export default PieChart


const data = [
    {
        "name": "",
        "value": 25
    },
    {
        "name": "",
        "value": 75
    },
]


const data2 = [
    {
        "name" : "",
        "value": 25
    },

    {
        "name" : "",
        "value": 75
    },
]