// import React from "react";
// import SwiperCore, { Navigation } from "swiper";
// import { SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import { Container, Box, Typography } from "@mui/material";
// import { styled } from "@mui/system";

// // Initialize Swiper core components
// SwiperCore.use([Navigation]);

// // Custom styled components for navigation arrows
// const CustomPrevButton = styled("div")(({ theme }) => ({
//   position: "absolute",
//   left: 0,
//   top: "50%",
//   transform: "translateY(-50%)",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   borderRadius: "50%",
//   width: "40px",
//   height: "40px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   cursor: "pointer",
//   "&:hover": {
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//   },
// }));

// const CustomNextButton = styled("div")(({ theme }) => ({
//   position: "absolute",
//   right: 0,
//   top: "50%",
//   transform: "translateY(-50%)",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   borderRadius: "50%",
//   width: "40px",
//   height: "40px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   cursor: "pointer",
//   "&:hover": {
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//   },
// }));
// export const Swiper = () => {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 5 }}>
//       <Box>
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation={{
//             prevEl: ".custom-prev",
//             nextEl: ".custom-next",
//           }}
//         >
//           <SwiperSlide>
//             <Box>
//               <Typography>
//                 Imperdiet amet consequat in magnis vitae ullamcorper porta
//                 purus. Nisl netus scelerisque sed ultrices nibh quam habitant
//                 vulputate facilisis.
//               </Typography>
//               <Box sx={{ textAlign: "center", mt: 5 }}>
//                 {/* <img
//                   src={dial}
//                   style={{
//                     height: "40%",
//                     width: "40%",
//                   }}
//                 /> */}
//               </Box>
//             </Box>
//           </SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide>
//           <SwiperSlide>Slide 4</SwiperSlide>
//         </Swiper>
//         <CustomPrevButton className="custom-prev">
//           {/* Add your custom arrow icon for previous */}
//           {"<"}
//         </CustomPrevButton>
//         <CustomNextButton className="custom-next">
//           {/* Add your custom arrow icon for next */}
//           {">"}
//         </CustomNextButton>
//       </Box>
//     </Container>
//   );
// };
