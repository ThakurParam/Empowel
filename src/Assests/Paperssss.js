import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export const Paperssss = () => {
  return (
    <Paper
      elevation={5}
      sx={{ mt: 5, p: 3, width: "20%", borderRadius: "15px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2} md={2} lg={2}>
          <Box>
            <Avatar
              sx={{ width: "30%", height: "30%", p: 1, bgcolor: "#FAF3FF" }}
            >
              <HomeOutlinedIcon sx={{ fontSize: "50px", color: "black" }} />
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={10} md={10} lg={10}>
          <Box sx={{ textAlign: "start" }}>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "30px",
                    lineHeight: "39.09px",
                    color: "#000000",
                  }}
                >
                  Delivery Person
                </Typography>
              </Box>
              <Box>
                <ChevronRightOutlinedIcon />
              </Box>
            </Box>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: "25px",
                lineHeight: "32.57px",
                color: "#000000",
              }}
            >
              279 openings
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
