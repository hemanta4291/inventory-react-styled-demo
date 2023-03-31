import styled from "styled-components";

export const SidenavWrapper = styled.div`
    transition: all linear 0.3s;
    position: fixed;
    width: ${(props)=>props.toggleOpenAt ? "90px" : '220px'};
    height: 100%;
    background: ${({theme})=>theme.color.white};
    top:0;
    left: 0;
    box-shadow: 0 16px 15px 0 ${({theme})=>theme.color.gray_7};

    & .toggle__active {
        & .side__collapse_title{
            display: none;
        }
    }

    & .toggle__deactive{
        & .side__collapse__logo{
            display: none !important;
        }
    }

    & .toggle__btn{
        transition: all linear 0.3s;
        transform: ${(props)=>props.toggleOpenAt ? "rotate(180deg)" : "rotate(360deg)"} ;
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        width: 90px;

        & .toggle__btn{
            display: none;
        }
            & .side__logo {
                & .side__collapse_title{
                    display: none;
                }
                & .side__collapse__logo{
                    display: inline-flex !important;
                }
            }

        }

    

    & .side__logo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        height: 80px;

        & .side__collapse__logo{
            background: ${({theme})=>theme.color.secondary};
            color: ${({theme})=>theme.color.white};
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 6px;
        }

        & span{
            cursor: pointer;
            color: ${({theme})=>theme.color.text_secondary};

            & svg{
                width: 20px;
            }
        }
    }

    & ul {

        & li a{
            display: flex;
            align-items: center;
            justify-content: ${(props)=>props.toggleOpenAt ? 'center' : 'space-between'} ;
            padding: 14px 8px;
            color: ${({theme})=>theme.color.text_primary};
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
            @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
                justify-content: center;
            }

            &:hover{
                color: ${({theme})=>theme.color.primary};
                background: ${({theme})=>theme.color.ghost_white};
            }
        }
        & .expand,
        & .nav__title{
            display: ${(props)=>props.toggleOpenAt ? 'none !important' : 'inline-flex'};

            @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
                display: none;
            }
            
        }
        & li a.active{
            color: ${({theme})=>theme.color.primary};
            background: ${({theme})=>theme.color.ghost_white};
        }

        & .expand{
            display: inline-flex;
        }

        
        & .nav_left{
            display: flex;
            align-items: center;
            grid-gap: 8px;

            & svg{
                width: ${(props)=>props.toggleOpenAt ? '30px' : '18px'};
                @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
                    width: 30px;
                 }
                /* height: 16px; */
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


       


        /* responsive */
     

       
       
    }
`