import styled from "styled-components"

interface CategoryAProps {
    href?: string
    bgImage? : string
}

interface ULProps {
    col?: string
}

export const CategoryA = styled.a<CategoryAProps>`
    &:hover {
        color: rgb(1, 81, 167);
        
        h3 {
            text-decoration: underline;
        }

        .image_preview{
            &:before{
                opacity: 0.4;
            }
            &:after,
            svg{
                opacity: 1;
            }
        }
    }

    .image_preview{
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
        border-radius: 2px;
        overflow: hidden;
        background-color: inherit;
        background-image: url("${({ bgImage }) => bgImage}");
        background-position: left top;
        background-size: 100%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;

        &:before{
            background-color: rgb(2, 108, 223);
            background-image: linear-gradient(90deg, rgb(70, 117, 232), rgb(2, 108, 223));
            position: absolute;
            top: 0px;
            right: 0px;
            z-index: 1;
            display: block;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.4s cubic-bezier(0.1, 0.85, 0.25, 1) 0s;
            content: "";
        }

        &:after{
            background-color: rgb(2, 108, 223);
            background-image: linear-gradient(rgb(70, 117, 232), rgb(2, 108, 223));
            position: absolute;
            top: 0px;
            right: 0px;
            display: block;
            width: 32px;
            height: 100%;
            border-radius: 0px 4px 4px 0px;
            opacity: 0;
            transition: opacity 0.4s cubic-bezier(0.1, 0.85, 0.25, 1) 0s;
            content: "";
        }

        > svg{
            position: absolute;
            top: 50%;
            right: 4px;
            z-index: 1;
            margin-top: -12px;
            opacity: 0;
            transition: opacity 0.4s cubic-bezier(0.1, 0.85, 0.25, 1) 0s;
            fill: rgb(255, 255, 255);
        }
    }
`

export const CategoryUL = styled.ul<ULProps>`
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    list-style: none;
    margin-left: -8px;
    margin-right: -8px;
    
    > li{
        padding-left: 8px;
        padding-right: 8px;
        width: 100%;
        a {
            color: inherit;
            text-decoration: none;
        }
        p{
            margin: 0px;
            color: rgb(100, 100, 100);
        }
        @media (min-width: 768px) {
            ${({ col }) => {
                if (col === "2") {
                    return 'width: 50%;'
                }
                if (col === "5") {
                    return 'width: 20%;'
                }
                if (col === "3") {
                    return 'width: 33.3333%;'
                }
                return 'width: 100%;'
            }}
        }
    }
`

export const CategorySpan = styled.span`
    display: block;
    margin: 12px 0px 8px;
    color: rgb(100, 100, 100);
`

export const DiscoverMoreButton = styled.span`
    display: block;
    margin: 12px 0 30px;
    color: rgb(2, 108, 223);
    font-weight: bold;
    text-transform: uppercase;
`

export const H2 = styled.h2`
    position: relative;
    text-align: center;
    font-size: 23px;
    margin: 0px;
    padding-bottom: 4px;
    font-weight: 900;
    text-transform: uppercase;
    padding-top: 24px;
    border-top: 1px solid rgb(191, 191, 191);

    &:after{
        content: "";
        position: absolute;
        bottom: 0px;
        display: block;
        width: 40px;
        border-bottom: 4px solid rgb(197, 107, 255);
        left: 50%;
        transform: translateX(-50%);
    }
`