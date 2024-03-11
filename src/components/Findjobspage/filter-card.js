import { Box, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function FilterCard({ name }) {
  const [open, setOpen] = useState(true);

  const handleToggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const data = ["Salary", "Payments", "Category", "hellooo "];
  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 4,
        boxShadow: "0px 0px 25px rgb(0,0,0,0.2)",

        ".select-box": {
          border: "none",
          outline: "none",
          fontSize: 20,
        },
        ".filter-box": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Box padding={1.5} textAlign={"start"}>
          <Typography variant="h5" component={"h5"} textTransform={"uppercase"}>
            <b>Filters(0)</b>{" "}
          </Typography>
        </Box>
        <Stack>
          {data.map((item, index) => (
            <Box
              padding={1.5}
              borderTop={"1px solid grey"}
              textAlign={"start"}
              onClick={() => handleToggle(index)}
            >
              <Box key={index}>
                <Box className="filter-box">
                  <Typography variant="h5">{item}</Typography>

                  <IconButton>
                    {open === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>
                <Collapse in={open === index}>
                  <Typography>
                    {/* Place your salary content here */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod justo id libero scelerisque, sed viverra sapien
                    tristique.
                  </Typography>
                </Collapse>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Card>
  );
}
