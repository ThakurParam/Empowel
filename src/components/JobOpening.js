import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import company from "../images/company.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import OpeningCard from "../ui/opening-card";
const CustomPrevButton = styled("div")(() => ({
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  border: "3px solid black",

  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  ".custom-prev": { fontSize: "30px", fontWeight: 700 },
}));
const CustomNextButton = styled("div")(() => ({
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  border: "3px solid black",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  ".custom-next": { fontSize: "30px", fontWeight: 700 },
}));
export const JobOpening = () => {
  return (
    <>
      <Box
        sx={{
          mt: { lg: 40, md: 40, xs: 10 },
          p: 0.4,
          // ".custom-prev": {},
          // ".custom-next": {},
          ".btn": {
            borderRadius: 10,
            px: 4,
            border: 0,
            py: 1,
            boxShadow: 0,
            textTransform: "capitalize",
            fontSize: "20px",
          },
          ".button": {
            mt: 5,
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h1" component="h1">
            Job Openings Actively Hiring
          </Typography>
        </Box>
        <Container
          maxWidth="xl"
          sx={{
            mt: { lg: 10, md: 10, xs: 2 },
            mb: 10,
            p: 5,
            position: "relative",
          }}
        >
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Container maxWidth="xl">
                <Stack direction={"row"} spacing={2}>
                  {[...Array(4)].map((item, index) => (
                    <OpeningCard />
                  ))}
                </Stack>
              </Container>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>

          <CustomPrevButton className="custom-prev">
            <ChevronLeftRounded />
          </CustomPrevButton>
          <CustomNextButton className="custom-next">
            <ChevronRightRounded />
          </CustomNextButton>
        </Container>
        <Box className="button">
          <Button variant="contained" className="btn">
            view all
          </Button>
        </Box>
      </Box>
    </>
  );
};
