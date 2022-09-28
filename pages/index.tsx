import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { createTheme, Paper, Stack, ThemeProvider } from '@mui/material'
import Introduction from '../components/Introduction'

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#BCBCBD',
      secondary: '#C09144'
    },
    background: {
      default: '#2E2E35',
      paper: '#2E2E35'
    }
  }
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper className={styles.container}
        sx={{
          backgroundImage: 'none',
        }}
      >
        <Stack sx={{ width: "75%", p: 4 }}>
          <Navbar />
          <Introduction />
        </Stack>
      </Paper>
    </ThemeProvider>
  )
}

export default Home
