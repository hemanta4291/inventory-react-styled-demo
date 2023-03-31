import styled from "styled-components";


export const AuthWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 0px);

    & .container{
        border: 1px solid ${({theme})=>theme.color.border};
        padding: 30px 24px;
        border-radius: 6px;
        max-width: 516px;
        width: 100%;

        & .title{
            text-align: center;
            color: ${({theme})=>theme.color.text_secondary};
            margin-bottom: 36px;
        }

        & .submit{
            display: flex;
            justify-content: flex-end;
            padding: 16px 0 10px 0;
        }

        & .forgot{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;

            & .forgot__inner{
                display: flex;
                align-items: center;
                grid-gap: 10px;
            }

            & label{
                font-size: ${({theme})=>theme.fontSize.fs_14};
                color: ${({theme})=>theme.color.text_secondary};
            }

            & a{
                font-size: ${({theme})=>theme.fontSize.fs_14};
                color: ${({theme})=>theme.color.text_secondary};
            }
        }
    }
`