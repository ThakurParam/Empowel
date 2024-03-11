import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function HandpickedJob() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"/images/reviewimage/BG.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
        py: 20,
        ".btn-box": {
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          my: "40px",
        },
        ".typo-text": {
          fontSize: "40px",
          fontFamily: "Hanken Grotesk",
        },

        ".typo-para": {
          fontSize: "20px",
          fontFamily: "Hanken Grotesk",
        },
        ".btn-re": {
          textTransform: "capitalize",
          borderRadius: 8,
          py: 2,
          px: 4,
        },
        ".text-btn": {
          fontWeight: 600,
        },
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack direction={"column"} spacing={2}>
              <Typography variant="h3" className="typo-text">
                <b> Premium Handpicked</b> jobs for you
              </Typography>
              <Typography variant="p" component={"p"} className="typo-para">
                Premium Handpicked jobs that you will not find anywhere else
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="btn-box">
              <Button variant="contained" className="btn-re">
                <Typography className="text-btn">Register Now!</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
