import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SouthIcon from "@mui/icons-material/South";
import Styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { GitHub } from "@mui/icons-material";

export default function Navbar() {
  const router = useRouter();
  return (
    <AppBar
      position="static"
      sx={{
        sm: { display: "none" },
        boxShadow: "none",
        py: 6,
        alignItems: "center",
        backgroundImage: "none",
        bgcolor: "background.default",
        scrollBehavior: "smooth",
      }}
      style={{ backgroundColor: "transparent" }}
    >
      <Toolbar
        sx={{
          width: "75%",
        }}
      >
        <Typography
          variant="h6"
          component={"div"}
          sx={{
            flexGrow: 1,
          }}
        >
          <Button
            href="!#"
            className={Styles.menuArea}
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              fontSize: "2rem",
              p: "0",
              ":hover": {
                bgcolor: "background.default",
              },
            }}
          >
            NH
          </Button>
          <Typography
            component={"p"}
            sx={{
              flexGrow: 1,
              bgcolor: "text.secondary",
              display: "inline-block",
              height: "0.5rem",
              width: "0.5rem",
              borderRadius: "10rem",
            }}
          ></Typography>
        </Typography>
        <Stack direction={"row"}>
          <Stack direction={"row"} spacing={2} sx={{ pr: 2 }}>
            <Button
              onClick={() => {
                router.push({
                  pathname: "/",
                });
              }}
              className={Styles.menuArea}
              sx={{
                fontSize: "1rem",
                color: "text.primary",
                fontWeight: "bold",
                textTransform: "inherit",
                ":hover": {
                  bgcolor: "background.default",
                },
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                router.push({
                  pathname: "/",
                  hash: "portfolio",
                });
              }}
              className={Styles.menuArea}
              sx={{
                fontSize: "1rem",
                color: "text.primary",
                fontWeight: "bold",
                textTransform: "inherit",
                scrollBehavior: "smooth",
                ":hover": {
                  bgcolor: "background.default",
                },
              }}
            >
              Portfolio
            </Button>
            <Button
              className={Styles.menuArea}
              onClick={() => {
                router.push({
                  pathname: "/",
                  hash: "blogs",
                });
              }}
              sx={{
                fontSize: "1rem",
                color: "text.primary",
                fontWeight: "bold",
                textTransform: "inherit",
                ":hover": {
                  bgcolor: "background.default",
                },
              }}
              endIcon={<SouthIcon />}
            >
              Blog
            </Button>
            <Button
              onClick={() => {
                router.push({
                  pathname: "/",
                  hash: "contact",
                });
              }}
              className={Styles.menuArea}
              sx={{
                fontSize: "1rem",
                color: "text.primary",
                fontWeight: "bold",
                textTransform: "inherit",
                ":hover": {
                  bgcolor: "background.default",
                },
              }}
            >
              Contact
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            spacing="3"
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              mr: 2,
              alignItems: "center",
              borderLeft: 1,
              pl: 2,
            }}
          >
            <Typography component={"p"}>
              <IconButton
                component={"a"}
                href="https://www.facebook.com/neamul.haque.1614"
                target={"_blank"}
                className={Styles.menuArea}
                sx={{
                  pr: 1,
                  fontSize: "1rem",
                  color: "text.primary",
                  fontWeight: "bold",
                  display: "inline-block",
                  padding: "0",
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Typography>
            <Typography component="p">
              <IconButton
                className={Styles.menuArea}
                component={"a"}
                href="https://www.linkedin.com/in/neamul62/"
                target="_blanck"
                size="small"
                sx={{
                  mx: "0.6rem !important",
                  fontSize: "1rem",
                  color: "text.primary",
                  fontWeight: "bold",
                  display: "inline-block",
                  padding: "0",
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Typography>
            <Typography component={"p"}>
              <IconButton
                className={Styles.menuArea}
                component={"a"}
                href="https://github.com/Neamul01"
                target="_blank"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  display: "inline-block",
                  padding: "0",
                }}
              >
                <GitHub />
              </IconButton>
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
