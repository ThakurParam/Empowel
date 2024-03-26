import { Box, Card, Typography } from "@mui/material";
import { blue, green, grey, purple, yellow } from "@mui/material/colors";
import React from "react";

export default function HiringCard({ Field, count, bgcolor, cardno }) {
  console.log(cardno);
  return (
    <>
      <Card
        sx={{
          bgcolor:
            cardno == 1
              ? grey[800]
              : cardno == 2
              ? green[800]
              : cardno == 3
              ? yellow[800]
              : cardno == 4
              ? blue[800]
              : purple[800],
          borderRadius: 5,
          ".box-typo": {
            textAlign: "center",
            color: "white",
            px: 5,
            py: 2,
          },
          ".count": {
            fontSize: "13px",
            // opacity: 0.9,
            fontWeight: 200,
          },
          ".name": {
            textTransform: "capitalize",
          },
        }}
      >
        <Box className="box-typo">
          <Typography className="name">{Field || "Finance"}</Typography>
          <Typography className="count">{count || "213"} Companies</Typography>
        </Box>
      </Card>
    </>
  );
}
