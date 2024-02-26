import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import dollar from "../images/popjobs/dollar.png";
import globe from "../images/popjobs/global.png";
import logo from "../images/popjobs/logo.png";
export const Cardsss = () => {
  return (
    <>
      <Card sx={{ textAlign: "start" }}>
        <Box>
          <img src={logo} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "57.82px",
              color: "#437C9E",
            }}
          >
            Vyapar
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "35px",
              lineHeight: "57.82px",
              color: "#000000",
            }}
          >
            Finance Analyst
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "25.3px",
              lineHeight: "57.82px",
              color: "#000000",
            }}
          >
            Full Time
          </Typography>
          <Box sx={{ display: "flex" }}>
            <img src={dollar} style={{ height: "10%" }} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "25.3px",
                lineHeight: "57.82px",
                color: "#000000",
              }}
            >
              AED 4k - 5k pm
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <img src={globe} style={{ height: "10%" }} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "25.3px",
                lineHeight: "57.82px",
                color: "#000000",
              }}
            >
              San Diego, CA
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};
