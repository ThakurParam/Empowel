import { Construction, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Card,
  Collapse,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function Accord() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 5,
          px: 3,
          py: 2,
          ".box": {
            display: "flex",
            justifyContent: "space-between",
          },
          ".bg-box": {
            height: "50px",
            width: "50px",
            bgcolor: "#B6FFDC",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          ".com-card": {
            ml: 1,
            fontWeight: 800,
          },
        }}
      >
        <Box>
          <Box className="box">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box className="bg-box">
                <Construction />
              </Box>
              <Typography className="com-card">About Company</Typography>
            </Box>

            <IconButton onClick={handleToggle}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
          <Collapse
            in={open}
            sx={{
              ".role": {
                fontWeight: 700,
              },
            }}
          >
            <Stack spacing={2}>
              <Typography className="role">
                .Roles & Responsibilities:
              </Typography>
              <Typography className="role">
                . Prefered candidate profile:
              </Typography>
            </Stack>
          </Collapse>
        </Box>
      </Card>
    </>
  );
}
