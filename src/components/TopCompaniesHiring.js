import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { arrowBtn, arrowBtnSlider } from '../style/style';

export default function TopCompaniesHiring() {
  return (
    <Box
      sx={{
        '.main': {
          borderTop: '1px solid',
          borderColor: grey[500],
          borderBottom: '1px solid',
          py: 2,
          width: '100%',
          position: 'relative',
        },
        '.slider': {
          position: 'relative',
          borderLeft: { md: '1px solid', xs: 'none' },
          px: { md: 4, xs: 0 },
          borderColor: grey[500],
          maxWidth: { xs: '100%', md: 'calc(100% - 200px)' },
          flexGrow: 1,
          img: {
            maxWidth: '120px',
            height: 'auto',
            width: '100%',
          },
          '.nav-btn': {
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
            '&.prev': {
              left: { xs: 15, md: 0 },
              transform: 'translate(-50%, -50%)',
            },
            '&.next': {
              right: { xs: 15, md: 0 },
              transform: 'translate(50%, -50%)',
            },
          },
          '.card': {
            minHeight: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        '.title': {
          maxWidth: { md: 200, xs: 'unset' },
          h2: {
            fontWeight: 800,
          },
        },
      }}
    >
      <Container>
        <Box className="main">
          <Stack
            direction={{ md: 'row', xs: 'column' }}
            spacing={2}
            alignItems={'center'}
          >
            <Box className="title">
              <Typography variant="h5" component={'h2'}>
                Top Companies Hiring
              </Typography>
            </Box>
            <Box className="slider">
              <Swiper
                slidesPerView={6}
                // navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  900: {
                    slidesPerView: 6,
                  },
                }}
                navigation={{
                  prevEl: '.prev-12',
                  nextEl: '.next-12',
                }}
              >
                {[...Array(8)].map((item, index) => (
                  <SwiperSlide key={index}>
                    <Box className="card">
                      <img src="/images/top-logo.webp" alt="logo" />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Box>
                <IconButton className="prev nav-btn prev-12" size="small">
                  <ChevronLeftRounded />
                </IconButton>
                <IconButton className="next nav-btn next-12" size="small">
                  <ChevronRightRounded />
                </IconButton>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
