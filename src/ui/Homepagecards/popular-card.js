import {
  CurrencyExchangeOutlined,
  LanguageOutlined,
} from "@mui/icons-material";
import { Box, Card, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

export default function PopularCard({
  image,
  name,
  tittle,
  schedule,
  wages,
  location,
}) {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 4,
          boxShadow: "0px 5px 10px rgb(0,0,0,0.1)",
          pr: 10,
          p: 4,
          pb: 6,
          ".texttypo": {
            ml: 2,
          },
          ".comname": {
            color: blue[500],
          },
          ".imagelogo": {
            height: "30%",
            width: "30%",
          },
          ".stackbox": {
            textAlign: "start",
          },
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={2}>
            <Box className="stackbox">
              <img
                src={"/images/logo.png" || image}
                alt="logo"
                className="imagelogo"
              />
            </Box>
            <Box className="stackbox">
              <Typography variant="bhead" component="p" className="comname">
                {"Vyapar" || name}
              </Typography>
              <Typography variant="h4" component="h4">
                {"Finance Analyst" || tittle}
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h5" component="h5">
                {"Full time" || schedule}{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <CurrencyExchangeOutlined />
              <Typography variant="h5" component="h5" className="texttypo">
                {" AED 4k - 5k pm" || wages}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <LanguageOutlined />
              <Typography variant="h5" component="h5" className="texttypo">
                {"San Diego, CA" || location}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
