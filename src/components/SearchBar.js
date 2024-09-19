import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = ({handleDataChange, setAllBooksDetails}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    if(event.target.value == ''){
      handleDataChange()
    }
    setSearchTerm(event.target.value);
  };

  const resetSearch  = () => {
    setSearchTerm("")
    handleDataChange()
  }
  

  const handleSubmit = () => {

    setAllBooksDetails((prevBooks) =>
      prevBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const addBook = () => {
    navigate("/books/new");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "16px",
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        style={{ width: "50%", marginRight: "10px" }}
      />

     {searchTerm &&  <Button variant="contained" sx={{marginRight:'10px'}} onClick={()=> resetSearch()}>Clear</Button>}
      <Button variant="contained" onClick={()=>handleSubmit()}>Search</Button>
      <Button
        variant="contained"
        sx={{ marginLeft: "10px" }}
        onClick={() => addBook()}
      >
        Add Book
      </Button>
    </form>
  );
};

export default SearchBar;
