import { Container } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Container
      disableGutters
      sx={{ textAlign: "center"}}
    >
      <Container sx={{backgroundColor:'white',fontSize:'3rem'}}>Book Center</Container>
      <SearchBar/>
    </Container>
  );
};

export default NavBar;
