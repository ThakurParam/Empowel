import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CardBio from "./cardbio";
import Accord from "./Accord";
import ReqCard from "./req-card";
import Dreamjob from "./dreamjob";
import CardCom from "./cardcom";

export default function DetailJob() {
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
          ".btn-box": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            my: 4,
          },
          ".btn-1": {
            bgcolor: "#5A3ED1",
            textTransform: "capitalize",
            borderRadius: 7,
            px: 4,
            py: 1,
            fontSize: "15px",
          },
          ".btn-2": {
            bgcolor: "#B4FFDB",
            color: "black",
            textTransform: "capitalize",
            fontWeight: 700,
            borderRadius: 7,
            px: 4,
            py: 1,
            fontSize: "15px",
          },
          ".tittle-job": {
            fontFamily: "Hanken Grotesk",
            fontSize: "25px",
            fontWeight: 800,
          },
          ".box-head": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Container sx={{ my: 5, mb: 12 }}>
          <Stack spacing={2}>
            <CardBio />
            {[...Array(3)].map((item, index) => (
              <Accord />
            ))}
            <ReqCard />
            <Box>
              <Box className="btn-box">
                <Button className="btn-1" variant="contained">
                  Quick Apply
                </Button>
                <Button className="btn-2" variant="contained">
                  Refer Someone
                </Button>
              </Box>
            </Box>
            <Dreamjob />
          </Stack>
          <Box className="box-head">
            <Typography className="tittle-job">Recommended Jobs</Typography>
          </Box>
          <Box sx={{ my: 5 }}>
            <Stack direction={"row"} spacing={3}>
              {[...Array(3)].map(() => (
                <CardCom />
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
