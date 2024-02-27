import { Avatar, Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { InputBase, IconButton } from "@mui/material";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import left from "../images/Headboximage/Ellipse left.png";
import center from "../images/Headboximage/centerimage.png";
import right from "../images/Headboximage/Ellipse right.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import img1 from "../images/Headboximage/Ellipse 3.png";
import img2 from "../images/Headboximage/Ellipse 4.png";
import img3 from "../images/Headboximage/Ellipse 5.png";
import img4 from "../images/Headboximage/Ellipse 6.png";
import img5 from "../images/Headboximage/Ellipse 7.png";

export const HeadBox = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <img
          src={left}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            // height: "70%",
            zIndex: -1,
          }}
        />
        <img
          src={center}
          style={{ position: "absolute", top: 30, left: "20%", zIndex: -1 }}
        />
        <img
          src={right}
          style={{ position: "absolute", top: 0, right: 0, zIndex: -1 }}
        />
        <img
          src={img1}
          style={{ position: "absolute", zIndex: 1, top: "60%", left: 0 }}
        />
        <img
          src={img2}
          style={{ position: "absolute", zIndex: 1, top: "20%", right: 0 }}
        />
        <img
          src={img3}
          style={{ position: "absolute", zIndex: 1, top: "90%", left: "10%" }}
        />
        <img
          src={img4}
          style={{ position: "absolute", zIndex: 1, top: "20%", left: "10%" }}
        />
        <img
          src={img5}
          style={{ position: "absolute", zIndex: 1, top: "90%", right: "5%" }}
        />

        <Container maxwidth="xl" sx={{ pt: 30 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "65px",
                lineHeight: "84.69px",
                color: "#000000",
              }}
            >
              Find global Jobs & talent
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "35px",
                lineHeight: "45.6px",
                color: "#000000",
              }}
            >
              Over 5,00,000+jobs to explore
            </Typography>
          </Box>
        </Container>
        <Box sx={{ mt: 7 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              border: "2px solid #ccc",
              padding: " 16px",
              width: "70%",
              mx: "auto",
              bgcolor: "white",
            }}
          >
            <IconButton disabled aria-label="search" style={{ padding: "8px" }}>
              <TroubleshootIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <InputBase
              placeholder="Enter skills/designation/companies | Select Experience  | Location"
              style={{
                flex: 1,
                fontSize: "20px",
                border: "none",
                outline: "none",
                background: "none",
                marginLeft: "10px",
                color: "black",
                fontWeight: "bold  ",
              }}
            />
            <IconButton
              aria-label="search"
              sx={{
                backgroundColor: "#5A3ED1",
                color: "white",
                borderRadius: "50px",
                padding: " 16px",
                marginLeft: "8px",
                fontSize: 35,
                pl: 5,
                pr: 5,
              }}
            >
              Search
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Container maxwidth="xl">
            <Box>
              <Grid container spaccing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid container sapcing={2}>
                    {[...Array(6)].map(() => (
                      <Grid item xs={2} md={2} lg={2}>
                        <Card
                          sx={{ borderRadius: "10px", p: 2, width: "75%   " }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              <Avatar sx={{ bgcolor: "#FAF3FF" }}>
                                <HomeOutlinedIcon sx={{ color: "black" }} />
                              </Avatar>
                            </Box>
                            <Box sx={{ display: "flex", mt: 0.5 }}>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: 500,
                                    fontsize: "25px",
                                    lineHeight: "32.57px",
                                    color: "#000000",
                                  }}
                                >
                                  Remote
                                </Typography>
                              </Box>
                              <Box sx={{ mt: 0.5 }}>
                                <ChevronRightIcon />
                              </Box>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ mt: 3 }}>
                  <Grid container sapcing={2}>
                    {[...Array(5)].map(() => (
                      <Grid
                        item
                        xs={2.3}
                        md={2.3}
                        lg={2.3}
                        sx={{ ml: "9.6px" }}
                      >
                        <Card
                          sx={{ borderRadius: "10px", p: 2, width: "70%   " }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              <Avatar sx={{ bgcolor: "#FAF3FF" }}>
                                <HomeOutlinedIcon sx={{ color: "black" }} />
                              </Avatar>
                            </Box>
                            <Box sx={{ display: "flex", mt: 0.5 }}>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: 500,
                                    fontsize: "25px",
                                    lineHeight: "32.57px",
                                    color: "#000000",
                                  }}
                                >
                                  Remote
                                </Typography>
                              </Box>
                              <Box sx={{ mt: 0.5 }}>
                                <ChevronRightIcon />
                              </Box>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};
