import { Box, Container, Stack } from "@mui/material";
import React from "react";
import CardBio from "./cardbio";

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
        }}
      >
        <Container>
          <Stack>
            <CardBio />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
