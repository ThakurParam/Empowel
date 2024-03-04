import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ellipse from "../images/trending0.png";
import { Avatar, Paper } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import TrendingCard from "../ui/trending-card";

export const TrendingJobs = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${ellipse})`,

        backgroundPosition: " center right",
        backgroundRepeat: "no-repeat",
        p: 2,
        ".containerstack": {
          alignItems: "center",
          justifyContent: "center",
        },
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
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h1" component="h1">
          Trending Job Role on Empowel
        </Typography>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Stack direction={"row"} flexWrap={"wrap"} className="containerstack">
          {[...Array(4)].map((item, index) => (
            <TrendingCard />
          ))}
        </Stack>
        <Stack direction={"row"} flexWrap={"wrap"} className="containerstack">
          {[...Array(4)].map((item, index) => (
            <TrendingCard />
          ))}
        </Stack>
      </Container>
      <Box className="button">
        <Button variant="contained" className="btn">
          view all
        </Button>
      </Box>
    </Box>
  );
};
