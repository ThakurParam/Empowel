import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function Loginpage({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        borderRadius: 10,
        "& .MuiPaper-root": {
          borderRadius: 10, // Apply border radius to the Paper component inside the Dialog
        },

        ".img-login": {
          width: "100%",
          height: "auto",
          position: "relative",
        },
        ".img-text": {
          position: "absolute",
          left: 40,
          bottom: 15,
          height: "25vh",
          width: "30vh",
        },
        ".input": {
          width: "100%",
          height: "6vh",
          borderRadius: 5,
          border: "2px solid gray",
          outline: "none",
          px: 2,
          opacity: 0.5,
        },
        ".btn": {
          textTransform: "capitalize",
          color: "white",
          backgroundColor: "#896DFF",
          width: "100%",
          borderRadius: 5,
          height: "6vh",
          py: 1,
        },
        ".btn-typo": {
          fontSize: "13px",
        },
        ".arrow": {
          fontSize: "17px",
          ml: 1,
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={5.5}>
          <img src="/images/login.png" alt="login" className="img-login" />
          <img src="/images/logi.png" alt="text" className="img-text" />
        </Grid>
        <Grid item xs={12} md={6.5}>
          <Box
            sx={{
              width: "80%",
              mx: "auto",
              py: 10,

              ".typo-sign": {
                fontWeight: 400,
                fontSize: "17px",
              },
              ".guest": {
                fontWeight: 800,
                fontSize: "26px",
              },
              ".text": {
                fontSize: "13px",
                fontWeight: 500,
              },
              ".texts": {
                fontSize: "10px",
                ".span": {
                  textDecoration: "underline",
                },
              },
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography className="typo-sign">
                  Sign up for Empowel
                </Typography>
                <Typography className="guest">Welcome Guest, </Typography>
              </Box>
              <Box>
                <Stack spacing={2}>
                  <Box>
                    <Typography className="text">First Name</Typography>
                    <input className="input" placeholder="Full Name"></input>
                  </Box>
                  <Box>
                    <Typography className="text">Mobile Number</Typography>
                    <input
                      className="input"
                      placeholder="Mobile Number"
                    ></input>
                  </Box>
                  <Box>
                    <Button className="btn">
                      <Typography className="btn-typo">Submit</Typography>
                      <ArrowForward className="arrow" />
                    </Button>
                  </Box>
                  <Typography className="texts">
                    By clicking this button, you agree to the 
                    <span className="span">Terms & Conditions</span> and the
                    <span className="span"> Privacy Policy</span>.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}
