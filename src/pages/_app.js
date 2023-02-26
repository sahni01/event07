import AppContextProvider from '@/contexts';
import DefaultLayout from '@/layouts/default-layout'
import '@/styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }) {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff1616'
      },
      secondary: {
        main: '#fff'
      },
      accent:{
        main: '#ff1616',
      }
    }
  });

  return (
    <>
    <AppContextProvider>
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
    </AppContextProvider>
    </>
  )
}
