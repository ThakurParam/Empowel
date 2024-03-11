import { ArrowForwardIosRounded, HomeOutlined } from '@mui/icons-material';
import { Box, Card, CardActionArea, Stack, Typography } from '@mui/material';
import React from 'react';

export default function IconCard({ url, title, bgcolor, icon }) {
  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: '0px 5px 10px rgb(0,0,0,0.1)',
        borderRadius: 3,
        m: 1,
        '.body': { p: 1, px: 1.5 },
        '.icon': {
          height: 43,
          width: 43,
          bgcolor: bgcolor,
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          svg: { fontSize: 18 },
        },
        '.arrow': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          svg: { fontSize: 18 },
        },
      }}
    >
      <CardActionArea>
        <Stack
          direction={'row'}
          className="body"
          spacing={1}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box className="icon">{icon || <HomeOutlined />}</Box>
          <Typography variant="h6" component={'p'}>
            {title}
          </Typography>
          <Box className="arrow">
            <ArrowForwardIosRounded />{' '}
          </Box>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
