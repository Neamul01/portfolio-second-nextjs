import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useState } from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { bgcolor, Box } from "@mui/system";
import styles from "./portfolio.module.css";

export const Portfolio = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack
      id="portfolio"
      direction="column"
      sx={{
        backgroundColor: "background.paper",
        backgroundImage: "none",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        width: "100%",
        padding: "7.5rem",
      }}
    >
      <Stack
        component={"div"}
        direction="column"
        sx={{
          maxWidth: "50%",
          alignItems: "center",
        }}
      >
        <Typography
          component={"p"}
          sx={{
            backgroundColor: "background.paper",
            backgroundImage: "none",
            color: "text.secondary",
            fontSize: "0.9rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".12em",
          }}
        >
          Portfolio
        </Typography>
        <Typography
          component={"h2"}
          sx={{
            backgroundColor: "background.paper",
            backgroundImage: "none",
            marginBottom: "11px",
            fontSize: "35px",
            lineHeight: "45px",
            color: "text.primary",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          My Masterpiece Collection
        </Typography>
        <Typography
          component={"div"}
          sx={{
            maxWidth: "70%",
            backgroundColor: "background.paper",
            backgroundImage: "none",
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "26px",
            color: "text.primary",
            textAlign: "center",
          }}
        >
          Here are my best projects. All are not done yet something is under
          construction, and I am working with them. If you have any suggestions
          please share them with me.
        </Typography>
      </Stack>
      <Stack
        spacing={4}
        sx={{
          alignItems: "center",
          my: "4rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <ImageList
            cols={3}
            variant="masonry"
            gap={12}
            sx={{
              cursor: "pointer",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "3px",
              width: "100%",
            }}
          >
            {itemData.map((item, index) => (
              <ImageListItem
                key={index}
                cols={1}
                rows={1}
                sx={{
                  gridColumn: "span 1",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Typography
                  component="a"
                  href={item.url}
                  target="_blanck"
                  sx={{
                    position: "relative",
                  }}
                >
                  <div
                    className={styles.portfolioGalleryParent}
                    style={{
                      height: 400,
                      width: 400,
                    }}
                  >
                    <Image fill src={item.img} alt={item.title} />
                    <div
                      className={styles.portfolioGallery}
                      style={{ height: 400, width: 400 }}
                    >
                      <Image src={"/projects/zoom.svg"} fill alt="zoom" />
                    </div>
                  </div>
                  <ImageListItemBar
                    title={item.title}
                    className={styles.portfolioTitleBar}
                  ></ImageListItemBar>
                </Typography>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Stack>
  );
};
const itemData = [
  {
    img: "/projects/breezeTime.png",
    title: "BreezeTime",
    url: "https://breeze-time.netlify.app/",
  },
  {
    img: "/projects/Luxify.png",
    title: "Luxify",
    url: "https://e-commerce-luxify.vercel.app/",
  },
  {
    img: "/projects/flavor-fusion.png",
    title: "Flavor Fusion",
    url: "https://flavor-fusion-noman.vercel.app/",
  },
];
