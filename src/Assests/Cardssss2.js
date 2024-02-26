import { Box, Card, Typography } from "@mui/material";
import React from "react";
import company from "../images/company.png";

export const Cardssss2 = () => {
  return (
    <>
      <Card sx={{ borderRadius: "20px", textAlign: "start", p: 5 }}>
        <Box>
          <img src={company} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "25px",
              lineHeight: "29.5px",
              letterSpacing: "2%",
              color: "#000000",
            }}
          >
            Bajaj Allianz
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: "20px",
              lineHeight: "25.66px",
              letterSpacing: "0.5%",
              color: "#000000",
            }}
          >
            Provider of life insurance and financial services.
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "19.44px",
              lineHeight: "22.93px",
              letterSpacing: "0.2%",
              color: "#000000",
            }}
          >
            View Jobs
          </Typography>
        </Box>
      </Card>
    </>
  );
};
