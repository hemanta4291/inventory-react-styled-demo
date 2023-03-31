import styled from "styled-components";

export const DataTableCommonDesign = styled.div`

    & .datatable__header{
        padding: 0 0 24px 0;
        display: flex;
        justify-content: space-between;

        & .datatable__search{
            border: 1px solid ${({theme})=>theme.color.border};
            font-size: ${({theme})=>theme.fontSize.fs_16};
            height: 40px;
            border-radius: 6px;
            padding: 16px;
            max-width: 400px;
            width: 100%;

            &:focus{
                outline: 0;
            }

        }
    }

    & .rdt_Table{
        border: 1px solid ${({theme})=>theme.color.border};
        border-bottom:0;
        border-radius: 6px;
        font-family: ${({theme})=>theme.fontFamily.Lato};
        

        & .rdt_TableHeadRow{
            background-color: ${({theme})=>theme.color.ghost_white};
            font-size: ${({theme})=>theme.fontSize.fs_16};
            font-weight: ${({theme})=>theme.fontWeight.fw_600};
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }

        & .rdt_TableRow{
            font-size: ${({theme})=>theme.fontSize.fs_16};
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
            border-radius: 6px;

        }
        
    }


    & .data__table__action{
        display: flex;
        align-items: center;
        grid-gap: 8px;
        & button{
            width: 30px;
            height: 30px;
            color:${({theme})=>theme.color.white};
            border-radius: 6px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all linear 0.3s;
        }
        & button.view__btn{
            background: ${({theme})=>theme.color.info};
            border: 1px solid ${({theme})=>theme.color.info};

            &:hover{
                background: ${({theme})=>theme.color.white};
                border: 1px solid ${({theme})=>theme.color.info};
                color: ${({theme})=>theme.color.info};
            }
        }
        & button.edit__btn{
            background: ${({theme})=>theme.color.success};
            border: 1px solid ${({theme})=>theme.color.success};

            &:hover{
                background: ${({theme})=>theme.color.white};
                border: 1px solid ${({theme})=>theme.color.success};
                color: ${({theme})=>theme.color.success};
            }
        }
        & button.delete__btn{
            background: ${({theme})=>theme.color.error};
            border: 1px solid ${({theme})=>theme.color.error};

            &:hover{
                background: ${({theme})=>theme.color.white};
                border: 1px solid ${({theme})=>theme.color.error};
                color: ${({theme})=>theme.color.error};
            }
        }
    }
    

`