import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Typography } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// import { useNavigate } from "react-router-dom";
export const Mobiledrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerStyles = {
    width: "250px",
    height: "100%",
    backgroundColor: "#3E1D18",
  };

  return (
    <>
      <div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          style={{ marginRight: "16px" }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          <div
            style={drawerStyles}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <Box
              sx={{
                p: 1,
                mt: 3,
                borderBottom: "2px solid white",
                display: "flex",
                // justifyContent: "space-evenly",
              }}
              // onClick={handleClick}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "white",
                  letterSpacing: "2px",
                  wordSpacing: "5px",
                }}
              >
                Find Jobs
              </Typography>
              <Box sx={{ mt: 0.5, color: "white " }}>
                <ChevronRightOutlinedIcon />
              </Box>
            </Box>
            <Box
              sx={{
                p: 1,
                borderBottom: "2px solid white",
                mt: 2,
                display: "flex",
                // justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "white",
                  letterSpacing: "2px",
                  wordSpacing: "5px",
                }}
              >
                Employers
              </Typography>
              <Box sx={{ mt: 0.5, color: "white " }}>
                <ChevronRightOutlinedIcon />
              </Box>
            </Box>
            <Box
              sx={{
                p: 1,
                borderBottom: "2px solid white",
                mt: 2,
                display: "flex",
                // justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "white",
                  letterSpacing: "2px",
                  wordSpacing: "5px",
                }}
              >
                Mentor
              </Typography>
              <Box sx={{ mt: 0.5, color: "white " }}>
                <ChevronRightOutlinedIcon />
              </Box>
            </Box>
            <Box
              sx={{
                p: 1,
                borderBottom: "2px solid white",
                mt: 2,
                display: "flex",
                // justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "white",
                  letterSpacing: "2px",
                  wordSpacing: "5px",
                }}
              >
                Companies
              </Typography>
              <Box sx={{ mt: 0.5, color: "white " }}>
                <ChevronRightOutlinedIcon />
              </Box>
            </Box>
            <Box
              sx={{
                p: 1,
                borderBottom: "2px solid white",
                mt: 2,
                display: "flex",
                // justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "white",
                  letterSpacing: "2px",
                  wordSpacing: "5px",
                }}
              >
                Blogs
              </Typography>
              <Box sx={{ mt: 0.5, color: "white " }}>
                <ChevronRightOutlinedIcon />
              </Box>
            </Box>
            <Box
              sx={{
                // height: "60%",
                // alignItems: "bottom",
                mt: 5,
                display: "flex",
                borderBottom: "2px solid gray",
                p: 0.5,
                pb: 2,
              }}
            >
              <Box sx={{ borderRight: "4px solid gray", pr: 2 }}>
                <Button sx={{ textTransform: "none", color: "white" }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "20px",
                      letterSpacing: "2px",
                      wordSpacing: "5px",
                    }}
                  >
                    Log In
                  </Typography>
                </Button>
              </Box>
              <Box sx={{ pl: 2 }}>
                <Button
                  sx={{
                    textTransform: "none",
                    color: "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "20px",
                      letterSpacing: "2px",
                      wordSpacing: "5px",
                    }}
                  >
                    Sign Up
                  </Typography>
                </Button>
              </Box>
            </Box>
          </div>
        </Drawer>
      </div>
    </>
  );
};
