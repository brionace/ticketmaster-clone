import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'

const theme = {
    colors: {
        header: {
            bg: ""
        }
    },
}

describe('Header', () => {
    it('renders header component', () => {
        render(
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
        )
        expect(screen.getByTestId('header')).toBeInTheDocument()
    })
})