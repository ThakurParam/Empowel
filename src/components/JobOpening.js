import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const JobOpening = () => {
  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "50px",
              lineHeight: "65.15px",
              color: "#000000",
            }}
          >
            {" "}
            Job Openings Actively Hiring
          </Typography>
        </Box>
        <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </Container>
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{
              textTransform: "none",
              bgcolor: "#5A3ED1",
              borderRadius: "72px",
              padding: "20px",
              gap: "10px",
              transition: "none",
            }}
          >
            <Typography
              sx={{
                fontweight: 700,
                fontSize: "30px",
                lineHeight: "39.09px",
                color: "#FFFFFF",
              }}
            >
              View All
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};
