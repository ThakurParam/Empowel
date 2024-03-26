import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { BusinessCenter, MyLocation } from "@mui/icons-material";

export default function CompanyCarddetail({ CompanyName, service, Id, Count }) {
  return (
    <>
      <Box
        sx={{
          ".img-box": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          ".img-face": {
            height: "90px",
            width: "auto",
          },
          ".name-typo": {
            fontWeight: 800,
          },
          ".service-typo": {
            fontSize: "15px",
          },
          ".id-typo": {
            fontSize: "15px",
          },
          ".count-typo": {
            fontSize: "15px",
          },
        }}
      >
        <Card
          sx={{
            px: 5,
            py: 4,
            borderRadius: 3,
            boxShadow: "0px 0px 25px rgb(0,0,0,0.3)",
            height: "100%",
          }}
        >
          <Stack className="img-box" spacing={1}>
            <Box>
              <img
                alt="face"
                src="/images/detailimage.png"
                className="img-face"
              />
            </Box>
            <Typography className="name-typo">
              <b>{CompanyName || "Nomura"}</b>
            </Typography>
            <Typography className="service-typo">
              {service || "Information Technology & Services"}
            </Typography>
            <Typography className="id-typo">
              {Id || "www.gitlab.com"}
            </Typography>
            <Stack direction={"row"}>
              <BusinessCenter />
              <Typography className="id-typo">
                {Count || "1000-5000 "}Employees
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <MyLocation />
              <Typography>{Location || "San Fransisco "}</Typography>
            </Stack>
          </Stack>
        </Card>
      </Box>
    </>
  );
}
