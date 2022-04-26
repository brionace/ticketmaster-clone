import type { NextPage } from 'next'
import type { EventsProps } from '../lib/common-types'
import Head from 'next/head'
import { fetchEvents } from '../lib/fetch-requests'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { CategoryList } from '../components/CategoryList'
import { FlexContainer } from '../components/styled/FlexContainer.styled'
import { HomeMain, HomeAside } from '../components/styled/Index.styled'

/**
 * Home
 * @returns home page
 */
const Home: NextPage = () => {
  const [events, setEvents] = useState<EventsProps>([])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    getEvents()
  }, [])

  // Gets and set events in state
  const getEvents = async () => {
    const results = await fetchEvents()

    if (results.isError === true) {
      setError(results.isError)
      return false
    }

    setEvents(results.events)
  }

  // Declare heroprops 
  const heroprops = events[1] ? events[3].content[2] : null

  // TODO: use better error handling
  if (error) {
    return <p>Something terrible happened, please reload.</p>
  }

  return (
    <div>
      <Head>
        <title>Ticketmaster - Clone</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero {...heroprops} />

      <FlexContainer>
        <HomeMain>
          {events.map((event, idx) => {
            if (event.title === 'Featured') return null
            let col = "2"
            if (idx === 1) col = "5"
            if (idx === 2) col = "3"

            return (
              <CategoryList key={idx} {...event} cols={col} />
            )
          })}
        </HomeMain>
        <HomeAside>
          {events.map((event, idx) => {
            if (event.title === 'Featured')
              return (
                <CategoryList key={idx} {...event} />
              )
          })}
        </HomeAside>
      </FlexContainer>

      <Footer />
    </div>
  )
}

export default Home