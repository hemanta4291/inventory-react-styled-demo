import styled from "styled-components";

export const SidenavWrapper = styled.div`

    position: fixed;
    width: 220px;
    height: 100%;
    background: ${({theme})=>theme.color.white};
    top:0;
    left: 0;
    box-shadow: 0 16px 15px 0 ${({theme})=>theme.color.gray_7};

    & .side__logo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        margin: 0 0 16px 0;

        & span{
            cursor: pointer;
        }
    }

    & ul {

        & li a{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 8px;

            &:hover{
                background: #ddd;
            }
        }
        & li a.active{
            color: #f00;
        }

        & .expand{
            display: inline-flex;
        }

        
        & .nav_left{
            display: flex;
            align-items: center;
            grid-gap: 8px;

            & svg{
                width: 16px;
                height: 16px;
            }
        }


        /* mega menu */
        & .droup__down{
            /* transition: height 0.5s; */
            transition: all linear 0.5s;
        }
        & .drop__collapse{
            max-height: 0;
            opacity: 0;
            z-index: -99;
            overflow: hidden;
        }
        & .drop__expand{
            max-height: 150px;
            height: 100%;
            transition: max-height 0.5s;
            opacity: 1;
            z-index: 1;
        }
    }
`