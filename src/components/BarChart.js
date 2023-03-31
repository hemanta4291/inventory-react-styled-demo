import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { BarChartWrapper } from './styled/Dashboard.styled'
import { DashboardHeaderWrapper } from './styled/DashboardHeader.styled'




const BarChart = () => {
    const [chartData,setChartData] = useState({
      options: {
        colors : ['#32bdea', '#32bdea'],
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
          colors:["#f00"],
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        
    })
  return (
    <>
      <DashboardHeaderWrapper>
        <div className='dashboard__header__top'>
                    <h5 className='dashboard__header__title'>Product Vs Quentity</h5>
                    {/* <SelectGlobal
                        value={ selectMonth}
                        options={ months}
                        onChange={handleSelectMonth}
                    /> */}
                </div>
                <div className='dashboard__chart__container'>
                <Chart options={chartData.options} series={chartData.series} type="bar" width={"100%"} height={320} />
                </div>
      </DashboardHeaderWrapper>
        
    </>
  )
}

export default BarChart