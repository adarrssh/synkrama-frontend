import { Button, Container, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const AddBook = ({loading, setLoading}) => {
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
    setLoading(true)
    try {
      await axios.post(
        `http://localhost:8000/api/v1/book`,
        formData
      );
      setLoading(false)
      navigate("/");
    } catch (error) {
      setLoading(false)
      console.error("Failed to add book:", error);
      alert('Error:'+ error.response.data.message);
    }
  };

  if(loading){
    return <Loader/>
  }

  return (
    <>
    <Container sx={{textAlign:'center', fontSize:'3rem', paddingTop:'10px'}}>
      Add Book
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
}

export default AddBook