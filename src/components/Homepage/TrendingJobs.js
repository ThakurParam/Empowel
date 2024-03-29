import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

import TrendingCard from "../../ui/Homepagecards/trending-card";

export const TrendingJobs = () => {
  return (
    <Box
      sx={{
        h2: {
          mb: 4,
        },

        ".btn": {
          borderRadius: 10,
          px: 4,
          border: 0,
          mt: 4,
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
      <Container>
        <Typography variant="h2" component="h2" textAlign={"center"}>
          Trending Job Role on Empowel
        </Typography>
        <Grid container spacing={1.5}>
          {[...Array(8)].map((item, index) => (
            <Grid item md={3} xs={12} sm={6} key={index}>
              <TrendingCard />
            </Grid>
          ))}
        </Grid>
        <Box textAlign={"center"}>
          <Button variant="contained" className="btn">
            view all
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
