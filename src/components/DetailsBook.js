import { Button, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailsBook = () => {
  const location = useLocation();
  const { book } = location.state || {};

  const navigate = useNavigate()

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop:"50px", 
        height:'100vh'
      }}
    >
      
      <Button sx={{ position:"absolute", top:20, left:20}} variant="outlined" onClick={()=> navigate('/') }>Go Back</Button>

      <Card style={{ margin: "16px", width: "200px", marginTop:'30px' }}>
        <CardContent>
          <Typography  component="div">
            title : {book.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "5px" }}
          >
            Author: {book.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year: {book.year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genre: {book.genre}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DetailsBook;
