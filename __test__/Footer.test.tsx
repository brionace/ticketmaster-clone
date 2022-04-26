import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '../components/Footer'

describe('Footer', () => {
    // const FooterData = {
    //     social: []
    // }

    it('renders footer component', () => {
        render(<Footer />)
        expect(screen.getByTestId('footer')).toBeInTheDocument()
        expect(screen.getByText(/by continuing past this page/i)).toBeTruthy()
        expect(screen.getByTestId('footerpagelinks')).toBeInTheDocument()
        expect(screen.getByTestId('footerapplinks')).toBeInTheDocument()
        expect(screen.getByTestId('footerdoclinks')).toBeInTheDocument()
    })
})