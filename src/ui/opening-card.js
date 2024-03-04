import {
  KeyboardArrowRightRounded,
  Timer10SelectOutlined,
} from "@mui/icons-material";
import { Box, Card, CardActionArea, Stack, Typography } from "@mui/material";
import React from "react";

export default function OpeningCard({ url, tittle, para, image }) {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          //   height: "50vh",
          width: "35vh",
          boxShadow: "0px 5px 10px rgb(0,0,0,0.1)",
          borderRadius: 8,
          p: 3,
          py: 6,
          textAlign: "left",
          ".boxaction": {
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          },
          ".boximage": { objectFit: "cover" },
        }}
      >
        <Stack sx={{}} spacing={2}>
          <Box>
            <img
              src={"/images/companyimage.png" || image}
              alt="companylogo"
              className="boximage"
            />
          </Box>
          <Typography variant="h4" component="p">
            {tittle || "Bajaj Allianz"}
          </Typography>
          <Typography variant="h6" component="p">
            {para || "Provider of life insurance and financial services."}
          </Typography>
          <CardActionArea>
            <Box className="boxaction">
              <Typography variant="h6" component="p" className="text">
                View more{" "}
              </Typography>
              <KeyboardArrowRightRounded className="icontext" />
            </Box>
          </CardActionArea>
        </Stack>
      </Card>
    </>
  );
}
