import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import SearchIcon from "@mui/icons-material/Search";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

export const Services = () => {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: "background.paper",
        backgroundImage: "none",
        // display: 'flex',
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
          Services
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
          }}
        >
          My Services
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
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </Typography>
      </Stack>
      <Grid
        container
        spacing={2}
        sx={{
          flexGrow: "1",
          my: "4rem",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* first service  */}
        <Paper
          sx={{
            height: "285px",
            width: "255px",
            backgroundColor: "background.default",
            backgroundImage: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton
            sx={{
              ":hover": {
                bgcolor: "background.default",
              },
            }}
          >
            <CodeIcon
              sx={{
                fontSize: "3.75rem",
                color: "text.secondary",
              }}
            />
          </IconButton>
          <Stack component={"div"}>
            <Typography
              component={"h4"}
              sx={{
                fontSize: "1.5rem",
                lineHeight: 1.2,
                pb: "0.6rem",
              }}
            >
              Web Developer
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "26px",
                textAlign: "center",
              }}
            >
              120 projects
            </Typography>
          </Stack>
        </Paper>

        {/* second service  */}
        <Paper
          sx={{
            height: "285px",
            width: "255px",
            backgroundColor: "background.default",
            backgroundImage: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton
            sx={{
              ":hover": {
                bgcolor: "background.default",
              },
            }}
          >
            <CodeIcon
              sx={{
                fontSize: "3.75rem",
                color: "text.primary",
              }}
            />
          </IconButton>
          <Stack component={"div"}>
            <Typography
              component={"h4"}
              sx={{
                fontSize: "1.5rem",
                lineHeight: 1.2,
                pb: "0.6rem",
              }}
            >
              Web Developer
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "26px",
                textAlign: "center",
              }}
            >
              120 projects
            </Typography>
          </Stack>
        </Paper>

        {/* third service  */}
        <Paper
          sx={{
            height: "285px",
            width: "255px",
            backgroundColor: "background.default",
            backgroundImage: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton
            sx={{
              ":hover": {
                bgcolor: "background.default",
              },
            }}
          >
            <SearchIcon
              sx={{
                fontSize: "3.75rem",
                color: "text.secondary",
              }}
            />
          </IconButton>
          <Stack component={"div"}>
            <Typography
              component={"h4"}
              sx={{
                fontSize: "1.5rem",
                lineHeight: 1.2,
                pb: "0.6rem",
              }}
            >
              Web Developer
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "26px",
                textAlign: "center",
              }}
            >
              120 projects
            </Typography>
          </Stack>
        </Paper>

        {/* fourth service  */}
        <Paper
          sx={{
            height: "285px",
            width: "255px",
            backgroundColor: "background.default",
            backgroundImage: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton
            sx={{
              ":hover": {
                bgcolor: "background.default",
              },
            }}
          >
            <SignalCellularAltIcon
              sx={{
                fontSize: "3.75rem",
                color: "text.primary",
              }}
            />
          </IconButton>
          <Stack component={"div"}>
            <Typography
              component={"h4"}
              sx={{
                fontSize: "1.5rem",
                lineHeight: 1.2,
                pb: "0.6rem",
              }}
            >
              Web Developer
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "26px",
                textAlign: "center",
              }}
            >
              120 projects
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    </Stack>
  );
};
