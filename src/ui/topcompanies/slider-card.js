import React from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';

export default function SliderCard({ tittle, partners, image }) {
  return (
    <Card
      sx={{
        p: 2,
        px: 3,
        borderRadius: 8,
        '.logo-img': {
          height: '50px',
          width: '50px',
        },
        '.img-box': {
          textAlign: 'center',
        },
        '.text-box': {
          textAlign: 'center',
        },
      }}
    >
      <Stack spacing={2}>
        <Box className="img-box">
          <img
            src={'/images/topcompanies/sliderimage.jpg' || image}
            alt="sliderlogo"
            className="logo-img"
          />
        </Box>
        <Box className="text-box">
          <Typography variant="h5" component={'h5'}>
            <b> {'MNCs' || tittle}</b>
          </Typography>
          <Typography variant="p" component={'p'}>
            {'1.4k+ Companies' || partners}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
