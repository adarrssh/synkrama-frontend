import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
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

      <Button variant="contained">Search</Button>
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
