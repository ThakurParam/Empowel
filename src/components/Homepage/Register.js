import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export const Register = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#002161",
          mt: 5,
          ".spantag": {
            color: "#896DFF",
            fontWeight: 700,
            mr: 1,
          },
          ".box-typo": {
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: "25px",
            fontFamily: "Hanken Grotesk",
          },
          h2: {
            color: "white",
          },
          ".vectorangle": {
            position: "absolute",
            right: 0,
            bottom: 0,
          },
          ".btn-register": {
            textTransform: "none",
            bgcolor: "#896DFF",
            p: 2,
            borderRadius: "none",
          },
          ".btn-text": {
            color: "white",
            fontWeight: 600,
            fontSize: "22px",
          },
          ".btns-btn": {
            textTransform: "none",
            p: 2,
          },
          ".btn-text2": {
            color: "white",
            textDecoration: "underline",
            fontSize: "22px",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src="/images/Register/com.png"
                alt="com"
                style={{ width: "100%", height: "100%" }}
              ></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <Box sx={{ my: 2 }}>
              <Box mt={5}>
                <Box>
                  <Typography variant="h2" component={"h2"}>
                    Register now and
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" component={"h2"}>
                    let employers find you
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ my: 4, width: "70%" }}>
                <Typography className="box-typo">
                  <span className="spantag">60,000 professionals</span>
                  get contacted by employers every month through
                </Typography>
              </Box>
              <Box>
                <Button className="btn-register">
                  <Typography className="btn-text">Be the next one</Typography>
                </Button>
                <Button className="btns-btn">
                  <Typography className="btn-text2">
                    Register for jobs
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box>
              <img
                src="/images/Register/Vector1.png"
                alt="vector angle"
                className="vectorangle"
              />
              <img
                src="/images/Register/Vector2.png"
                className="vectorangle"
                alt="second vector "
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
