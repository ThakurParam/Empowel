import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export const Reviews = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${"/images/reviewimage/BG.png"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          pt: 7,
          pb: 7,
          mt: 5,
          position: "relative",

          textAlign: "center",
          ".imageslide": {
            height: "40px",
            width: "auto",
          },
          ".boximg": {
            width: "80%",
            mx: "auto",
            my: 4,
          },
          ".btn-nav": {
            position: "absolute",
            zIndex: 999,
            height: 30,
            width: 30,
            // bgcolor: '#fff',
            backdropFilter: "blur(10px)",
            top: "50%",
            border: "2px solid #000",
            color: "#000",
            "&.swiper-button-disabled": {
              cursor: "default",
              color: grey[500],
              borderColor: grey[500],
            },
            "&.prevs": {
              left: { xs: 15, md: 80 },
            },
            "&.nexts": {
              right: { xs: 15, md: 80 },
            },
          },
        }}
      >
        <Container>
          <Box>
            <Swiper
              modules={[Navigation]}
              spaceBetween={2}
              slidesPerView={1}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                900: {
                  slidesPerView: 1,
                },
              }}
              navigation={{
                prevEl: ".btn-prev",
                nextEl: ".btn-next",
              }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {[...Array(4)].map((item, index) => (
                <SwiperSlide>
                  <Box>
                    <Typography variant="h4" component="h4">
                      EMPLOYER REVIEWS
                    </Typography>
                  </Box>
                  <Box className="boximg">
                    <Typography variant="h6" component="h6">
                      Imperdiet amet consequat in magnis vitae ullamcorper porta
                      purus. Nisl netus scelerisque sed ultrices nibh quam
                      habitant vulputate facilisis.
                    </Typography>
                    <Box className="boximg">
                      <img
                        src="/images/reviewimage/justdial.png"
                        alt="di"
                        className="imageslide"
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
        <IconButton className=" prevs btn-nav btn-prev" size="small">
          <ChevronLeftRounded />
        </IconButton>
        <IconButton className=" nexts btn-nav btn-next" size="small">
          <ChevronRightRounded />
        </IconButton>
      </Box>
    </>
  );
};
