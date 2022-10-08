import React from 'react'
import dynamic from "next/dynamic";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// import LineChart from 'recharts'

// const LineChart  = dynamic(() => import("recharts"), {ssr: false}) 
// const  Line = dynamic(() => import("recharts"), {ssr: false}) 
// const CartesianGrid = dynamic(() => import("recharts"), {ssr: false}) 
// const XAxis = dynamic(() => import("recharts"), {ssr: false}) 
// const  YAxis = dynamic(() => import("recharts"), {ssr: false}) 

const LChart = () => {
  return (
    <div className='w-full '>
        <LineChart width={1050} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="amt" stroke="#8884d8"dot={false}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false} />
            <XAxis dataKey="month" stroke='#121F4C'/>
            <YAxis />
        </LineChart>
    
    </div>
        
    

  )
}

export default LChart




const data = [
    {
        month: "Jan",
        amt: 25
    },
    {
        month: "Feb",
        amt: 10
    },
    {
        month: "Mar",
        amt: 30
    },
    {
        month: "April",
        amt: 27
    },
    {
        month: "May",
        amt: 40
    },
    {
        month: "June",
        amt: 14
    },
    {
        month: "July",
        amt: 22
    },
    {
        month: "Aug",
        amt: 29
    },
    {
        month: "Sept",
        amt: 35
    },
    {
        month: "Oct",
        amt: 40
    },
    {
        month: "Nov",
        amt: 10
    },
    {
        month: "Dec",
        amt: 30
    },
]