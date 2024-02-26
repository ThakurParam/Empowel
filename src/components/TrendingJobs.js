import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const TrendingJobs = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontweight: 700,
            fontSize: "50px",
            lineHeight: "65.15px",
            color: "#000000",
          }}
        >
          Trending Job Role on Empowel
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Grid container sapcing={2}>
                <Grid item xs={3} md={3} lg={3}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12}></Grid>
          </Grid>
        </Box>
      </Container>
      <Box>
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
  );
};
