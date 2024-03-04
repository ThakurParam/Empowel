import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import dollar from '../images/popjobs/dollar.png';
import globe from '../images/popjobs/global.png';
import logo from '../images/popjobs/logo.png';

export const Popularjobs = () => {
  return (
    <>
      <Box
        sx={{
          '.btn': {
            borderRadius: 10,
            px: 4,
            border: 0,
            py: 1,
            boxShadow: 0,
            textTransform: 'capitalize',
            fontSize: '20px',
          },
          '.containerstack': {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" component="h1">
            Popular Jobs
          </Typography>
        </Box>
        <Container>
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              {[...Array(4)].map((item, index) => (
                <Grid item xs={12} md={3} lg={3} key={index}>
                  <Card>
                    <Box>
                      <img src={logo} alt="logo" />
                    </Box>
                    <Box>
                      <Typography>Vyapar</Typography>
                    </Box>
                    <Box>
                      <Typography>Finance Analyst</Typography>
                    </Box>
                    <Box>
                      <Typography>Full Time</Typography>
                      <Box>
                        <img src={dollar} alt="dollar" />

                        <Box sx={{ mt: -1.5, ml: 1.5 }}>
                          <Typography>AED 4k - 5k pm</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <img src={globe} alt="globe" />
                        <Box>
                          <Typography>San Diego, CA</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>{' '}
          <Box textAlign={'center'}>
            <Button variant="contained" className="btn">
              view all
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
