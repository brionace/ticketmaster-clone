import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CategoryList } from '../components/CategoryList'
// import type { Event } from '../lib/common-types'
// import { link } from 'fs/promises'

const MockCategoryProps = {
    title: '', 
    content: [{id: '', name: '', category: '', excerpt: '', image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/Feeder_260222.jpeg', link: ''}], 
    cols: '1'
}

describe('Hero', () => {
    it('renders hero component', () => {
        render(<CategoryList {...MockCategoryProps} />)
        expect(screen.getAllByRole('list')).toBeTruthy()
    })
})