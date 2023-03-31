import styled from "styled-components";

export const BaseHeaderWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & .header___left{}
    & .header___subtitle{
        padding: 12px 0 0 0;
        font-size: ${({theme})=>theme.fontSize.fs_16};
        color: ${({theme})=>theme.color.text_secondary};
        max-width: 453px;
        width: 100%;
        line-height: ${({theme})=>theme.lineHeight.lh_24};

    }

`