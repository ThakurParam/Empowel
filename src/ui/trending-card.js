import { ArrowForwardIosRounded, HomeOutlined } from '@mui/icons-material';
import { Box, Card, CardActionArea, Stack, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';

export default function TrendingCard({ url, title, bgcolor, icon }) {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          boxShadow: '0px 5px 10px rgb(0,0,0,0.1)',
          borderRadius: 3,
          m: 1,
          '.body': { p: 1, px: 0, justifyContent: 'space-evenly' },
          '.icon': {
            height: 43,
            width: 43,
            bgcolor: bgcolor || purple[100],
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            svg: { fontSize: 20 },
          },
          '.arrow': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            svg: { fontSize: 18 },
          },
          '.contentbox': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
            <Stack>
              <Box className="contentbox">
                <Typography variant="h6" component={'p'}>
                  {title || 'Delivery person'}
                </Typography>

                <Box className="arrow">
                  <ArrowForwardIosRounded />{' '}
                </Box>
              </Box>
              <Typography variant="h6" component="h6">
                279 openings
              </Typography>
            </Stack>
          </Stack>
        </CardActionArea>
      </Card>
    </>
  );
}
