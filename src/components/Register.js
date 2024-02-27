import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import com from "../images/Register/com.png";
import vector1 from "../images/Register/Vector1.png";
import vector2 from "../images/Register/Vector2.png";

export const Register = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#002161", mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Box>
              <img src={com} style={{ width: "100%", height: "100%" }}></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{ position: "relative" }}>
            <Box sx={{ textAlign: "start", mt: 16 }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "71.66px",
                    color: "#FFFFFF",
                  }}
                >
                  Register now and
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "71.66px",
                    color: "#FFFFFF",
                  }}
                >
                  let employers find you
                </Typography>
              </Box>
              <Box sx={{ width: "70%", mt: 4 }}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "31px",
                    lineHeight: "38px",
                    letterSpacing: "0.5%",
                    color: "#FFFFFF",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "45px",
                      lineHeight: "38px",
                      letterSpacing: "0.5%",
                      color: "#896DFF",
                    }}
                  >
                    60,000 professionals
                  </span>
                  get contacted by employers every month through
                </Typography>
              </Box>
              <Box sx={{ mt: 5 }}>
                <Button
                  sx={{ bgcolor: "#896DFF", textTransform: "none", p: 3 }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "35px",
                      lineHeight: "38px",
                      letterSpacing: "0.5%",
                      color: "#FFFFFF",
                    }}
                  >
                    Be the next one
                  </Typography>
                </Button>
                <Button
                  sx={{ background: "none", textTransform: "none", p: 3 }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "30px",
                      lineHeight: "38px",
                      letterSpacing: "0.5%",
                      color: "#FFFFFF",
                      borderBottom: "3px solid gray",
                    }}
                  >
                    Register for jobs
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box>
              <img
                src={vector1}
                style={{ position: "absolute", bottom: 0, right: 0 }}
              />
              <img
                src={vector2}
                style={{ position: "absolute", right: 0, bottom: 0 }}
              />
            </Box>
          </Grid>
        </Grid>
        <Container maxWidth="xl"></Container>
      </Box>
    </>
  );
};
