import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { InputBase, IconButton } from '@mui/material';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import left from '../images/Headboximage/Ellipse left.png';
import center from '../images/Headboximage/centerimage.png';
import right from '../images/Headboximage/Ellipse right.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import img1 from '../images/Headboximage/Ellipse 3.png';
import img2 from '../images/Headboximage/Ellipse 4.png';
import img3 from '../images/Headboximage/Ellipse 5.png';
import img4 from '../images/Headboximage/Ellipse 6.png';
import img5 from '../images/Headboximage/Ellipse 7.png';
import {
  ArrowForward,
  ArrowForwardIosRounded,
  HomeOutlined,
  OnlinePredictionOutlined,
  TroubleshootRounded,
} from '@mui/icons-material';
import {
  blue,
  green,
  grey,
  orange,
  purple,
  yellow,
} from '@mui/material/colors';
import IconCard from '../ui/icon-card';

const cards = [
  {
    title: 'Remote',
    color: purple[50],
    icon: <HomeOutlined />,
  },
  {
    title: 'MNC',
    color: green[50],
  },
  {
    title: 'Startup',
    color: orange[50],
    icon: <OnlinePredictionOutlined />,
  },
  {
    title: 'HR',
    color: blue[50],
  },
  {
    title: 'Supply Chain',
    color: yellow[50],
  },
];
const cards2 = [
  {
    title: 'Remote',
    color: purple[50],
    icon: <HomeOutlined />,
  },
  {
    title: 'MNC',
    color: green[50],
  },
  {
    title: 'Startup',
    color: orange[50],
    icon: <OnlinePredictionOutlined />,
  },
  {
    title: 'HR',
    color: blue[50],
  },
];

export const HeadBox = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: 'url("/images/herobar/centerimage.png")',
        ':before': {
          content: '""',
          background: 'url("/images/herobar/Ellipse left.png")',
          position: 'absolute',
          width: 1,
          height: '100%',
          top: 0,
          left: 0,
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        },
        ':after': {
          content: '""',
          background: 'url("/images/herobar/Ellipse right.png")',
          backgroundSize: 'cover',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          right: 0,
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        },
      }}
    >
      <Container>
        <Typography variant="h1" component={'h1'} mb={1}>
          Find global Jobs & talent
        </Typography>
        <Typography variant="h5" component={'h5'} mb={2}>
          Over 5,00,000+jobs to explore
        </Typography>
        <Box
          sx={{
            maxWidth: 800,
            boxShadow: '0px 0px 25px rgb(0,0,0,0.2)',
            bgcolor: '#fff',

            borderRadius: 10,
            mx: 'auto',
            py: 1,
            px: 2,
            '.icon': {
              height: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              svg: { color: grey[500], fontSize: 32 },
            },
            '.sec': {
              '+.sec': {
                borderLeft: '1px solid #E0E0E0',
                pl: 2,
              },
              flexGrow: 1,
              input: {
                border: 'none',
                ':focus': {
                  outline: 'none',
                },
                width: 1,
                fontSize: 15,
              },
              select: {
                border: 'none',
                ':focus': {
                  outline: 'none',
                },
                color: grey[700],
                fontSize: 15,
              },
            },
            '.loction': {
              maxWidth: 150,
              flexGrow: 'unset',
              display: { md: 'block', xs: 'none' },
            },
            '.btn': {
              borderRadius: 10,
              px: 4,
              border: 0,
              py: 1,
              boxShadow: 0,
              textTransform: 'capitalize',
            },
          }}
        >
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Box className="icon">
              <TroubleshootRounded />
            </Box>
            <Box className="input sec">
              <input
                type="text"
                placeholder="Enter skills/designation/companies"
              />
            </Box>
            <Box className="select sec">
              <select name="" id="">
                <option value="1" selected disabled>
                  Select Experience
                </option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
              </select>
            </Box>
            <Box className="loction sec">
              <input type="text" placeholder="Loction" />
            </Box>
            <Box className="button">
              <Button variant="contained" className="btn">
                search
              </Button>
            </Box>
          </Stack>
        </Box>
        <Stack
          direction={'row'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          mt={7}
        >
          {cards.map((card, index) => (
            <IconCard
              title={card?.title}
              bgcolor={card?.color}
              key={index}
              icon={card?.icon}
            />
          ))}
        </Stack>
        <Stack direction={'row'} justifyContent={'center'} flexWrap={'wrap'}>
          {cards2.map((card, index) => (
            <IconCard
              title={card?.title}
              bgcolor={card?.color}
              key={index}
              icon={card?.icon}
            />
          ))}
        </Stack>
      </Container>
      {/* <Box sx={{ position: "relative" }}>
        <img
          src={left}
          alt="left"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            height: "70%",
            width: "50%",
            zIndex: -1,
          }}
        />
        <img
          src={center}
          alt="center "
          style={{
            position: "absolute",
            top: "5%",
            left: "20%",
            width: "60%",
            zIndex: -1,
          }}
        />
        <img
          src={right}
          alt="right"
          style={{ position: "absolute", top: "0%", right: "0%", zIndex: -1 }}
        />
        <img
          src={img1}
          alt="first"
          className="imageman"
          style={{
            position: "absolute",
            zIndex: -1,
            top: "60%",
            left: "0%",

            // display: { xs: "none", md: "none", lg: "block" },
          }}
        />
        <img
          src={img2}
          alt="second"
          className="imageman"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "20%",
            right: 0,
            // display: { xs: "none", md: "none", lg: "block" },
          }}
        />
        <img
          src={img3}
          alt="third"
          className="imageman"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "90%",
            left: "10%",
            // display: { xs: "none", md: "none", lg: "block" },
          }}
        />
        <img
          src={img4}
          alt="fouth"
          className="imageman"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "20%",
            left: "10%",
            // display: { xs: "none", md: "none", lg: "block" },
          }}
        />
        <img
          src={img5}
          alt="fifth"
          className="imageman"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "90%",
            right: "5%",
            // display: { xs: "none", md: "none", lg: "none" },
          }}
        />

        <Container maxwidth="xl" sx={{ pt: { lg: 30, md: 30, xs: 8 } }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { lg: "65px", md: "55px", xs: "45px" },
                lineHeight: { lg: "84.69px", md: "84.69px", xs: "50px" },
                color: "#000000",
              }}
            >
              Find global Jobs & talent
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { lg: "35px", md: "30px", xs: "20px" },
                lineHeight: "45.6px",
                color: "#000000",
              }}
            >
              Over 5,00,000+jobs to explore
            </Typography>
          </Box>
        </Container>
        <Box sx={{ mt: 7 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              border: "2px solid #ccc",
              padding: { lg: " 16px", md: " 10px", xs: "5px" },
              width: { lg: "70%", md: "70%", xs: "90%" },
              mx: "auto",
              bgcolor: "white",
            }}
          >
            <IconButton disabled aria-label="search" style={{ padding: "8px" }}>
              <TroubleshootIcon sx={{ fontSize: { lg: 40, md: 30, xs: 25 } }} />
            </IconButton>
            <InputBase
              placeholder="Enter skills/designation/companies | Select Experience  | Location"
              style={{
                flex: 1,
                fontSize: { lg: "20px", md: "20px", xs: "8px" },
                border: "none",
                outline: "none",
                background: "none",
                marginLeft: "10px",
                color: "black",
                fontWeight: "bold  ",
              }}
            />
            <IconButton
              aria-label="search"
              sx={{
                backgroundColor: "#5A3ED1",
                color: "white",
                borderRadius: "50px",
                padding: { lg: " 16px", md: " 16px", xs: "10px" },
                marginLeft: "8px",
                fontSize: { lg: 35, md: 35, xs: 16 },
                pl: 5,
                pr: 5,
              }}
            >
              Search
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Container maxwidth="xl">
            <Box>
              <Grid container spaccing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid container sapcing={2}>
                    {[...Array(6)].map((item, index) => (
                      <Grid item xs={6} md={2} lg={2} key={index}>
                        <Card
                          sx={{
                            borderRadius: "10px",
                            p: 2,
                            width: "75%",
                            my: { lg: 0, md: 0, xs: 1 },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              <Avatar sx={{ bgcolor: "#FAF3FF" }}>
                                <HomeOutlinedIcon sx={{ color: "black" }} />
                              </Avatar>
                            </Box>
                            <Box sx={{ display: "flex", mt: 0.5 }}>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: 500,
                                    fontsize: "25px",
                                    lineHeight: "32.57px",
                                    color: "#000000",
                                  }}
                                >
                                  Remote
                                </Typography>
                              </Box>
                              <Box sx={{ mt: 0.5 }}>
                                <ChevronRightIcon />
                              </Box>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  sx={{
                    mt: 1,
                    display: { xs: "none", md: "block", lg: "block" },
                  }}
                >
                  <Grid container sapcing={2}>
                    {[...Array(5)].map((item, index) => (
                      <Grid
                        item
                        xs={5}
                        md={2.3}
                        lg={2.3}
                        key={index}
                        sx={{ ml: "9.6px" }}
                      >
                        <Card
                          sx={{
                            borderRadius: "10px",
                            p: 2,
                            width: "70%   ",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              <Avatar sx={{ bgcolor: "#FAF3FF" }}>
                                <HomeOutlinedIcon sx={{ color: "black" }} />
                              </Avatar>
                            </Box>
                            <Box sx={{ display: "flex", mt: 0.5 }}>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: 500,
                                    fontsize: "25px",
                                    lineHeight: "32.57px",
                                    color: "#000000",
                                  }}
                                >
                                  Remote
                                </Typography>
                              </Box>
                              <Box sx={{ mt: 0.5 }}>
                                <ChevronRightIcon />
                              </Box>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box> */}
    </Box>
  );
};
