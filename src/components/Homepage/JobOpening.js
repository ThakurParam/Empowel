import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import OpeningCard from "../../ui/Homepagecards/opening-card";
import { arrowBtn } from "../../style/style";

export const JobOpening = () => {
  return (
    <>
      <Box
        sx={{
          my: 10,
          p: 0.4,
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
            textAlign: "center",
          },
          ".swiper": {
            py: 1,
          },
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Job Openings Actively Hiring
            </Typography>
          </Box>
          <Box sx={{ position: "relative", mt: 4 }}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={24}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 4,
                },
              }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              onSlideChange={() => console.log("slide change")}
            >
              {[...Array(5)].map((item, index) => (
                <SwiperSlide key={index} className="swiper">
                  <OpeningCard key={index} />
                </SwiperSlide>
              ))}
            </Swiper>{" "}
            <Box>
              <IconButton sx={arrowBtn} className="custom-prev " size="small">
                <ChevronLeftRounded />
              </IconButton>
              <IconButton sx={arrowBtn} className="custom-next " size="small">
                <ChevronRightRounded />
              </IconButton>
            </Box>
          </Box>{" "}
          <Box className="button">
            <Button variant="contained" className="btn">
              view all
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
