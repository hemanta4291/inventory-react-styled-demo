import styled from "styled-components"

export const UserWraper = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 24px;
    padding: 60px 0;

    & .user__list{
        grid-column-end: 3 span;
    }
    & .user__details {
        grid-column-end: 2 span;
        padding: 0 0 0 16px;
        & .user__title{
            margin: 0 0 32px 0;
        }
    }
`

export const UserInfoWrapper =styled.div`
    border: 1px solid ${({theme})=>theme.color.border};
    border-radius: 6px;
    padding: 24px;
    height: calc(100% - 115px);
    
    & .user__info{
        display: flex;
        align-items: center;
        grid-gap: 24px;
        

        & .user__info__left{
            font-weight: ${({theme})=>theme.fontWeight.fw_600};
            flex-basis: 30%;
            border-right: 1px solid ${({theme})=>theme.color.border};
        }
        & .user__info__right{
            flex-basis: 70%;
        }


    }

    & .user__info + .user__info{
        margin: 24px 0 0 0;
    }
`