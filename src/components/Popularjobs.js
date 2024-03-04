import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import dollar from "../images/popjobs/dollar.png";
import globe from "../images/popjobs/global.png";
import logo from "../images/popjobs/logo.png";
import PopularCard from "../ui/popular-card";

export const Popularjobs = () => {
  return (
    <>
      <Box
        sx={{
          mt: 5,
          ".btn": {
            borderRadius: 10,
            px: 4,
            border: 0,
            py: 1,
            boxShadow: 0,
            textTransform: "capitalize",
            fontSize: "20px",
          },
          ".button": {
            mt: 5,
          },
          ".containerstack": {
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h1" component="h1">
            Popular Jobs
          </Typography>
        </Box>
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            spacing={3}
            className="containerstack"
          >
            {[...Array(4)].map((item, index) => (
              <PopularCard />
            ))}
          </Stack>
          {/* <Box sx={{ mt: 5 }}>
            <Grid container spacing={5}>
              {[...Array(4)].map((item, index) => (
                <Grid item xs={12} md={3} lg={3} key={index}>
                  <Card
                    sx={{ textAlign: "start", p: 4, borderRadius: "20px" }}
                    elevation={2}
                  >
                    <Box>
                      <img src={logo} alt="logo" />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: { lg: "25px", md: "25px", xs: "20px" },
                          lineHeight: "57.82px",
                          color: "#437C9E",
                        }}
                      >
                        Vyapar
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: { lg: "35px", md: "35px", xs: "25px" },
                          lineHeight: {
                            lg: "57.82px",
                            md: "57.82px",
                            xs: "10px",
                          },
                          color: "#000000",
                        }}
                      >
                        Finance Analyst
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: { lg: "25.3px", md: "25.3px", xs: "18px" },
                          lineHeight: "57.82px",
                          color: "#000000",
                        }}
                      >
                        Full Time
                      </Typography>
                      <Box
                        sx={{ display: "flex", mt: { lg: 2, md: 2, xs: 0 } }}
                      >
                        <img
                          src={dollar}
                          alt="dollar"
                          style={{ height: "10%" }}
                        />

                        <Box sx={{ mt: -1.5, ml: 1.5 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: {
                                lg: "25.3px",
                                md: "25.3px",
                                xs: "20px",
                              },
                              lineHeight: "57.82px",
                              color: "#000000",
                            }}
                          >
                            AED 4k - 5k pm
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <img
                          src={globe}
                          alt="globe"
                          style={{ height: "10%" }}
                        />
                        <Box sx={{ mt: -1.5, ml: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: {
                                lg: "25.3px",
                                md: "25.3px",
                                xs: "20px",
                              },
                              lineHeight: "57.82px",
                              color: "#000000",
                            }}
                          >
                            San Diego, CA
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box> */}
        </Container>
        <Box className="button">
          <Button variant="contained" className="btn">
            view all
          </Button>
        </Box>
      </Box>
    </>
  );
};
