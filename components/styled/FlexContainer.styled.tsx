import styled from "styled-components"

type FlexContainerProps = {
    alignItems?: string
    pl?: string | '40px'
    pr?: string | '40px'
    pt?: string
    pb?: string
}
export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    ${({alignItems}) => alignItems && `align-items: ${alignItems};`}
    ${({pt}) => pt && `padding-top: ${pt};`}
    ${({pb}) => pb && `padding-bottom: ${pb};`}
    padding-left: 15px;
    padding-right: 15px;

    @media(min-width: 768px) {
        flex-direction: row;
        padding-left: 40px;
        padding-right: 40px;
    }
`