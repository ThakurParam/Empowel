import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import company from "../images/company.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const JobOpening = () => {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { lg: "50px", md: "50px", xs: "35px" },
              lineHeight: { lg: "65.15px", md: "65.15px", xs: "50px" },
              color: "#000000",
            }}
          >
            {" "}
            Job Openings Actively Hiring
          </Typography>
        </Box>
        <Container
          maxWidth="xl"
          sx={{ mt: { lg: 10, md: 10, xs: 2 }, mb: 10, p: 5 }}
        >
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Box sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}>
                <Grid container spacing={4}>
                  {[...Array(4)].map(() => (
                    <Grid item xs={12} lg={3} md={3}>
                      <Card
                        elevation={1}
                        sx={{ borderRadius: "20px", textAlign: "start", p: 5 }}
                      >
                        <Box>
                          <img src={company} />
                        </Box>
                        <Box sx={{ mt: 5 }}>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: "25px",
                              lineHeight: "29.5px",
                              letterSpacing: "2%",
                              color: "#000000",
                            }}
                          >
                            Bajaj Allianz
                          </Typography>
                          <Box sx={{ mt: 1 }}>
                            <Typography
                              sx={{
                                fontWeight: 300,
                                fontSize: "20px",
                                lineHeight: "25.66px",
                                letterSpacing: "0.5%",
                                color: "#000000",
                              }}
                            >
                              Provider of life insurance and financial services.
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ mt: 3, display: "flex" }}>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 500,
                                fontSize: "19.44px",
                                lineHeight: "22.93px",
                                letterSpacing: "0.2%",
                                color: "#000000",
                              }}
                            >
                              View Jobs
                            </Typography>
                          </Box>
                          <Box>
                            <ChevronRightIcon />
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </Container>
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{
              textTransform: "none",
              bgcolor: "#5A3ED1",
              borderRadius: "72px",
              padding: "20px",
              gap: "10px",
              transition: "none",
            }}
          >
            <Typography
              sx={{
                fontweight: 700,
                fontSize: "30px",
                lineHeight: "39.09px",
                color: "#FFFFFF",
              }}
            >
              View All
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};
