import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function ReccomedCards({
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
      // variant="outlined"
      sx={{
        borderRadius: 7,
        boxShadow: "0px 0px 25px rgb(0,0,0,0.05)",
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
          borderRadius: 2,
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
          px: 3,
          border: 0,
          py: 1,
          boxShadow: 0,
          textTransform: "capitalize",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Stack spacing={2}>
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
        </Grid>
        <Grid item xs={12} md={12}>
          <Stack spacing={2}>
            <Stack spacing={1}>
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
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box className="box-bottom">
            <Stack direction={"row"} spacing={1}>
              <img
                src="/images/findjobs/hours.png"
                alt="time"
                className="timelogo"
              />
              <Typography variant="p" component={"p"} color={"grey"}>
                6 Days Ago
              </Typography>
            </Stack>
            <Button variant="contained" className="btn">
              Quick Apply
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
