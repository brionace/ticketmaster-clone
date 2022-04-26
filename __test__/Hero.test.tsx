import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Hero } from '../components/Hero'

const MockHeroProps = {
    id: '', 
    image: '', 
    category: '', 
    name: '', 
    link: ''
}

describe('Hero', () => {
    it('renders hero component', () => {
        render(<Hero {...MockHeroProps} />)
        expect(screen.getByTestId('hero')).toBeInTheDocument()
    })
})