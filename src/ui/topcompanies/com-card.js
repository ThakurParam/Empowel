import { NavigateNextRounded } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function ComCard({ name }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={11} md={6}>
        <Card
          // variant="elevation"
          sx={{
            p: 2,
            borderRadius: 5,
            boxShadow: "0px 0px 25px rgb(0,0,0,0.1)",

            ".review-box": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            ".image": {
              height: "70px",
              width: "auto",
            },
            ".title-box": {
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            },
            ".fields": {
              // border: "1px solid grey",

              fontSize: "12px",
              opacity: 0.7,
            },
            ".card": {
              p: "3px",
              px: "8px",
              borderRadius: 5,
            },
          }}
        >
          <Stack spacing={1}>
            <Stack direction={"row"} spacing={2}>
              <Box>
                <img
                  src="/images/findjobs/fndjobscard.png"
                  alt="company-logo"
                  className="image"
                />
              </Box>
              <Box className="title-box">
                <Box>
                  <Typography variant="h6" component={"h6"}>
                    <b> {"Preludesys" || name}</b>
                  </Typography>

                  <CardActionArea className="review-box">
                    <Box>
                      <Typography variant="p" component={"p"}>
                        1 reviews
                      </Typography>
                    </Box>
                    <Box textAlign={"end"}>
                      <NavigateNextRounded />
                    </Box>
                  </CardActionArea>
                </Box>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              {[...Array(3)].map((item, index) => (
                <Card className="card" variant="outlined">
                  <Typography variant="p" component={"p"} className=" fields">
                    Corporate
                  </Typography>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={11} md={6}>
        <Card
          sx={{
            p: 2,
            borderRadius: 5,
            boxShadow: "0px 0px 25px rgb(0,0,0,0.1)",

            ".review-box": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            ".image": {
              height: "70px",
              width: "auto",
            },
            ".title-box": {
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            },
            ".fields": {
              // border: "1px solid grey",

              fontSize: "12px",
              opacity: 0.7,
            },
            ".card": {
              p: "3px",
              px: "8px",
              borderRadius: 5,
            },
          }}
        >
          <Stack spacing={1}>
            <Stack direction={"row"} spacing={2}>
              <Box>
                <img
                  src="/images/findjobs/fndjobscard.png"
                  alt="company-logo"
                  className="image"
                />
              </Box>
              <Box className="title-box">
                <Box>
                  <Typography variant="h6" component={"h6"}>
                    <b> {"Preludesys" || name}</b>
                  </Typography>

                  <CardActionArea className="review-box">
                    <Box>
                      <Typography variant="p" component={"p"}>
                        1 reviews
                      </Typography>
                    </Box>
                    <Box textAlign={"end"}>
                      <NavigateNextRounded />
                    </Box>
                  </CardActionArea>
                </Box>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              {[...Array(3)].map((item, index) => (
                <Card className="card" variant="outlined">
                  <Typography variant="p" component={"p"} className=" fields">
                    Corporate
                  </Typography>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}
