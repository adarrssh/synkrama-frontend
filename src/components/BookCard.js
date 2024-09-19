import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';

const BookCard = ({ book, allBooksDetails, setAllBooksDetails, setLoading }) => {

  const {_id} = book
  const navigate = useNavigate()

  const editBookDetails = () => {
    navigate(`/books/${_id}/edit`, { state: { book } });
  }

  const showDetails = () => {
    navigate(`/books/${_id}/details`, { state: { book } });
  }

  const deleteBook = async () => {
      try {
        setLoading(true)
        await axios.delete(
          `http://localhost:8000/api/v1/book/${book._id}`,
        );
        setAllBooksDetails(allBooksDetails.filter((b) => b._id !== _id));
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error("Failed to delete book:", error);
        alert("Failed to delete book");
      }
  }

  return (
    <Card style={{ margin: '16px', width: '200px' }}>
      <CardContent>
        <div style={{ display:'flex', justifyContent:'flex-end'}}>
          <InfoIcon onClick={()=>showDetails()}/>
        </div>
        <Typography variant="body2" component="div">
         Title : {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{marginTop:'5px'}}>
          Author: {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {book.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {book.genre}
        </Typography>
        <Button  variant="contained" sx={{marginTop:'5px'}} onClick={()=>editBookDetails()}>Edit</Button>
        <Button  variant="contained" sx={{marginLeft:'5px' , marginTop:"5px"}} onClick={()=> deleteBook()}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
