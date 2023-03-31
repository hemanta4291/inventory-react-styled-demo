import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import SelectGlobal from './SelectGlobal'
import { SalesWrapper } from './styled/Dashboard.styled'
import { DashboardHeaderWrapper } from './styled/DashboardHeader.styled'

const PurchaseSales = () => {
    const [selectMonth, setSelectMonth] = useState('March')
    const [dayOfMonth, setDayOfMonth] = useState(['03/01/2023', '03/02/2023', '03/03/2023', '03/04/2023',
        '03/05/2023', '03/06/2023'
    ],)

    const [months, setMonths] = useState([
        {
            id: 1,
            title: "January",
        },
        {
            id: 2,
            title: "February",
        },
        {
            id: 3,
            title: "March",
        },
        {
            id: 4,
            title: "Appril",
        },
        {
            id: 5,
            title: "May",
        },
        {
            id: 6,
            title: "Jun",
        },
        {
            id: 7,
            title: "July",
        },
        {
            id: 8,
            title: "August",
        },
        {
            id: 9,
            title: "September",
        },
        {
            id: 10,
            title: "October",
        },
        {
            id: 11,
            title: "November",
        },
        {
            id: 12,
            title: "Decembar",
        },
    ])
    const [saleData, setSaleData] = useState([31, 40, 28, 51, 42, 109, 100])

    const [chartData, setChartData] = useState({
        options: {
            colors: ["#78c091"],
            series: [{
                name: 'Sales',
                data: saleData
            },],
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: dayOfMonth
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },

        }
    })

    useEffect(() => { }, [saleData])

    const handleSelectMonth = (e) => {
        setSelectMonth(e.target.value)
       
    }

    return (
        <SalesWrapper>
            <DashboardHeaderWrapper>
                <div className='dashboard__header__top'>
                    <h5 className='dashboard__header__title'>Sales</h5>
                    <SelectGlobal
                        value={selectMonth}
                        options={months}
                        onChange={handleSelectMonth}
                    />
                </div>
                <div className='dashboard__chart__container'>
                    <Chart options={chartData.options} series={chartData.options.series} type="line" width={"100%"} height={320} />
                </div>
            </DashboardHeaderWrapper>
        </SalesWrapper>
    )
}

export default PurchaseSales