import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import jobs from "../images/jobs.png";

export const FindJobs = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} lg={6}>
            <Box>
              <img src={jobs} style={{ width: "100%", height: "100%" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ textAlign: "start", mt: 7 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "50px",
                  lineHeight: "59px",
                  letterSpacing: "2%",
                }}
              >
                Find jobs with employers across the globe
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "30px",
                  lineHeight: "48px",
                  letterSpacing: "0.5%",
                }}
              >
                Get matched with remote, hybrid or on-site jobs that are aligned
                with your experience, goals & preferences and receive job
                proposals from the world's fastest growing companies.
              </Typography>
              <Box sx={{ textAlign: "start", mt: 5 }}>
                <Button sx={{ bgcolor: "#5A3ED1", borderRadius: "15px" }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "30px",
                      lineHeight: "39.09px",
                      textTransform: "none",
                      color: "white",
                    }}
                  >
                    Submit your CV
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
