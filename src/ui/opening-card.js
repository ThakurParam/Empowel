import { KeyboardArrowRightRounded } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Stack,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

export default function OpeningCard({ url, tittle, para, image }) {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          boxShadow: '0px 5px 10px rgb(0,0,0,0.1)',
          borderRadius: 5,
          p: 3,
          textAlign: 'left',
          '.boxaction': {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          },
          '.boximage': { objectFit: 'cover' },
          h5: {
            fontSize: 23,
          },
          '.btn-1': {
            fontSize: 16,
            fontWeight: 600,
            textTransform: 'capitalize',
            color: '#000',
          },
        }}
      >
        <Stack spacing={1}>
          <Box>
            <img
              src={'/images/companyimage.png' || image}
              alt="companylogo"
              className="boximage"
            />
          </Box>
          <Box>
            <Typography variant="h5" component="h5">
              <b> {tittle || 'Bajaj Allianz'}</b>
            </Typography>
            <Typography variant="p" component="p">
              {para || 'Provider of life insurance and financial services.'}
            </Typography>
          </Box>
          <Box>
            <Button className="btn-1" endIcon={<KeyboardArrowRightRounded />}>
              View Jobs
            </Button>
          </Box>
        </Stack>
      </Card>
    </>
  );
}
