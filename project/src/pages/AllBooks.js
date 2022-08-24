import axios from 'axios';
import { useState, useEffect } from 'react';

import Books from '../components/Books';
function AllBooksPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const url = 'http://localhost:8080/api/bookstore/';
  useEffect(() => {
    setIsLoading(true);
    axios.get(
      url
    )
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        const books = [];

        for (const key in data) {
          const book = {
            id: key,
            ...data[key]
          };

          books.push(book);
        }
        
        console.log(books);
        
        setIsLoading(false);
        setLoadedBooks(books);
      });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <Books books={loadedBooks} />
    </section>
  );
}

export default AllBooksPage;