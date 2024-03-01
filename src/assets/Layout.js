import { Box } from '@mui/material';
import React from 'react';
import { Topbar } from '../components/Topbar';
import { Base } from '../components/Base';
import MuiTheme from './mui/theme';

export default function Layout({ children }) {
  return (
    <>
      <MuiTheme>
        <Topbar />
        <Box component={'main'}>{children}</Box>
        <Base />
      </MuiTheme>
    </>
  );
}
