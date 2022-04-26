import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import styled from 'styled-components'
import { Logo } from '../components/Logo'

const Container = styled.svg`
  path {
    fill: white
  }
`

describe('Logo', () => {
    it('renders svg/logo component', () => {
        const { container } = render(
            <Container>
                <Logo />
            </Container>
        )
        expect(container.querySelector('svg')).toBeInTheDocument()
    })
})