import { FourGPlusMobiledataOutlined } from "@mui/icons-material";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

export default function Dreamjob() {
  return (
    <Box
      sx={{
        ".head-box": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        },
        ".img-box": {
          height: "50px",
          width: "50px",
          borderRadius: "50px",
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".typo": {
          fontFamily: "Hanken Grotesk",
          fontWeight: 800,
        },
        ".card-box": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        ".gap-box": {
          borderTop: "2px solid black",
          width: "100px",
          my: "auto",
        },
        ".head-card": {
          fontSize: "25px",
          fontWeight: 700,
          fontFamily: "Hanken Grotesk",
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          my: 4,
          py: 2,
          borderRadius: 8,
          background: "linear-gradient(to right, #FFA800, white)",
        }}
      >
        <Box className="head-box">
          <Typography className="head-card">
            Get Your Dream Job in just 3 Simple steps🥳
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Stack direction={"row"} spacing={2}>
            <Box className="card-box">
              <Box className="img-box">
                <FourGPlusMobiledataOutlined />
              </Box>
              <Typography className="typo">Apply for Job</Typography>
            </Box>

            <Box className="gap-box"></Box>

            <Box className="card-box">
              <Box className="img-box">
                <FourGPlusMobiledataOutlined />
              </Box>
              <Typography className="typo">Create Profile</Typography>
            </Box>
            <Box className="gap-box"></Box>
            <Box className="card-box">
              <Box className="img-box">
                <FourGPlusMobiledataOutlined />
              </Box>
              <Typography className="typo">Schedule Interview</Typography>
            </Box>
            <Box className="gap-box"></Box>
            <Box className="card-box">
              <Box className="img-box">
                <FourGPlusMobiledataOutlined />
              </Box>
              <Typography className="typo">Get Hired</Typography>
            </Box>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
}
