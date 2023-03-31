import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import SelectGlobal from './SelectGlobal'
import { DashboardHeaderWrapper } from './styled/DashboardHeader.styled'

const StatisticalReport = () => {
    const [selectProduct,setSelectProduct] = useState('Laptop')
    const [months, setMonths] = useState([
        {
            id: 1,
            title: "Computer",
        },
        {
            id: 2,
            title: "Laptop",
        },
        {
            id: 3,
            title: "Mobile",
        },
        {
            id: 4,
            title: "Monitor",
        },
        {
            id: 5,
            title: "Mouse",
        },
        {
            id: 6,
            title: "Pendive",
        },
        {
            id: 7,
            title: "Headphone",
        },
      
    ])

    const [chartData,setChartData] = useState({
        options: {
          colors:["#78c091"],
            series: [{
                name: 'Product',
                data: [44, 55, 41, 67, 220, 43,250,100,45,74,12,38,5,45,96,32,47,51,300]
              }],
                chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                  show: true
                },
                zoom: {
                  enabled: true
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                  borderRadius: 10,
                  dataLabels: {
                    total: {
                      enabled: true,
                      style: {
                        fontSize: '13px',
                        fontWeight: 900
                      }
                    }
                  }
                },
              },
              xaxis: {
                type: 'datetime',
                categories: ['03/01/2023 GMT', '03/02/2023 GMT', '03/03/2023 GMT', '03/04/2023 GMT',
                  '03/05/2023 GMT', '03/06/2023 GMT','03/08/2023 GMT','03/09/2023 GMT', '03/10/2023 GMT','03/11/2023 GMT',
                  '03/12/2023 GMT', '03/13/2023 GMT','03/14/2023 GMT','03/15/2023 GMT', '03/16/2023 GMT','03/17/2023 GMT',
                  '03/18/2023 GMT', '03/19/2023 GMT','03/20/2023 GMT'
                ],
              },
              yaxis: {
                title: {
                  text: 'Quentity'
                }
              },
              legend: {
                position: 'right',
                offsetY: 40
              },
              fill: {
                opacity: 1
              }
        }
    })

   

    const handleSelectMonth = (e) => {
      setSelectProduct(e.target.value)
    }

    return (
        <div>
            <DashboardHeaderWrapper>
                <div className='dashboard__header__top'>
                    <h5 className='dashboard__header__title'>Product Per Day</h5>
                    <SelectGlobal
                        value={ selectProduct}
                        options={ months}
                        onChange={handleSelectMonth}
                    />
                </div>
                <div className='dashboard__chart__container'>
                  <Chart options={chartData.options} series={chartData.options.series} type="bar" width={"100%"} height={320} />
                </div>
            </DashboardHeaderWrapper>
        </div>
    )
}

export default StatisticalReport