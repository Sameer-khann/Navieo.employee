import React from 'react'
import Chart from 'chart.js/auto'
import {useRef,useEffect} from 'react'
const PieChart = () => {
 const chartRef = useRef(null);
 const chartInstance = useRef(null);
 useEffect(()=>{
    if(chartInstance.current){
        chartInstance.current.destroy()
    }
    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current= new Chart(myChartRef,{
        type:"pie",
        data:{
          //  labels:["label 1","label 2"],
            datasets:[
                {
                    label: 'My First Dataset',
                    data: [86,14],
                    backgroundColor: [
                      'rgb(255,255,255)',
                      'rgb(112,128,144)',
                      
                    ]
                }
            ]
        }
    })
    return()=>{
        if(chartInstance.current){
            chartInstance.current.destroy();
        }
    }

},[])
    return (
    <div className='h-62 w-60 '>
    <canvas ref={chartRef} style={{width:"50",height:"50px"}}/>
  </div>
  
  )
}

export default PieChart;