import styled from "styled-components";

export const DashboardHeaderWrapper = styled.div`

    border: 1px solid ${({theme})=>theme.color.border};
    padding: 20px 0;
    border-radius: 6px;

    & .dashboard__header__top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${({theme})=>theme.color.border};
        padding: 0 16px 16px 16px;
        height: 74px;

        & .dashboard__header__title{}
    }


    & .dashboard__chart__container{
        padding: 32px 0 0 0;
    }
    
`