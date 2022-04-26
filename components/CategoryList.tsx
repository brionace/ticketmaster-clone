import type { FC } from 'react'
import type { EventProp } from '../lib/common-types'
import {
    CategoryA,
    CategoryUL,
    CategorySpan,
    DiscoverMoreButton,
    H2
}
    from './styled/CategoryList.styled'
import { BiChevronRight } from 'react-icons/bi';
import Image from 'next/image'

/**
 * CategoryList
 * @param title, content, cols
 * @returns list of events by category
 */
export const CategoryList: FC<EventProp> = ({ title, content, cols }) => {
    // Only show categories if they are available
    // TODO: implement a suitable fallback
    if(!content.length) return null
    return (
        <section data-testid="categorylist">
            {title && <H2>{title}</H2>}
            <CategoryUL col={cols}>
                {content.map((item: Record<string, string>, idx: number) => (
                    <li key={idx}>
                        <CategoryA href="#">
                            <div>
                                <div className='image_preview' style={{ backgroundImage: item.image }}>
                                    <Image
                                        src={item.image}
                                        alt=''
                                        layout='fill'
                                    />
                                    <BiChevronRight />
                                </div>
                            </div>
                            <CategorySpan>{item.category}</CategorySpan>
                            <h3>{item.name}</h3>
                            {item.excerpt && <p>{item.excerpt}</p>}
                            {(title && title.toLowerCase() === 'discover') && <DiscoverMoreButton>Discover More</DiscoverMoreButton>}
                        </CategoryA>
                    </li>
                ))}
            </CategoryUL>
        </section>
    )
}