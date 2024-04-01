import { Construction } from "@mui/icons-material";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

export default function ReqCard({ count, education }) {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {[...Array(3)].map((item, index) => (
          <Box>
            <Card
              variant="outlined"
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                px: 4,
                py: 3,
                borderRadius: 3,
                ".bg-box": {
                  height: "50px",
                  width: "50px",
                  bgcolor: "#F9F9F9",
                  border: "1px solid gray",
                  borderRadius: 15,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ".com-card": {
                  ml: 2,
                  fontWeight: 900,
                  fontSize: "20px",
                  fontFamily: "Hanken Grotesk",
                },
                ".topbox": {
                  py: 2,
                  borderBottom: "1px solid gray",
                },
                ".text": {
                  fontWeight: 700,
                },
                ".texto": {
                  fontWeight: 500,
                },
              }}
            >
              <Box className="topbox">
                <Box
                  display={"flex"}
                  justifyContent={"start"}
                  alignItems={"center"}
                >
                  <Box className="bg-box">
                    <Construction />
                  </Box>
                  <Typography className="com-card">Job Requirements</Typography>
                </Box>
              </Box>
              <Box mt={2}>
                <Stack spacing={2}>
                  <Box>
                    <Typography className="text">Experience</Typography>
                    <Typography className="texto">
                      Min. {count || "3"} Years
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="text">Education</Typography>
                    <Typography className="texto">
                      {" "}
                      {education || "Graduate"}{" "}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="text">English Level</Typography>
                    <Typography className="texto">
                      Good /Advanced/Intermediate
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Card>
          </Box>
        ))}
      </Stack>
    </>
  );
}
