import styled from "styled-components";

export const DashboardMiddleContainer = styled.div`
    transition: all linear 0.3s;
    width: ${(props)=>props.toggleOpen ? 'calc(100% - 90px)' : 'calc(100% - 220px)'};
    margin: ${(props)=>props.toggleOpen ? '0 0 0 90px' : '0 0 0 220px'};
    padding: 24px 16px;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        width: calc(100% - 90px);
        margin: 0 0 0 90px;
    }

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


    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab2}){
        grid-template-columns: repeat(4,1fr);

        & .top__left{
            grid-column-end:span 4;
            margin-bottom: 16px;
        }
        & .top__right{
            grid-column-end:span 4;
        }
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        & .top__right{
            display: grid;
            grid-template-columns: repeat(1,1fr);
        }
    }


`


export const DashboardProductQuantity = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 60px 0;
    grid-gap: 30px;

`


export const BarChartWrapper = styled.div`
    border: 1px solid ${({theme})=>theme.color.border};
    border-radius: 6px;
    padding: 8px;
`



export const SalesWrapper = styled.div`
    width: 99%;
`