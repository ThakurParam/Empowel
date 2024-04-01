import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Bookmark from "../../Assests/bookmark";

export default function CardCom({
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
      elevation={4}
      sx={{
        borderRadius: 7,
        // boxShadow: "0px 0px 25px rgb(0,0,0,0.1)",
        p: 3,
        ".companylogo": {
          height: "80px",
          width: "80px",
        },
        ".tittlebox": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        },
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
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
                <Typography variant="p" component={"p"} className="subtittle">
                  {"LTIMindtree Limited " || subtittle}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Stack spacing={2}>
            <Stack direction={{ xs: "column" }} spacing={1}>
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
            <Stack spacing={1}>
              {[...Array(2)].map((item, index) => (
                <Typography className="p-typo">
                  {"Business Analyst" || qualities}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
