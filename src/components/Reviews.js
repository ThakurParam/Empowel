import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bg from "../images/BG.png";
import { Navigation } from "swiper/modules";
import { styled } from "@mui/system";

import { Swiper, SwiperSlide } from "swiper/react";
import dial from "../images/reviewimage/justdial.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

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
export const Reviews = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          pt: 10,
          pb: 10,
          mt: 8,
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 3, position: "relative" }}>
          <Box>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h3" component="h3">
                    EMPLOYER REVIEWS
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "70%" }, mx: "auto", mt: 2 }}>
                  <Typography variant="h4" component="h4">
                    Imperdiet amet consequat in magnis vitae ullamcorper porta
                    purus. Nisl netus scelerisque sed ultrices nibh quam
                    habitant vulputate facilisis.
                  </Typography>
                  <Box sx={{ textAlign: "center", mt: 5 }}>
                    <img
                      src={dial}
                      alt="di"
                      style={{
                        height: "40%",
                        width: "40%",
                      }}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </Box>
          <CustomPrevButton className="custom-prev">
            <ChevronLeftRounded />
          </CustomPrevButton>
          <CustomNextButton className="custom-next">
            <ChevronRightRounded />
          </CustomNextButton>
        </Container>
      </Box>
    </>
  );
};
