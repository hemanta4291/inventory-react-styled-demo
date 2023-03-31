import styled from "styled-components";

export const DashboardMiddleContainer = styled.div`
    width: calc(100% - 220px);
    margin: 0 0 0 220px;
    padding: 24px 16px;

`

export const DashboardWrapper = styled.div`
    
`

export const DashboardTop = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    align-items: flex-start;

    & .top__left{
        grid-column-end:span 2;

        & p{
            padding: 16px 0 0 0;
            color: ${({theme})=>theme.color.text_secondary};
            line-height: ${({theme})=>theme.lineHeight.lh_24} ;
            max-width: 500px;
            width: 100%;
        }
    }
    & .top__right{
        display: flex;
        grid-gap: 16px;
        grid-column-end:span 3;
    }
`


export const DashboardProductQuantity = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 60px 0;

`


export const BarChartWrapper = styled.div`
    border: 1px solid ${({theme})=>theme.color.border};
    border-radius: 6px;
    padding: 8px;
`