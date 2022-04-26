import styled from "styled-components"

export const StyledHeader = styled.header`
    position: relative;
    display: flex;
    top: 0px;
    flex-direction: column;
    padding-right: 16px;
    padding-left: 16px;
    z-index: 3;

@media (min-width: 900px){
    padding-right: 40px;
    padding-left: 40px;
    font-size: 18px;
}

@media (min-width: 720px){
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
`

export const LogoWrapper = styled.a`
    display: flex;
    align-items: center;
    margin-left: -14px;
    padding: 10px;
`

export const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.header.bg};
    color: ${({ theme }) => theme.colors.header.color};
    background-image: ${({ theme }) => theme.colors.header.bgImage};
`

export const Hamburger = styled.button`
    background: transparent;
    border: 0;
    margin-right: 8px;

    svg{
        font-size: 17px;
        color: white;
    }

    @media (min-width: 720px){
        display: none;
    }
`

export const FirstWapper = styled.div`
    display: flex;
    align-items: stretch;

    > a {
        display: flex;
        align-items: center;
    }

    @media (min-width: 720px){
        padding-right: 8px;
    }
`

export const MidWapper = styled.nav`
    position: absolute;
    -webkit-box-align: stretch;
    align-items: stretch;
    align-self: stretch;
    overflow: auto;
    visibility: hidden;

    @media (min-width: 900px){
        position: relative;
        display: flex;
        -webkit-box-flex: 1;
        flex-grow: 1;
        visibility: visible;
    }
`

export const LastWapper = styled.div`
    
    @media (min-width: 720px){
        display: flex;
        padding-left: 8px;
    }
`

export const NavLinks = styled.a`
    margin: initial;
    border: 0px;
    font-size: inherit;
    font-family: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 0px 8px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    line-height: 44px;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
    user-select: none;

    &:hover{
        text-decoration: none;
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.176));
        outline: none;
        color: rgb(255, 255, 255);
    }
`

export const AccountsButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.header.color};
    padding: 10px;

    @media(max-width: 768px){
        position: absolute;
        top: 0;
        right: 0;

        span{
            display: none;
        }
    }

    svg { 
        margin-right: 8px;
        @media(max-width: 768px){
            font-size: 21px;
        }
    }

    &:hover{
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.176));
        outline: none;
        color: rgb(255, 255, 255);
        text-decoration: none;
        cursor: pointer;
    }
`