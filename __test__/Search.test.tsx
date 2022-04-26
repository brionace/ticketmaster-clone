import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Search } from '../containers/Search'

const MockSetup = () => {
    const searchbox = render(<Search />)
    const input = searchbox.getByTestId('searchinput')
    return {
      input,
      ...searchbox,
    }
  }

describe('Search', () => {
    it('renders form element', () => {
        render(<Search />)
        expect(screen.getByTestId('searchbox')).toBeInTheDocument()
        expect(screen.getByRole('search')).toBeInTheDocument()
    })
    it('does search and renders results list', () => {
        const { input } = MockSetup()
        fireEvent.change(input, {target: {value: 'hello'}})
        expect(input.value).toBe('hello')
        expect(screen.getByTestId('resultslist')).toBeInTheDocument()
    })
})