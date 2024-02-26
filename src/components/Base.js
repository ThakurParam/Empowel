import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import empowel from "../images/Baseimage/E POWEL.png";
import m from "../images/Baseimage/m.png";
import twitter from "../images/Baseimage/logo-twitter.png";
import facebook from "../images/Baseimage/Path.png";
import instagram from "../images/Baseimage/logo-instagram.png";
import linkedin from "../images/Baseimage/logo-linkedin.png";
export const Base = () => {
  return (
    <Box sx={{ bgcolor: "#161C2D", pt: 15 }}>
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "45.35px",
                    lineHeight: "52.73px",
                    letterSpacing: "-1.44px",
                  }}
                >
                  Ready to realise your true potential?
                </Typography>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 400,
                    fontSize: "30.77px",
                    lineHeight: "46px",
                    letterSpacing: "-0.24px",
                  }}
                >
                  70% techies find their perfect opportunities within 10 days on
                  Cutshort.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <Button
                  sx={{
                    bgcolor: "#896DFF",
                    textTransform: "none",
                    borderRadius: "50px",
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 400,
                      fontSize: "22.64px",
                      lineHeight: "42.61px",
                      letterSpacing: "-0.8px",
                      textAlign: "center",
                    }}
                  >
                    Register your profile
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ mt: 10 }}>
        <Container maxWidth="xl">
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} lg={4}>
                <Box sx={{ position: "relative", textAlign: "start" }}>
                  <img src={empowel} />
                  <img
                    src={m}
                    style={{ position: "absolute", top: -22, left: 24 }}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: "start",
                    display: "flex",
                    mt: 4,
                  }}
                >
                  <img src={twitter} />
                  <img src={facebook} style={{ marginLeft: "35px" }} />
                  <img src={instagram} style={{ marginLeft: "35px" }} />
                  <img src={linkedin} style={{ marginLeft: "35px" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={3} lg={2.5}>
                <Box sx={{ textAlign: "start" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    About us{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Careers{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Employer home{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Sitemap{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    Credits
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} lg={2.5}>
                <Box sx={{ textAlign: "start" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Help center{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Summons/{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Notices{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Grievances{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Report issue{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} lg={2.5}>
                <Box sx={{ textAlign: "start" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Privacy policy
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Terms & conditions{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Fraud alert{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "25.37px",
                      lineHeight: "52px",
                      letterSpacing: "-0.24px",
                      color: "white",
                    }}
                  >
                    {" "}
                    Trust & safety
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
