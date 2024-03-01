import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bg from "../images/BG.png";
import { Navigation } from "swiper/modules";
import { styled } from "@mui/system";

import { Swiper, SwiperSlide } from "swiper/react";
import dial from "../images/reviewimage/justdial.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
  "&:hover": {},
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
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "36.27px",
              letterSpacing: "1.95px",
              color: "#000000",
              wordSpacing: "5px",
            }}
          >
            EMPLOYER REVIEWS
          </Typography>
        </Box>
        <Container maxWidth="lg" sx={{ mt: 5, position: "relative" }}>
          <Box>
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              onSwiper={(swiper) => console.log(swiper)}
              //   onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: { lg: "38.35px", md: "38.35px", xs: "20px" },
                      lineHeight: { lg: "52.73px", md: "52.73px", xs: "20px" },
                      letterSpacing: " -1.44px",
                      color: "#000000",
                    }}
                  >
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
                        background: "transparent",
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
          <CustomPrevButton className="custom-prev">{"<"} </CustomPrevButton>
          <CustomNextButton className="custom-next">{">"} </CustomNextButton>
        </Container>
      </Box>
    </>
  );
};
