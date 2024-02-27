import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import dollar from "../images/popjobs/dollar.png";
import globe from "../images/popjobs/global.png";
import logo from "../images/popjobs/logo.png";

export const Popularjobs = () => {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "50px",
              lineHeight: "65.15px",
              color: "#000000",
            }}
          >
            Popular Jobs
          </Typography>
        </Box>
        <Container maxWidth="xl">
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={5}>
              {[...Array(4)].map(() => (
                <Grid item xs={12} md={3} lg={3}>
                  <Card
                    sx={{ textAlign: "start", p: 4, borderRadius: "20px" }}
                    elevation={2}
                  >
                    <Box>
                      <img src={logo} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "25px",
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
                          fontSize: "35px",
                          lineHeight: "57.82px",
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
                          fontSize: "25.3px",
                          lineHeight: "57.82px",
                          color: "#000000",
                        }}
                      >
                        Full Time
                      </Typography>
                      <Box sx={{ display: "flex", mt: 2 }}>
                        <img src={dollar} style={{ height: "10%" }} />

                        <Box sx={{ mt: -1.5, ml: 1.5 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "25.3px",
                              lineHeight: "57.82px",
                              color: "#000000",
                            }}
                          >
                            AED 4k - 5k pm
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <img src={globe} style={{ height: "10%" }} />
                        <Box sx={{ mt: -1.5, ml: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "25.3px",
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
          </Box>
        </Container>
        <Box sx={{ mt: 5 }}>
          <Button
            sx={{
              textTransform: "none",
              bgcolor: "#5A3ED1",
              borderRadius: "72px",
              padding: "20px",
              gap: "10px",
              transition: "none",
            }}
          >
            <Typography
              sx={{
                fontweight: 700,
                fontSize: "30px",
                lineHeight: "39.09px",
                color: "#FFFFFF",
              }}
            >
              View All
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};
