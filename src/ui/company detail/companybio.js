import { InsertDriveFileOutlined } from "@mui/icons-material";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

export default function CompanyBio() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          ".logo-box": {
            backgroundColor: green[400],
            height: "45px",
            width: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          },
          ".btn-heads": {
            textTransform: "capitalize",

            borderRadius: 5,
            px: 3,
            py: 1,
            my: "auto",
            bgcolor: "#5A3ED1",
          },
          ".btn-sign": {
            color: "white",
          },
          ".stack": {
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: 4,
            height: "100%",
            boxShadow: "0px 0px 25px rgb(0,0,0,0.1)",
          }}
        >
          <Stack spacing={3}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box className="stack">
                <Box className="logo-box ">
                  <InsertDriveFileOutlined />
                </Box>
                <Box ml={2}>
                  <Typography>
                    <b>Bio of Company</b>
                  </Typography>
                </Box>
              </Box>

              <Button className="btn-heads">
                <Typography className="btn-sign">+ Follow</Typography>
              </Button>
            </Box>
            <Box>
              <Stack spacing={2}>
                <Typography>
                  Nomura is a global financial services group with an integrated
                  network spanning over 30 countries. By connecting markets East
                  & West, Nomura services the needs of individuals,
                  institutions, corporates and governments through its four
                  business divisions: Retail, Asset Management, Wholesale
                  (Global Markets and Investment Banking), and Merchant Banking.{" "}
                </Typography>
                <Typography>
                  Founded in 1925, the firm is built on a tradition of
                  disciplined entrepreneurship, serving clients with creative
                  solutions and considered thought leadership.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Box>
    </>
  );
}
