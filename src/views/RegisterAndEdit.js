import React from "react";
import RegisterEditForm from "../forms/RegisterEditForm";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function RegisterAndEdit() {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        m: 5,
        p: 5,
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
        backgroundImage: theme.palette.background.paper,
      }}
    >
      <RegisterEditForm />
    </Paper>
  );
}

