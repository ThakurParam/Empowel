import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  List,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { Mobiledrawer } from "../Assests/Mobiledrawer";

export const Topbar = () => {
  return (
    <Card
      sx={{
        pt: 1,
        ".tittleimg": {
          height: "30px",
          width: "auto",
        },
        ".btn-head": {
          textTransform: "capitalize",
          border: "1px solid black",
          borderRadius: 5,
          px: 3,
          my: "auto",
        },
        ".btn-log": {
          color: "black",
        },
        ".btn-heads": {
          textTransform: "capitalize",

          borderRadius: 5,
          px: 3,
          my: "auto",
          bgcolor: "#5A3ED1",
        },
        ".btn-sign": {
          color: "white",
        },
        ".menuitem": {
          borderRadius: 3,
        },
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Box sx={{ my: "auto " }}>
              <img
                src="/images/empowel.png"
                alt="headerimg"
                className="tittleimg"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            <Stack direction={"row"}>
              <List
                sx={{
                  display: "flex",
                }}
              >
                <MenuItem className="menuitem">Find Jobs</MenuItem>

                <MenuItem className="menuitem">Employers</MenuItem>

                <MenuItem className="menuitem">Mentor</MenuItem>

                <MenuItem className="menuitem">Companies</MenuItem>

                <MenuItem className="menuitem">Blog </MenuItem>
              </List>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <Stack direction={"row"} spacing={2}>
                <Button className="btn-head">
                  <Typography className="btn-log">log in</Typography>
                </Button>
                <Button variant="contained" className="btn-heads">
                  <Typography className="btn-sign">Sign up</Typography>
                </Button>
              </Stack>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
                mt: { lg: 0, md: 0, xs: 0 },
              }}
            >
              {<Mobiledrawer />}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};
