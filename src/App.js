import * as React from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <React.Fragment>
      <Typography
        textAlign={"center"}
        variant="h2"
        color="primary"
        gutterBottom
      >
        React Filter Example
      </Typography>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
