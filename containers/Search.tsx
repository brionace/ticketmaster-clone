import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import { SearchFormWrapper, ResultsList } from './styled/Search.styled'
import { GrSearch } from 'react-icons/gr'
import { fetchEventsBySearch } from '../lib/fetch-requests'

interface ResultsProp {
    id: string
    category: string
    image: string
    link: string
    name: string
}

/**
 * Search
 * @returns search form, search results
 */
export const Search: FC = () => {
    const [searchresults, setSearchResults] = useState<[]>([])
    const [searchterm, setSearchTerm] = useState<string>('')
    const placeholderText = 'Search by Artist, Event, or Venue'

    useEffect(() => {
        getSearchResults()
    }, [searchterm])

    // Fetches search results from api and sets in state
    const getSearchResults = async () => {
        const results = await fetchEventsBySearch()
        setSearchResults(results.events)
    }

    // Returns a list of filtered search results
    const seachResultList = () => {
        // Only show search list if there has been a search
        // TODO: implement a suitable fallback
        if (!searchterm.length) return null

        // Filter api results for search term
        let results: ResultsProp[] = []
        if(searchterm.length > 1){
            results = searchresults.filter((result: ResultsProp) => result.name.includes(searchterm))
        }

        // Show appropriate results title
        const _title = results.length ? "Search suggestions" : "No results found"
        const title = searchterm.length <= 1 ? "Type atleast two characters" : _title

        return (
            <ResultsList data-testid="resultslist">
                <h4>{title}</h4>
                <ul role="listbox">
                    {
                        results.map((result: ResultsProp, idx: number) => (
                            <li key={idx}>
                                <a href="#">{result.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </ResultsList>
        )
    }

    return (
        <SearchFormWrapper data-testid="searchbox">
            <form role="search">
                <div className="container">
                    <input
                        data-testid="searchinput"
                        type="text"
                        name="q"
                        aria-label={placeholderText}
                        aria-autocomplete="list"
                        placeholder={placeholderText}
                        autoComplete='off'
                        autoCorrect='off'
                        spellCheck={false}
                        onChange={(event: React.ChangeEvent<{ value: string }>) => setSearchTerm(event.target.value.trim())}
                    />
                    <button><GrSearch /></button>
                    {seachResultList()}
                </div>
            </form>
        </SearchFormWrapper>
    )
}
