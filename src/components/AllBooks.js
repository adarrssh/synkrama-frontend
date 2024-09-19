import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import BookCard from "./BookCard";
import NavBar from "./NavBar";
import axios from "axios";
import Loader from "./Loader";

const AllBooks = ({ allBooksDetails, setAllBooksDetails, loading, setLoading }) => {

  const [fetchTrigger, setFetchTrigger] = useState(false);

  const handleDataChange = () => {
    setFetchTrigger(prev => !prev);
  };

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        setLoading(true)
        const res = await axios.get("http://localhost:8000/api/v1/books");
        setAllBooksDetails(res.data.data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error( error);
        alert('Error in fetching books')
      }
    };
    getAllBooks();
  }, [fetchTrigger]);

  

  if(loading){
    return <Loader/>
  }

  return (
    <>
      <NavBar  setAllBooksDetails={setAllBooksDetails} handleDataChange={handleDataChange} />
      <Container
        disableGutters
        style={{ marginTop: "50px", display: "flex", flexWrap: "wrap" }}
      >
        {allBooksDetails.map((book, key) => (
          <BookCard
            key={key}
            book={book}
            allBooksDetails={allBooksDetails}
            setAllBooksDetails={setAllBooksDetails}
            setLoading={setLoading}
          />
        ))}
      </Container>
    </>
  );
};

export default AllBooks;
