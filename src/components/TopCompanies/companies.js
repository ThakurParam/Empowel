import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CompanySlider from "./company-slider";
import FilterCard from "../Findjobspage/filter-card";
import ReccomedCards from "../../ui/topcompanies/reccomed-cards";
import ComCard from "../../ui/topcompanies/com-card";
import HandpickedJob from "./handpicked-job";

export default function Companies({ count }) {
  return (
    <Box
      sx={{
        ":before": {
          content: '""',
          background: 'url("/images/herobar/Ellipse left.png")',
          position: "absolute",
          width: 1,
          height: "100%",
          top: 0,
          left: 0,
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        },
        ":after": {
          content: '""',
          background: 'url("/images/herobar/Ellipse right.png")',
          backgroundSize: "cover",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          right: 0,
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        },

        ".result-text": { fontSize: "20px" },
        ".select-box": {
          background: "none",
          border: "none",
          outline: "none",
          fontSize: "20px",
        },
        ".box-bottom": {
          textAlign: "center",
          py: 5,
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
      <Box
        sx={{
          py: 5,
          ".top-box": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 5,
          },
          ".boxtab": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 4,
          },
        }}
      >
        <Box className="top-box">
          <Typography variant="h1" component={"h1"}>
            Top Companies Hiring
          </Typography>
        </Box>
        <Box>
          <CompanySlider />
        </Box>
        <Box my={7}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <FilterCard />
              </Grid>
              <Grid item xs={12} md={8}>
                <Box>
                  <Box className="boxtab">
                    <Typography
                      variant="p"
                      component={"p"}
                      className="result-text"
                    >
                      Search result: <b>{"9788" || count} Jobs Found</b>
                    </Typography>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      spacing={2}
                      alignItems={"center"}
                    >
                      <Typography
                        variant="p"
                        component={"p"}
                        className="result-text"
                      >
                        Sort by:
                      </Typography>
                      <Box>
                        <select name="" id="" className="select-box">
                          <option value="1" selected disabled>
                            {"Relevance"}
                          </option>
                          <option value="">Option 1</option>
                          <option value="">Option 2</option>
                        </select>
                      </Box>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack spacing={3}>
                      {[...Array(8)].map((item, index) => (
                        <ComCard />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box>
        <Box className="box-bottom">
          <Typography variant="h4">Recommended Companies</Typography>
        </Box>
        <Container>
          <Grid container spacing={2}>
            {[...Array(3)].map((item, index) => (
              <Grid item xs={12} md={4}>
                <ReccomedCards />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box className="box-bottom">
          <Button variant="contained" className="btn">
            <Typography textTransform={"capitalize"}>View all</Typography>
          </Button>
        </Box>
      </Box>
      <Box>
        <HandpickedJob />
      </Box>
    </Box>
  );
}
