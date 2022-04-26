import React from 'react'
import type { FC } from 'react'
import { Logo } from './Logo'
import { Flex } from './styled/Flex.styled'
import { UL } from './styled/UL.styled'
import { FlexContainer } from './styled/FlexContainer.styled'
import { Container } from './styled/Container.styled'
import { FooterData } from '../lib/data'
import {
    StyledFooter,
    SocialWrapper,
    SocialContainer,
    SocialIconContainer,
    SocialIcon,
    PageLinks,
    OurNetwork,
    FooterInfo
}
    from './styled/Footer.styled'

/**
 * Footer
 * @returns footer component and contents
 */
export const Footer: FC = () => {
    return (
        <StyledFooter data-testid="footer">
            <FlexContainer pb="40px">
                <SocialWrapper>
                    <Logo hlg="32px" hbase="24px" wbase='auto' />
                    {(FooterData.social) &&
                        (
                            <SocialContainer>
                                <h3>Let&apos;s connect</h3>
                                {FooterData.social.map((item: Record<string, string>, idx: number) =>
                                (
                                    <SocialIconContainer key={idx} href={item.link}>
                                        <SocialIcon src={item.icon} alt={item.title} title={item.title} h="24px" />
                                    </SocialIconContainer>
                                ))}
                            </SocialContainer>
                        )}
                    {FooterData.apps &&
                        (
                            <SocialContainer>
                                <h3>Let&apos;s connect</h3>
                                {FooterData.apps.map((item: Record<string, string>, idx: number) => (
                                    <SocialIconContainer key={idx} href={item.link}>
                                        <SocialIcon src={item.icon} alt={item.title} title={item.title} h="38px" />
                                    </SocialIconContainer>
                                ))}
                            </SocialContainer>
                        )}
                    <p dangerouslySetInnerHTML={{ __html: FooterData.termsinfo.blurb }} />
                </SocialWrapper>
                <Flex data-testid="footerpagelinks">
                    {FooterData.pagelinks &&
                        (
                            FooterData.pagelinks.map((item, idx: number) => (
                                <PageLinks key={idx}>
                                    <h3>{item.title}</h3>
                                    <UL>
                                        {item.pages.map((item, idx) => <li key={idx}><a href={item.link}>{item.name}</a></li>)}
                                    </UL>
                                </PageLinks>
                            ))
                        )}
                </Flex>
            </FlexContainer>

            <Container><hr /></Container>

            <Container data-testid="footerapplinks">
                {FooterData.apps &&
                    (
                        <OurNetwork>
                            <h3>Our network</h3>
                            <div>
                                {FooterData.ournetwork.map((item: Record<string, string>, idx: number) => (
                                    <SocialIconContainer key={idx} href={item.link}>
                                        <SocialIcon src={item.icon} alt={item.title} title={item.title} h="16" />
                                    </SocialIconContainer>
                                ))}
                            </div>
                        </OurNetwork>
                    )}
            </Container>

            <Container><hr /></Container>

            <FlexContainer alignItems="center" pb="40px">
                <FooterInfo data-testid="footerdoclinks">
                    {FooterData.infolinks &&
                        (
                            FooterData.infolinks.map((item, idx: number) => (
                                <a key={idx} href={item.link}>{item.name}</a>
                            ))
                        )}
                </FooterInfo>
                <FooterInfo>
                    <p>&copy; 1999-2022 Ticketmaster. All rights reserved.</p>
                </FooterInfo>
            </FlexContainer>
        </StyledFooter>
    )
}