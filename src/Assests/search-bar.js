import { TroubleshootRounded } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

export default function SearchBar() {
  return (
    <Box
      sx={{
        maxWidth: 800,
        boxShadow: "0px 0px 25px rgb(0,0,0,0.2)",
        bgcolor: "#fff",

        borderRadius: 10,
        mx: "auto",
        py: 2,
        px: 3,
        ".icon": {
          height: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          svg: { color: grey[500], fontSize: 32 },
        },
        ".sec": {
          "+.sec": {
            borderLeft: "1px solid #E0E0E0",
            pl: 2,
          },
          flexGrow: 1,
          input: {
            border: "none",
            ":focus": {
              outline: "none",
            },
            width: 1,
            fontSize: 15,
          },
          select: {
            border: "none",
            ":focus": {
              outline: "none",
            },
            color: grey[700],
            fontSize: 15,
          },
        },
        ".loction": {
          maxWidth: 150,
          flexGrow: "unset",
          display: { md: "block", xs: "none" },
        },
        ".btn": {
          borderRadius: 10,
          px: 2,
          border: 0,
          py: 1,
          boxShadow: 0,
          textTransform: "capitalize",
        },
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Box className="icon">
          <TroubleshootRounded />
        </Box>
        <Box className="input sec">
          <input type="text" placeholder="Enter skills/designation/companies" />
        </Box>
        <Box className="select sec">
          <select name="" id="">
            <option value="1" selected disabled>
              Select Experience
            </option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </Box>
        <Box className="location sec">
          <input type="text" placeholder="Location" />
        </Box>
        <Box className="button">
          <Button variant="contained" className="btn">
            search
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
