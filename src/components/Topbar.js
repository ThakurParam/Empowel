import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import empowel from "../images/empowel.png";

export const Topbar = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item md={8} lg={8}>
              <Grid container spacing={12}>
                <Grid item xs={2} md={2.5} lg={2.5}>
                  <img src={empowel} />
                </Grid>
                <Grid item xs={7} md={7} lg={7}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Find Jobs
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Employers
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Mentor
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Companies
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Blog
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={8} lg={4}>
              <Box sx={{ mt: 2 }}>
                <Button>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "26.06px",
                      color: "#5A3ED1",
                      textTransform: "none",
                    }}
                  >
                    Log In
                  </Typography>
                </Button>
                <Button sx={{ bgcolor: "#5A3ED1" }}>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "26.06px",
                      textTransform: "none",
                    }}
                  >
                    Register
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
