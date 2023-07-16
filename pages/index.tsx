import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { createTheme, Paper, Stack, ThemeProvider } from "@mui/material";
import Introduction from "../components/Introduction";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { Blogs } from "../components/Blogs/Blogs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#DADADA",
      secondary: "#D7A147",
    },
    background: {
      default: "#2E2E35",
      paper: "#34343B",
    },
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        className={styles.container}
        sx={{
          backgroundImage: "none",
          backgroundColor: "background.default",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
          }}
        >
          <Navbar />
          <Introduction />
          <Portfolio />
          {/* <Services /> */}
          <Blogs />
          <Contact />
          <Footer />
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

export default Home;
