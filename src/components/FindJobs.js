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
                  fontSize: { lg: "50px", md: "50px", xs: "40px" },
                  lineHeight: { lg: "59px", md: "59px", xs: "40px" },
                  letterSpacing: "2%",
                }}
              >
                Find jobs with employers across the globe
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { lg: "30px", md: "30px", xs: "20px" },
                  lineHeight: { lg: "48px", md: "48px", xs: "30px" },
                  letterSpacing: "0.5%",
                  mt: { xs: 3, md: 0, lg: 0 },
                }}
              >
                Get matched with remote, hybrid or on-site jobs that are aligned
                with your experience, goals & preferences and receive job
                proposals from the world's fastest growing companies.
              </Typography>
              <Box sx={{ textAlign: "start", mt: 5 }}>
                <Button
                  sx={{
                    bgcolor: "#5A3ED1",
                    borderRadius: "15px",
                    px: { lg: 0, md: 0, xs: 8 },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { lg: "30px", md: "30px", xs: "15px" },
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
