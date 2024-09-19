import { Button, Container, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
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
    try {
      await axios.post(
        `http://localhost:8000/api/v1/book`,
        formData
      );
      navigate("/");
    } catch (error) {
      console.error("Failed to add book:", error);
      alert("Failed to add book");
    }
  };


  return (
    <>
    <Container sx={{textAlign:'center', fontSize:'3rem', paddingTop:'10px'}}>
      Edit Book
    </Container>
      <Container style={{ padding: "16px" , marginTop:'20px' }}>
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
}

export default AddBook