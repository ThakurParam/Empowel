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
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

import { Mobiledrawer } from "../../Assests/Mobiledrawer";
import Loginpage from "../../page/Login/loginpage";

export const Topbar = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/findjobs");
  };
  const handleTabClick = () => {
    navigate("/topcompanies");
  };
  const handleLoginClick = () => {
    setOpenPopup(true);
  };
  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <Card
      sx={{
        py: 2,
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
          py: 1,
          my: "auto",
          bgcolor: "#5A3ED1",
        },
        ".btn-sign": {
          color: "white",
        },
        ".menuitem": {
          borderRadius: 3,
        },
        ".list": {
          display: "flex",
          justifyContent: "start",
        },
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={1.5}>
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
            md={7.5}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            {/* <Stack direction={"row"}> */}
            <Box className="list">
              <MenuItem className="menuitem" onClick={handleClick}>
                Find Jobs
              </MenuItem>

              <MenuItem className="menuitem">Employers</MenuItem>

              <MenuItem className="menuitem">Mentor</MenuItem>

              <MenuItem className="menuitem" onClick={handleTabClick}>
                Companies
              </MenuItem>

              <MenuItem className="menuitem">Blog </MenuItem>
            </Box>
            {/* </Stack> */}
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <Stack direction={"row"} spacing={2}>
                <Button className="btn-head" onClick={handleLoginClick}>
                  <Typography className="btn-log">log in</Typography>
                </Button>
                <Loginpage open={openPopup} onClose={handleClosePopup} />

                <Button variant="contained" className="btn-heads">
                  <Typography className="btn-sign"> Register</Typography>
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
