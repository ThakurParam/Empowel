import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bg from "../images/BG.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import dial from "../images/reviewimage/justdial.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Box>
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              //   pagination={{ clickable: true }}
              //   scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              //   onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "38.35px",
                      lineHeight: "52.73px",
                      letterSpacing: " -1.44px",
                      color: "#000000",
                    }}
                  >
                    Imperdiet amet consequat in magnis vitae ullamcorper porta
                    purus. Nisl netus scelerisque sed ultrices nibh quam
                    habitant vulputate facilisis.
                  </Typography>
                  <Box sx={{ textAlign: "center", mt: 5 }}>
                    <img src={dial} />
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </Box>
        </Container>
      </Box>
    </>
  );
};
