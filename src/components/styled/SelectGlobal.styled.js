import styled from "styled-components";

export const SelectGlobalWrapper = styled.div`

    & label{
        display: block;
        padding: 0 0 12px 0;
    }

    & select{
        border: 1px solid ${({theme})=>theme.color.border};
        font-size:${({theme})=>theme.fontSize.fs_16};
        background: transparent;
        height: 40px;
        border-radius: 6px;
        width: 100%;
        padding: 0 14px;
        margin: 0 0 16px 0;

        &:focus{
            outline: 0;
        }
    }
`