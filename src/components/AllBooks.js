import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import BookCard from "./BookCard";
import NavBar from "./NavBar";
import axios from "axios";

const AllBooks = ({ allBooksDetails, setAllBooksDetails }) => {
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/books");
        setAllBooksDetails(res.data.data);
        return res;
      } catch (error) {
        throw error;
      }
    };
    getAllBooks();
  }, []);

  return (
    <>
      <NavBar />
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
          />
        ))}
      </Container>
    </>
  );
};

export default AllBooks;
