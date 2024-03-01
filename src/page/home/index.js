import React from 'react';
import Layout from '../../assets/Layout';
import { HeadBox } from '../../components/HeadBox';
import { JobOpening } from '../../components/JobOpening';
import { FindJobs } from '../../components/FindJobs';
import { TrendingJobs } from '../../components/TrendingJobs';
import { Register } from '../../components/Register';
import { Popularjobs } from '../../components/Popularjobs';
import { Reviews } from '../../components/Reviews';

export default function HomePage() {
  return (
    <Layout>
      <HeadBox />
      <JobOpening />
      <FindJobs />
      <TrendingJobs />
      <Register />
      <Popularjobs />
      <Reviews />
    </Layout>
  );
}
