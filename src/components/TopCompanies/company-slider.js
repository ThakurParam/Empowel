import { Box, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import SliderCard from '../../ui/topcompanies/slider-card';

export default function CompanySlider() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          pt: 7,
          pb: 7,
          mt: 5,
          position: 'relative',

          textAlign: 'center',
          '.imageslide': {
            height: '40px',
            width: 'auto',
          },
          '.boximg': {
            width: '80%',
            mx: 'auto',
            my: 4,
          },
          '.btn-nav': {
            position: 'absolute',
            zIndex: 999,
            height: 30,
            width: 30,
            // bgcolor: '#fff',
            backdropFilter: 'blur(10px)',
            top: '50%',
            border: '2px solid #000',
            color: '#000',
            '&.swiper-button-disabled': {
              cursor: 'default',
              color: grey[500],
              borderColor: grey[500],
            },
            '&.prevs': {
              left: { xs: 15, md: 80 },
            },
            '&.nexts': {
              right: { xs: 15, md: 80 },
            },
          },
          '.slide': {
            py: 1,
            // px: 1,
          },
        }}
      >
        <Container>
          <Box>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 5,
                },
              }}
              navigation={{
                prevEl: '.btn-prev',
                nextEl: '.btn-next',
              }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {[...Array(9)].map((item, index) => (
                <SwiperSlide className="slide">
                  <SliderCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <IconButton className=" prevs btn-nav btn-prev" size="small">
            <ChevronLeftRounded />
          </IconButton>
          <IconButton className=" nexts btn-nav btn-next" size="small">
            <ChevronRightRounded />
          </IconButton>
        </Container>
      </Box>
    </>
  );
}
