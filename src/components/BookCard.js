import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';

const BookCard = ({ book, allBooksDetails, setAllBooksDetails, setLoading }) => {
  const [open, setOpen] = useState(false);
  const { _id } = book;
  const navigate = useNavigate();

  const editBookDetails = () => {
    navigate(`/books/${_id}/edit`, { state: { book } });
  };

  const showDetails = () => {
    navigate(`/books/${_id}/details`, { state: { book } });
  };

  const handleDeleteClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteBook = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:8000/api/v1/book/${book._id}`);
      setAllBooksDetails(allBooksDetails.filter((b) => b._id !== _id));
      setLoading(false);
      setOpen(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to delete book:", error);
      alert("Failed to delete book");
      setOpen(false);
    }
  };

  return (
    <Card style={{ margin: '16px', width: '200px' }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <InfoIcon onClick={() => showDetails()} />
        </div>
        <Typography variant="body2" component="div">
          Title: {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '5px' }}>
          Author: {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {book.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {book.genre}
        </Typography>
        <Button variant="contained" sx={{ marginTop: '5px' }} onClick={() => editBookDetails()}>
          Edit
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: '5px', marginTop: '5px' }}
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      </CardContent>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this book?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteBook} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default BookCard;
