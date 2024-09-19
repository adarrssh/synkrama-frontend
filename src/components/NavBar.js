import { Button, Container } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const NavBar = ({handleDataChange,setAllBooksDetails}) => {
  return (
    <Container disableGutters sx={{ textAlign: "center", paddingTop:'30px' }}>
      <Container sx={{ backgroundColor: "white", fontWeight:'bold', fontSize: "3rem" }}>
        Book Center
      </Container>
      <SearchBar handleDataChange={handleDataChange} setAllBooksDetails={setAllBooksDetails}/>
    </Container>
  );
};

export default NavBar;
