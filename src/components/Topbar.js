import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import empowel from "../images/empowel.png";

import { Mobiledrawer } from "../Assests/Mobiledrawer";

export const Topbar = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item md={8} lg={8}>
              <Grid container spacing={12}>
                <Grid item xs={2} md={2.5} lg={2.5}>
                  <img src={empowel} alt="header " className="imagetop" />
                </Grid>
                <Grid
                  item
                  xs={7}
                  md={7}
                  lg={7}
                  sx={{ display: { xs: "none", md: "none", lg: "block" } }}
                >
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
              <Box
                sx={{
                  mt: 2,
                  display: { xs: "none", md: "none", lg: "block" },
                }}
              >
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
        <Box
          sx={{
            display: { xs: "block", md: "block", lg: "none" },
            textAlign: "end",
            mt: { lg: 0, md: 0, xs: -6 },
          }}
        >
          {<Mobiledrawer />}
        </Box>
      </Container>
    </Card>
  );
};
