import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ellipse from "../images/trending0.png";
import { Avatar, Paper } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export const TrendingJobs = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${ellipse})`,

        backgroundPosition: " center right",
        backgroundRepeat: "no-repeat",
        p: 2,
      }}
    >
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography
          sx={{
            fontweight: 700,
            fontSize: { lg: "50px", md: "50px", xs: "40px" },
            lineHeight: { lg: "65.15px", md: "65.15px", xs: "50px" },
            color: "#000000",
          }}
        >
          Trending Job Role on Empowel
        </Typography>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Grid container sapcing={1}>
                {[...Array(4)].map((item, index) => (
                  <Grid item xs={12} md={3} lg={3} key={index}>
                    <Paper
                      elevation={5}
                      sx={{ mt: 5, p: 3, borderRadius: "15px", width: "80%" }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={2} md={2} lg={3}>
                          <Box>
                            <Avatar
                              sx={{
                                width: "90%",
                                height: "90%",
                                p: 1,
                                bgcolor: "#FAF3FF",
                              }}
                            >
                              <HomeOutlinedIcon
                                sx={{ fontSize: "35px", color: "black" }}
                              />
                            </Avatar>
                          </Box>
                        </Grid>
                        <Grid item xs={10} md={10} lg={10}>
                          <Box sx={{ textAlign: "start" }}>
                            <Box sx={{ display: "flex" }}>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: 500,
                                    fontSize: {
                                      lg: "30px",
                                      md: "30px",
                                      xs: "25px",
                                    },
                                    lineHeight: "39.09px",
                                    color: "#000000",
                                  }}
                                >
                                  Delivery Person
                                </Typography>
                              </Box>
                              <Box sx={{ mt: 1 }}>
                                <ChevronRightOutlinedIcon />
                              </Box>
                            </Box>
                            <Typography
                              sx={{
                                fontWeight: 300,
                                fontSize: "25px",
                                lineHeight: "32.57px",
                                color: "#000000",
                              }}
                            >
                              279 openings
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Grid container sapcing={2}>
                {[...Array(4)].map((item, index) => (
                  <Grid item xs={12} md={3} lg={3} key={index}>
                    <Paper
                      elevation={5}
                      sx={{ mt: 5, p: 3, width: "80%", borderRadius: "15px" }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={2} md={2} lg={2}>
                          <Box>
                            <Avatar
                              sx={{
                                width: "30%",
                                height: "30%",
                                p: 1,
                                bgcolor: "#FAF3FF",
                              }}
                            >
                              <HomeOutlinedIcon
                                sx={{ fontSize: "50px", color: "black" }}
                              />
                            </Avatar>
                          </Box>
                        </Grid>
                        <Grid item xs={10} md={10} lg={10}>
                          <Box sx={{ textAlign: "start" }}>
                            <Box sx={{ display: "flex" }}>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: 500,
                                    fontSize: {
                                      lg: "30px",
                                      md: "30px",
                                      xs: "25px",
                                    },
                                    lineHeight: "39.09px",
                                    color: "#000000",
                                  }}
                                >
                                  Delivery Person
                                </Typography>
                              </Box>
                              <Box sx={{ mt: 1 }}>
                                <ChevronRightOutlinedIcon />
                              </Box>
                            </Box>
                            <Typography
                              sx={{
                                fontWeight: 300,
                                fontSize: "25px",
                                lineHeight: "32.57px",
                                color: "#000000",
                              }}
                            >
                              279 openings
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ mb: 5, mt: 10 }}>
        <Button
          sx={{
            textTransform: "none",
            bgcolor: "#5A3ED1",
            borderRadius: "72px",
            padding: { lg: "20px", md: "20px", xs: "10px" },
            gap: "10px",
            transition: "none",
            px: { lg: 8, md: 0, xs: 8 },
          }}
        >
          <Typography
            sx={{
              fontweight: 700,
              fontSize: { lg: "30px", md: "30px", xs: "20px" },
              lineHeight: "39.09px",
              color: "#FFFFFF",
            }}
          >
            View All
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
