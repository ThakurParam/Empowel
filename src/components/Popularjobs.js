import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import dollar from '../images/popjobs/dollar.png';
import globe from '../images/popjobs/global.png';
import logo from '../images/popjobs/logo.png';
import { grey } from '@mui/material/colors';

export const Popularjobs = () => {
  return (
    <>
      <Box
        sx={{
          my: 10,
          '.card': {
            border: `1px solid  ${grey[300]}`,
            boxShadow: '0px 0px 15px rgb(0,0,0,0.1)',
            py: 3,
            px: { md: 4, xs: 3 },
            borderRadius: 5,

            '.logo': {
              width: 80,
              height: 'auto',
            },
            '.title-box': {
              my: 2,
            },
            '.sub-title': {
              color: '#437C9E',
              fontWeight: 600,
            },
            '.title': {
              fontWeight: 700,
            },
            h6: {
              fontSize: 20,
            },
          },
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
          <Typography variant="h2" component="h2">
            Popular Jobs
          </Typography>
        </Box>
        <Container>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              {[...Array(4)].map((item, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Card className="card">
                    <img src={logo} alt="logo" className="logo" />
                    <Box className="title-box">
                      <Typography
                        variant="p"
                        component={'p'}
                        className="sub-title"
                      >
                        Vyapar
                      </Typography>
                      <Typography
                        variant="h5"
                        component={'h5'}
                        className="title"
                      >
                        Finance Analyst
                      </Typography>
                    </Box>
                    <Box>
                      <Stack spacing={1}>
                        <Typography variant="h6" component={'h6'}>
                          Full Time
                        </Typography>
                        <Stack direction={'row'} spacing={1}>
                          <img src={dollar} alt="dollar" />
                          <Box>
                            <Typography variant="p" component="p">
                              AED 4k - 5k pm
                            </Typography>
                          </Box>
                        </Stack>
                        <Stack direction={'row'} spacing={1}>
                          <img src={globe} alt="globe" />
                          <Box>
                            <Typography variant="p" component="p">
                              San Diego, CA
                            </Typography>
                          </Box>
                        </Stack>
                      </Stack>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>{' '}
          <Box textAlign={'center'} mt={4}>
            <Button variant="contained" className="btn">
              view all
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
