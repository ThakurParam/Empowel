import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Bookmark from "../../Assests/bookmark";
import { StarBorderOutlined } from "@mui/icons-material";

export default function CompanyDetailCard({
  image,
  tittle,
  subtittle,
  time,
  location,
  experience,
  qualities,
}) {
  return (
    <Card
      variant="elevation"
      sx={{
        borderRadius: 7,
        boxShadow: "0px 0px 25px rgb(0,0,0,0.1)",
        p: 3,
        ".companylogo": {
          height: "80px",
          width: "80px",
        },
        ".tittlebox": {},
        ".subtittle": {
          color: "#5A3ED1",
          fontSize: "20px",
        },
        ".timelogo": {
          height: "20px",
          width: "auto",
          opacity: "0.6",
        },
        ".p-typo": {
          borderRadius: 4,
          p: 0.5,
          px: 2,
          bgcolor: "#F0ECFF",
          color: "grey",
        },
        ".box-bottom": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "2px solid grey",
          pt: 2,
        },
        ".btn": {
          borderRadius: 10,
          px: 4,
          border: 0,
          py: 1,
          boxShadow: 0,
          textTransform: "capitalize",
        },
      }}
    >
      <Stack spacing={2}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <img
              src={"/images/findjobs/fndjobscard.png" || image}
              alt="cardcompany"
              className="companylogo"
            />
            <Box className="tittlebox">
              <Typography variant="h5" component={"h5"}>
                <b>{"Senior Specialist" || tittle}</b>
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Bookmark />
          </Box>
        </Box>

        <Stack spacing={1}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            <Stack spacing={1} direction={"row"} className="box1">
              <img
                src="/images/findjobs/hours.png"
                alt="time"
                className="timelogo"
              />
              <Typography variant="p" component={"p"} color={"grey"}>
                {"Full Time" || time}
              </Typography>
            </Stack>
            <Stack spacing={1} direction={"row"}>
              <img
                src="/images/findjobs/hours.png"
                alt="time"
                className="timelogo"
              />
              <Typography variant="p" component={"p"} color={"grey"}>
                {"  Mumbai" || location}
              </Typography>
            </Stack>
            <Stack spacing={1} direction={"row"}>
              <img
                src="/images/findjobs/hours.png"
                alt="time"
                className="timelogo"
              />
              <Typography variant="p" component={"p"} color={"grey"}>
                {" 8-12 years" || experience}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
            {[...Array(3)].map((item, index) => (
              <Typography className="p-typo" key={index}>
                {"Business Analyst -regulatory" || qualities}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
