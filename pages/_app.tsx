import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/styled/Global'

const theme = {
  colors: {
    header: {
      bg: 'rgb(2, 108, 223)',
      bgImage: 'linear-gradient(90deg, rgb(1, 80, 167), rgb(2, 108, 223), rgb(1, 80, 167))',
      color: 'white'
    },
    body: '',
    footer: ''
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
