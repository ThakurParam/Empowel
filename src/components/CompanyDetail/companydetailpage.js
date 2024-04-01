import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import CompanyBio from "../../ui/company detail/companybio";
import CompanyCarddetail from "../../ui/company detail/companycard";
import HiringCard from "../../ui/company detail/hiringcard";
import CompanyDetailCard from "../../ui/company detail/companydetail-card";
import usePagination from "@mui/material/usePagination/usePagination";
import { blue, green, grey, purple, yellow } from "@mui/material/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function CompanyDetailPage() {
  const datas = [
    { Field: " finance", count: "121", bgcolor: " grey[800]" },
    { Field: " business", count: "121", bgcolor: "green[800]" },
    { Field: " it", count: "121", bgcolor: "yellow[800]" },
    { Field: " firm", count: "121", bgcolor: " blue[800]" },
    { Field: " field", count: "121", bgcolor: "purple[800] " },
  ];
  const { items } = usePagination({
    count: 10,
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          ":before": {
            content: '""',
            background: 'url("/images/herobar/Ellipse left.png")',
            position: "absolute",
            width: 1,
            height: "100%",
            top: 0,
            left: 0,
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          },
          ":after": {
            content: '""',
            background: 'url("/images/herobar/Ellipse right.png")',
            backgroundSize: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            right: 0,
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          },

          ".heading-box": {
            textAlign: "center ",
          },
          ".tabbox": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          ".tabpanel": {
            fontWeight: 800,
            fontSize: "15px",
            textTransform: "capitalize",
            fontFamily: "Hanken Grotesk",
          },
          ".count-typo": {
            textTransform: "none",
            fontFamily: "Hanken Grotesk",
          },

          ".list": {
            display: "flex",
          },
          ".pagination-box": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
          },
          ".btn-page": {
            p: 1,
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            fontSize: "15px",
            opacity: 0.7,
            m: 1,
          },
          ".btn-prev-next": {
            p: 1,
            px: 3,
            fontSize: "15px",
            m: 1,
            textTransform: "capitalize",
            borderRadius: 4,
            bgcolor: "transparent",
          },

          ".select-box": {
            background: "none",
            border: "none",
            outline: "none",
            fontSize: "15px",
            p: 2,
          },
        }}
      >
        <Container sx={{ mt: 7 }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3.5}>
                <CompanyCarddetail />
              </Grid>
              <Grid item xs={12} md={8}>
                <CompanyBio />
              </Grid>
            </Grid>
          </Box>
          <Box className="heading-box" mt={7}>
            <Typography variant="h4" component={"h4"}>
              Departments Hiring at Noumura
            </Typography>
          </Box>
          <Box className="array-box" my={4}>
            <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
              {datas.map((item, index) => (
                <HiringCard
                  key={index}
                  Field={item.Field}
                  count={item.count}
                  bgcolor={item.bgcolor}
                  cardno={index + 1}
                />
              ))}
            </Stack>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box className="tabbox">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Tabs example"
              >
                <Tab label="Overview" className="tabpanel" />
                <Tab label="Jobs" className="tabpanel" />
              </Tabs>
            </Box>
            <Divider></Divider>
            <TabPanel value={value} index={0}>
              <Typography>Tab 1 Content</Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography className="count-typo">
                <b>114 Job opening at Nomura</b>
              </Typography>
              <Box sx={{ bgcolor: grey[100], mt: 2 }}>
                <Stack direction={{ md: "row", xs: "column" }} spacing={1}>
                  {[...Array(4)].map((item, index) => (
                    <select name="" id="" className="select-box">
                      <option value="1" selected disabled>
                        {"Relevance"}
                      </option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                    </select>
                  ))}
                </Stack>
              </Box>
              <Box my={7}>
                <Stack spacing={4}>
                  {[...Array(6)].map((item, index) => (
                    <CompanyDetailCard />
                  ))}
                </Stack>
                <Box className="pagination-box">
                  <nav>
                    <List className="list">
                      {items.map(({ page, type, selected, ...item }, index) => {
                        let children = null;

                        if (
                          type === "start-ellipsis" ||
                          type === "end-ellipsis"
                        ) {
                          children = "…";
                        } else if (type === "page") {
                          children = (
                            <button
                              className="btn-page"
                              type="button"
                              style={{
                                fontWeight: selected ? "bold" : undefined,
                              }}
                              {...item}
                            >
                              {page}
                            </button>
                          );
                        } else {
                          children = (
                            <button
                              type="button"
                              className="btn-prev-next"
                              {...item}
                            >
                              {type}
                            </button>
                          );
                        }

                        return <li key={index}>{children}</li>;
                      })}
                    </List>
                  </nav>
                </Box>
              </Box>
            </TabPanel>
          </Box>
        </Container>
      </Box>
    </>
  );
}
