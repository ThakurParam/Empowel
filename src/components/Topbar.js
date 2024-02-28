import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import empowel from "../images/empowel.png";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export const Topbar = () => {
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
    <Card sx={{ p: 2 }}>
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item md={8} lg={8}>
              <Grid container spacing={12}>
                <Grid item xs={2} md={2.5} lg={2.5}>
                  <img src={empowel} />
                </Grid>
                <Grid
                  item
                  xs={7}
                  md={7}
                  lg={7}
                  sx={{ display: { xs: "none", md: "none", lg: "block" } }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Find Jobs
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Employers
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Mentor
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Companies
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "26.06px",
                        color: "#000000",
                      }}
                    >
                      Blog
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={8} lg={4}>
              <Box
                sx={{
                  mt: 2,
                  display: { xs: "none", md: "none", lg: "block" },
                }}
              >
                <Button>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "26.06px",
                      color: "#5A3ED1",
                      textTransform: "none",
                    }}
                  >
                    Log In
                  </Typography>
                </Button>
                <Button sx={{ bgcolor: "#5A3ED1" }}>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "26.06px",
                      textTransform: "none",
                    }}
                  >
                    Register
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "block", lg: "none" },
            textAlign: "end",
          }}
        >
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
        </Box>
      </Container>
    </Card>
  );
};
