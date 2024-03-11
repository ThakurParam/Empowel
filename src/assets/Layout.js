import { Box } from "@mui/material";
import React from "react";
import { Topbar } from "../components/Homepage/Topbar";
import { Base } from "../components/Homepage/Base";
import MuiTheme from "./mui/theme";

export default function Layout({ children }) {
  return (
    <>
      <MuiTheme>
        <Topbar />
        <Box component={"main"}>{children}</Box>
        <Base />
      </MuiTheme>
    </>
  );
}
