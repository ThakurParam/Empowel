import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import FilterCard from "./filter-card";
import CompanyCard from "../../ui/Findjobscards/company-card";
import SearchBar from "../../Assests/search-bar";

export default function FindJobpage({ count }) {
  return (
    <>
      <Box
        sx={{
          pt: 4,
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
          textAlign: "center",
          ".result-text": { fontSize: "20px" },
          ".select-box": {
            background: "none",
            border: "none",
            outline: "none",
            fontSize: "20px",
          },
          ".boxtab": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 4,
          },
        }}
      >
        <Box sx={{ mt: 5 }}>
          <Typography variant="h1" component={"h1"}>
            Find Your Jobs
          </Typography>
        </Box>
        <Box my={5} mb={7}>
          <SearchBar />
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
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
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
                    <Stack spacing={4}>
                      {[...Array(6)].map((item, index) => (
                        <CompanyCard key={index} />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
