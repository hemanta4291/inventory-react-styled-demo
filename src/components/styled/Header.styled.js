import styled from "styled-components";

export const HeaderWrapper = styled.header`
    height: 80px;
    line-height: 80px;
    width: calc(100% - 220px);
    margin: 0 0 0 220px;
    box-shadow: 0 16px 15px 0 ${({theme})=>theme.color.gray_7};
    padding: 0 16px;
    z-index: 2;
    top: 0;
    position: sticky;
    background: ${({theme})=>theme.color.white};

    & .header__container{
        height: 100%;
        display: flex;
        align-items: center;
        grid-gap: 24px;
        justify-content: flex-end;
        & .header__profile{
            width: 100%;
            max-width: 50px;
            max-height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
        

`