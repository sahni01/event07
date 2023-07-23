import AppContextProvider from '@/contexts';
import DefaultLayout from '@/layouts/default-layout'
import '@/styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'
import 'react-multi-carousel/lib/styles.css';

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
    },
    components: {
      MuiIcon: {
        defaultProps: {
          // Replace the `material-icons` default value.
          baseClassName: 'material-icons',
        },
      },
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
