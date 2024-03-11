import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

import {
  HomeOutlined,
  OnlinePredictionOutlined,
  TroubleshootRounded,
} from "@mui/icons-material";
import {
  blue,
  green,
  grey,
  orange,
  purple,
  yellow,
} from "@mui/material/colors";
import IconCard from "../../ui/Homepagecards/icon-card";

const cards = [
  {
    title: "Remote",
    color: purple[50],
    icon: <HomeOutlined />,
  },
  {
    title: "MNC",
    color: green[50],
  },
  {
    title: "Startup",
    color: orange[50],
    icon: <OnlinePredictionOutlined />,
  },
  {
    title: "HR",
    color: blue[50],
  },
  {
    title: "Supply Chain",
    color: yellow[50],
  },
];
const cards2 = [
  {
    title: "Remote",
    color: purple[50],
    icon: <HomeOutlined />,
  },
  {
    title: "MNC",
    color: green[50],
  },
  {
    title: "Startup",
    color: orange[50],
    icon: <OnlinePredictionOutlined />,
  },
  {
    title: "HR",
    color: blue[50],
  },
];

export const HeadBox = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: 'url("/images/herobar/centerimage.png")',
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
        ".img-first": {
          position: "absolute",
          zIndex: 1,
          top: "10%",
          left: "10%",
          height: "13%",
          width: "auto",
          display: { xs: "none", md: "block" },
        },
        ".img-second": {
          position: "absolute",
          zIndex: 1,
          top: "15%",
          height: "20%",
          width: "auto",
          right: "8%",
          display: { xs: "none", md: "block" },
        },
        ".img-third": {
          position: "absolute",
          zIndex: 1,
          top: "40%",
          left: "0%",
          height: "15%",
          display: { xs: "none", md: "block" },
        },
        ".img-fourth": {
          position: "absolute",
          zIndex: 1,
          top: "45%",
          right: "0%",
          height: "15%",
          display: { xs: "none", md: "block" },
        },
        ".img-fifth": {
          position: "absolute",
          zIndex: 1,
          top: "69%",
          right: "15%",
          height: "10%",
          display: { xs: "none", md: "block" },
        },
        ".img-girl": {
          position: "absolute",
          zIndex: 1,
          top: "70%",
          left: "10%",
          height: "10%",
          display: { xs: "none", md: "block" },
        },
        ".dot-1": {
          position: "absolute",
          top: "4%",
          left: "0",
          height: "2.5%",
          width: "auto",
          zIndex: 1,
        },
        ".dot-2": {
          position: "absolute",
          top: "20%",
          right: "23%",
          height: "2.5%",
          width: "auto",
          zIndex: 1,
        },
        ".dot-3": {
          position: "absolute",
          top: "50%",
          left: "17%",
          height: "2.5%",
          width: "auto",
          zIndex: 1,
        },
        ".dot-4": {
          position: "absolute",
          top: "70%",
          right: "2%",
          height: "2.5%",
          width: "auto",
          zIndex: 1,
        },
      }}
    >
      <img
        src="/images/herobar/person3.png"
        alt="third"
        className="img-third"
      />
      <img
        src="/images/herobar/person2.png"
        alt="second"
        className="img-second"
      />
      <img src="/images/herobar/girl.png" alt="girl" className="img-girl" />
      <img
        src="/images/herobar/person1.png"
        alt="first"
        className="img-first"
      />
      <img
        src="/images/herobar/person5.png"
        alt="fifth"
        className="img-fifth"
      />
      <img
        src="/images/herobar/person4.png"
        alt="fifth"
        className="img-fourth"
      />
      <img src="/images/herobar/dot4.svg" alt="first svg" className="dot-1" />
      <img src="/images/herobar/dot1.svg" alt="second svg" className="dot-2" />
      <img src="/images/herobar/dot2.svg" alt="third svg" className="dot-3" />
      <img src="/images/herobar/dot3.svg" alt="fourth svg" className="dot-4" />

      <Container>
        <Typography variant="h1" component={"h1"} mb={1}>
          Find global Jobs & talent
        </Typography>
        <Typography variant="h5" component={"h5"} mb={2}>
          Over 5,00,000+jobs to explore
        </Typography>
        <Box
          sx={{
            maxWidth: 800,
            boxShadow: "0px 0px 25px rgb(0,0,0,0.2)",
            bgcolor: "#fff",

            borderRadius: 10,
            mx: "auto",
            py: 1,
            px: 2,
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
              px: 4,
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
              <input
                type="text"
                placeholder="Enter skills/designation/companies"
              />
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
            <Box className="loction sec">
              <input type="text" placeholder="Loction" />
            </Box>
            <Box className="button">
              <Button variant="contained" className="btn">
                search
              </Button>
            </Box>
          </Stack>
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          mt={7}
        >
          {cards.map((card, index) => (
            <IconCard
              title={card?.title}
              bgcolor={card?.color}
              key={index}
              icon={card?.icon}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} flexWrap={"wrap"}>
          {cards2.map((card, index) => (
            <IconCard
              title={card?.title}
              bgcolor={card?.color}
              key={index}
              icon={card?.icon}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
