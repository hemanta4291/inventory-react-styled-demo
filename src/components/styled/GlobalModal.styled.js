import styled from "styled-components";

export const GlobalModalWrapper = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    display: ${(props)=>props.openModalStatus ? 'flex' : 'none'};
    /* display: flex; */
    align-items: center;
    justify-content: center;

    & .overly{
        position: fixed;
        display: ${(props)=>props.openModalStatus ? 'block': 'none'};
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        z-index: 3;
    }

    & .modal__container{
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        min-height:150px;
        background-color: ${({theme})=>theme.color.white};
        border-radius: 6px;
        z-index: 99;

        & .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid ${({theme})=>theme.color.border};

            & .close{
                background: ${({theme})=>theme.color.error};
                border: 1px solid ${({theme})=>theme.color.error};
                color: ${({theme})=>theme.color.white};
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;
                transition: all linear 0.3s;

                &:hover{
                    background: ${({theme})=>theme.color.white};
                    border: 1px solid ${({theme})=>theme.color.error};
                    color: ${({theme})=>theme.color.error};
                }
            }
        }

        & .body{
            padding: 20px 16px;
            overflow: auto;
             max-height: calc(100vh - 183px);
            }
        }

        & .footer{
            padding: 16px;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid ${({theme})=>theme.color.border};
        }
    }
`