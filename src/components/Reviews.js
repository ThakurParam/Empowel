import { Box, Container, IconButton, Typography } from "@mui/material";
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
import { grey } from "@mui/material/colors";

// const CustomPrevButton = styled("div")(() => ({
//   position: "absolute",
//   left: 0,
//   top: "50%",
//   transform: "translateY(-50%)",
//   border: "3px solid black",

//   borderRadius: "50%",
//   width: "40px",
//   height: "40px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   cursor: "pointer",
//   ".custom-prev": { fontSize: "30px", fontWeight: 700 },
// }));
// const CustomNextButton = styled("div")(() => ({
//   position: "absolute",
//   right: 0,
//   top: "50%",
//   transform: "translateY(-50%)",
//   border: "3px solid black",
//   borderRadius: "50%",
//   width: "40px",
//   height: "40px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   cursor: "pointer",
//   ".custom-next": { fontSize: "30px", fontWeight: 700 },
// }));
export const Reviews = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
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
                      <img src={dial} alt="di" className="imageslide" />
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
