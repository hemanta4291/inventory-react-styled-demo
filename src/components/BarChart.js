import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { BarChartWrapper } from './styled/Dashboard.styled'
var options = {
    options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
            title: {
                text: 'Products'
              },
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        yaxis: {
            title: {
              text: 'Quentity'
            }
          },
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }]
    }



const BarChart = () => {
    const [chartData,setChartData] = useState(options)
  return (
    <BarChartWrapper>
         <Chart options={chartData.options} series={chartData.series} type="bar" width={"100%"} height={320} />
    </BarChartWrapper>
  )
}

export default BarChart