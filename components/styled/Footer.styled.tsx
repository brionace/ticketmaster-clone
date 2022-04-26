import styled from "styled-components"

// Footer type declaration
type SocialIconProps = {
    src: string
    alt: string
    title: string
    h?: string
}

export const StyledFooter = styled.footer`
    padding-top: 63px;
    flex-shrink: 0;
    color: white;
    background-color: rgb(31, 38, 45);

    h3{
        margin: 0px;
        font-weight: normal;
        font-size: 16px;
    }

    a{
        color: white;
    }
`

export const SocialWrapper = styled.div`
    @media(min-width: 768px){
        margin-right: 80px;
    }
`

export const SocialContainer = styled.div`
    margin-top: 32px;
`

export const SocialIconContainer = styled.a`
    display: inline-block;
    padding: 10px;
`

export const SocialIcon = styled.img<SocialIconProps>`
    display: block;
    height: ${({ h }) => h};
`

export const PageLinks = styled.div`

    @media(min-width: 768px){
        padding: 0 15px;
    }

    h3 {
        margin-bottom: 16px;
        font-weight: bold;
        font-size: 18px;
    }
    li {
        a {
            display: inline-block;
            margin-top: 8px;
            margin-left: -8px;
            padding: 4px 8px;
            color: rgb(255, 255, 255);
            text-decoration: none;
        }
    }
`

export const OurNetwork = styled.div`
    margin: 40px 0;

    @media(min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const FooterInfo = styled.div`
    margin-top: 16px;
    font-size: 14px;

    a{
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: 0.2em 8px;
        color: inherit;
        font-weight: inherit;
        font-size: inherit;
        text-decoration: none;

        &:first-child{
            padding-left: 0;
        }

        &:not(:last-child)&:after{
            position: absolute;
            content: "";
            top: 50%;
            right: 0px;
            display: inline-block;
            height: 1em;
            margin-top: -0.5em;
            border-left: 1px solid currentcolor;
        }
    }
`