import styled from "styled-components";


export const CardTitleWithIconWrapper = styled.div`
    width: 100%;
    border: 1px solid ${({theme})=>theme.color.border};
    padding: 16px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    grid-gap: 16px;

    & .card__left{
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: ${({theme,type})=>type === 'primary' ? theme.color.primary : type === 'secondary' ? theme.color.secondary : theme.color.success};
        color: ${({theme})=>theme.color.white};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .card__right{

        & h5{
            margin: 8px 0 0 0;
        }
    }
`