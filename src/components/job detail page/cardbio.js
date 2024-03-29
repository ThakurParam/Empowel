import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Bookmark from "../../Assests/bookmark";

export default function CardBio({
  day,
  vacancy,
  applicants,
  companyname,
  id,
  experience,
}) {
  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          ".com-name": {
            fontWeight: 800,
            fontSize: "20px",
          },
          ".bb0": {
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={1.5} md={1.5}>
            <img
              src="/images/findjobs/fndjobscard.png"
              alt="logo "
              //   className="com-img"
            />
          </Grid>
          <Grid item xs={10.5} md={10.5}>
            <Box className="bb0">
              <Typography className="com-name">
                {companyname || "Tele Sales Executive"}
              </Typography>
              <Bookmark />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Typography>Squadstack</Typography>
              </Box>
              <Typography>Job ID : {id || "123131"}</Typography>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <Typography>Remote</Typography>
                  <Stack>
                    <Box>
                      <Typography>{experience || "0-5"}Years</Typography>
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>
                <Grid item xs={6} md={6}></Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          borderTop: "2px solid gray",
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          opacity: 0.6,
          ".box": {
            borderLeft: "2px solid gray",
            pl: 1,
          },
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <Box>
            <Typography>Posted : {day || "1"}day ago</Typography>
          </Box>
          <Box className="box">
            <Typography>Openings : {vacancy || "2"}</Typography>
          </Box>
          <Box className="box">
            <Typography>Applicants : {applicants || "17"}</Typography>
          </Box>
        </Stack>
        <Box>
          <Typography>Send me jobs like this </Typography>
        </Box>
      </Box>
    </Card>
  );
}
