import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import jobs from '../images/jobs.png';
import { fxTitle } from '../style/style';

export const FindJobs = () => {
  return (
    <Box
      sx={{
        py: 10,
        '.btn': {
          borderRadius: 10,
          px: 4,
          border: 0,
          py: 1,
          boxShadow: 0,
          textTransform: 'capitalize',
          fontSize: '20px',
        },
        '.button': {
          mt: 4,
        },
      }}
    >
      <Container>
        <Grid container spacing={10} alignItems={'center'}>
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src={jobs}
                alt="job"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={fxTitle}
                variant="h2"
                component="h2"
                className="fx-title"
              >
                Find jobs with employers across the globe
              </Typography>
              <Typography variant="h5" component="h5">
                Get matched with remote, hybrid or on-site jobs that are aligned
                with your experience, goals & preferences and receive job
                proposals from the world's fastest growing companies.
              </Typography>
              <Box className="button">
                <Button variant="contained" className="btn">
                  submit your CV
                </Button>
              </Box>{' '}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
