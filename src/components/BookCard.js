import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {

  const {_id} = book
  const navigate = useNavigate()

  const editBookDetails = () => {
    navigate(`/books/${_id}/edit`, { state: { book } });
  }


  return (
    <Card style={{ margin: '16px', width: '200px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
         title : {book.title}
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
        <Button  variant="contained" sx={{marginLeft:'5px' , marginTop:"5px"}}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
