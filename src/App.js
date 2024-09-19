import AddBook from "./components/AddBook";
import AllBooks from "./components/AllBooks";
import DetailsBook from "./components/DetailsBook";
import EditBook from "./components/EditBook";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [allBooksDetails, setAllBooksDetails] = useState([]);
  
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AllBooks
              allBooksDetails={allBooksDetails}
              setAllBooksDetails={setAllBooksDetails}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route path="/books/new" element={<AddBook loading={loading} setLoading={setLoading} />} />
        <Route path="/books/:id/edit" element={<EditBook loading={loading} setLoading={setLoading} />} />
        <Route path="/books/:id/details" element={<DetailsBook loading={loading} setLoading={setLoading} />} />
      </Routes>
    </>
  );
}

export default App;
