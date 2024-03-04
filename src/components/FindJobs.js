import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import jobs from "../images/jobs.png";

export const FindJobs = () => {
  return (
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
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} lg={6}>
            <Box>
              <img
                src={jobs}
                alt="job "
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ textAlign: "start", mt: 7 }}>
              <Typography variant="h1" component="h1">
                Find jobs with employers across the globe
              </Typography>
              <Typography variant="h4" component="h4">
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
