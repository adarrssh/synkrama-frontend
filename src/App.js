import AddBook from "./components/AddBook";
import AllBooks from "./components/AllBooks";
import DetailsBook from "./components/DetailsBook";
import EditBook from "./components/EditBook";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [allBooksDetails, setAllBooksDetails] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AllBooks
              allBooksDetails={allBooksDetails}
              setAllBooksDetails={setAllBooksDetails}
            />
          }
        />
        <Route path="/books/new" element={<AddBook />} />
        <Route path="/books/:id/edit" element={<EditBook />} />
        <Route path="/books/:id/details" element={<DetailsBook />} />
      </Routes>
    </>
  );
}

export default App;
