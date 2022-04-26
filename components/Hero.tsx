import React, { useEffect } from 'react'
import type { FC } from 'react'
import { LinkButton } from './styled/LinkButton.styled'
import { HeroContainer } from './styled/Hero.styled'

interface HeroProps {
    id?: string
    image?: string
    category?: string
    name?: string
    excerpt?: string
    link?: string
}

/**
 * Hero
 * @param image, name, excerpt, link
 * @returns hero contents
 */
export const Hero: FC<HeroProps> = ({ image, name, excerpt, link }) => {
    return (
        <HeroContainer
            data-testid="hero"
            bgImage={image}>
            <div className='container'>
                <h3>{name}</h3>
                {excerpt && <p>{excerpt}</p>}
                <LinkButton
                    href={link}
                    type="button">
                    <span>{`Find tickets`}</span>
                </LinkButton>
            </div>
        </HeroContainer>
    )
}