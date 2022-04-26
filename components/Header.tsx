import React from 'react'
import type { FC } from 'react'
import { Logo } from './Logo'
import { HeaderData } from '../lib/data'
import { Search } from '../containers/Search'
import { FaRegUserCircle, FaHamburger } from 'react-icons/fa';
import {
    StyledHeader,
    Hamburger,
    NavLinks,
    HeaderWrapper,
    FirstWapper,
    MidWapper,
    LastWapper,
    AccountsButton,
    LogoWrapper
} from './styled/Header.styled'

/**
 * Header
 * @returns logo, search element, nav element, user account link
 */
export const Header: FC = () => {
    return (
        <HeaderWrapper data-testid="header">
            <StyledHeader>
                <FirstWapper>
                    <Hamburger>
                        <FaHamburger />
                    </Hamburger>
                    <LogoWrapper href="/">
                        <Logo hlg="32px" hbase="24px" />
                        <span className="visuallyhidden">Home page</span>
                    </LogoWrapper>
                </FirstWapper>

                <MidWapper>
                    {HeaderData.nav.map((data: Record<string, string>, idx: number) => {
                        return <NavLinks key={idx} href={data.link}>{data.name}</NavLinks>
                    })}
                </MidWapper>

                <LastWapper>
                    <Search />
                    <AccountsButton>
                        <FaRegUserCircle />
                        <span>{HeaderData.account.loginText}</span>
                    </AccountsButton>
                </LastWapper>
            </StyledHeader>
        </HeaderWrapper>
    )
}