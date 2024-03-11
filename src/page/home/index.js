import React from "react";
import Layout from "../../assets/Layout";
import { HeadBox } from "../../components/Homepage/HeadBox";
import { JobOpening } from "../../components/Homepage/JobOpening";
import { FindJobs } from "../../components/Homepage/FindJobs";
import { TrendingJobs } from "../../components/Homepage/TrendingJobs";
import { Register } from "../../components/Homepage/Register";
import { Popularjobs } from "../../components/Homepage/Popularjobs";
import { Reviews } from "../../components/Homepage/Reviews";
import TopCompaniesHiring from "../../components/Homepage/TopCompaniesHiring";

export default function HomePage() {
  return (
    <Layout>
      <HeadBox />
      <JobOpening />
      <FindJobs />
      <TrendingJobs />
      <Register />
      <Popularjobs />
      <TopCompaniesHiring />
      <Reviews />
    </Layout>
  );
}
