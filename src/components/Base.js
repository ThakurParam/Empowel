import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { basetypo } from "../style/style";

export const Base = () => {
  return (
    <Box
      sx={{
        bgcolor: "#161C2D",
        pt: 7,
        pb: 5,
        ".boxtitle": {
          my: 2,
        },
        h2: {
          color: "white",
          fontWeight: 600,
        },
        ".typo": {
          color: "white",
          opacity: 0.7,
        },
        ".btn-box": {
          display: "flex",
          justifyContent: "end",
        },
        ".btn-btn": {
          textTransform: "capitalize",
          bgcolor: "#896DFF",
          borderRadius: 8,
          p: 2,
          px: 3,
        },
        ".typo-btn": {
          color: "white",
          fontSize: "20px",
        },
        ".empowel": {
          height: "30px",
          width: "auto",
        },
        ".m-empowel": {
          position: "absolute",
          top: -18,
          left: 19,
          height: "50px",
          width: "auto",
        },
        ".imagelogo": {
          height: "25px",
        },
      }}
    >
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ textAlign: "start" }}>
                <Box className="boxtitle">
                  <Typography variant="h2" component={"h2"}>
                    Ready to realise your true potential?
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" component={"h5"} className="typo">
                    70% techies find their perfect opportunities within 10 days
                    on Cutshort.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box className="btn-box">
                <Button className="btn-btn">
                  <Typography className="typo-btn">
                    Register your profile
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider sx={{ height: "2px", bgcolor: "grey", my: 3 }} />
      <Box sx={{ mt: 7 }}>
        <Container>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} lg={4}>
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ position: "relative", textAlign: "start" }}>
                    <img
                      src="/images/Baseimage/E POWEL.png"
                      alt="empowel"
                      className="empowel"
                    />
                    <img
                      src="/images/Baseimage/m.png"
                      alt="m"
                      className="m-empowel"
                    />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "start",
                      display: "flex",
                      mt: 4,
                    }}
                  >
                    <IconButton>
                      <img
                        src="/images/Baseimage/logo-twitter.png"
                        alt="twitter"
                        className="imagelogo"
                      />
                    </IconButton>
                    <IconButton>
                      <img
                        src="/images/Baseimage/Path.png"
                        alt="facebook"
                        className="imagelogo"
                      />{" "}
                    </IconButton>

                    <IconButton>
                      <img
                        src="/images/Baseimage/logo-instagram.png"
                        alt="instagram"
                        className="imagelogo"
                      />{" "}
                    </IconButton>

                    <IconButton>
                      <img
                        src="/images/Baseimage/logo-linkedin.png"
                        alt="linkedin"
                        className="imagelogo"
                      />{" "}
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={2.5}>
                <List>
                  <MenuItem>
                    <Typography sx={basetypo}> About us </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Careers </Typography>{" "}
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Employer home </Typography>{" "}
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Sitemap </Typography>{" "}
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}>Credits</Typography>{" "}
                  </MenuItem>
                </List>
              </Grid>
              <Grid item xs={12} md={2.5}>
                <List>
                  <MenuItem>
                    <Typography sx={basetypo}> Help center</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Summons/ </Typography>{" "}
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Notices </Typography>{" "}
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Grievances </Typography>{" "}
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}>Report issue</Typography>{" "}
                  </MenuItem>
                </List>
              </Grid>
              <Grid item xs={12} md={2.5}>
                <List>
                  <MenuItem>
                    <Typography sx={basetypo}> Privacy policy</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Terms & Conditions </Typography>{" "}
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Fraud alert </Typography>{" "}
                  </MenuItem>
                  <MenuItem>
                    <Typography sx={basetypo}> Trust & safety </Typography>{" "}
                  </MenuItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
