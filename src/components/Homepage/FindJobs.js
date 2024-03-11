import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { fxTitle } from "../../style/style";

export const FindJobs = () => {
  return (
    <Box
      sx={{
        py: 10,
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
          mt: 4,
        },
        ".imagebox": {
          position: "relative",
        },
        ".vector-1": {
          position: "absolute",
          height: "380px",
          top: 0,
          left: 0,
        },
        ".vector-2": {
          position: "absolute",
          top: 40,
          left: "7%",
          height: "300px",
          width: "auto",
        },
        ".vector-3": {
          position: "absolute",
          top: 90,
          left: "16%",
          height: "200px",
          width: "auto",
        },
        ".logo": {
          position: "absolute",
          top: 170,
          left: "28%",
          height: "60px",
          width: "auto",
        },
        ".dot": {
          position: "absolute",
          top: 140,
          left: "32%",
          height: "25px",
          width: "auto",
        },
      }}
    >
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Box className="imagebox">
              <img
                src="/images/jobcircle1.png"
                alt="vector1"
                className="vector-1"
              />
              <img
                src="/images/jobcircle2.png"
                alt="vector2"
                className="vector-2"
              />
              <img
                src="/images/jobcircle3.png"
                alt="vector3"
                className="vector-3"
              />
              <img src="/images/jobm.png" alt="logo" className="logo" />
              <img src="/images/jobdot.png" alt="logo-dot" className="dot" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={fxTitle}
                variant="h2"
                component="h2"
                className="fx-title"
              >
                Find jobs with employers across the globe
              </Typography>
              <Typography variant="h5" component="h5">
                Get matched with remote, hybrid or on-site jobs that are aligned
                with your experience, goals & preferences and receive job
                proposals from the world's fastest growing companies.
              </Typography>
              <Box className="button">
                <Button variant="contained" className="btn">
                  submit your CV
                </Button>
              </Box>{" "}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
