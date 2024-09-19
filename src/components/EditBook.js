import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import Loader from "./Loader";

const EditBook = ({loading, setLoading}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  // Ensure that the book object exists

  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    year: book.year,
    genre: book.genre,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.put(
        `http://localhost:8000/api/v1/book/${book._id}`,
        formData
      );
      setLoading(false)
      navigate("/");

    } catch (error) {
      setLoading(false)
      console.error("Failed to update book:", error);
      alert("Failed to update book");

    }
  };

  if(loading){
    return <Loader/>
  }


  if (!book) {
    return <Container>No book data found</Container>;
  }

  return (
    <>
      <Container
        sx={{ textAlign: "center", fontSize: "3rem", paddingTop: "10px" }}
      >
        Edit Book
      </Container>
      <Container style={{ padding: "16px", marginTop: "20px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <TextField
            label="Author"
            variant="outlined"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <TextField
            label="Year"
            variant="outlined"
            name="year"
            value={formData.year}
            onChange={handleChange}
            type='number'
            required
          />
          <TextField
            label="Genre"
            variant="outlined"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </form>
      </Container>
    </>
  );
};

export default EditBook;
