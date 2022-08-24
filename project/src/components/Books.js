import BookItem from './BookItem';

function Books(props) {
  return (
    <div>
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          image={book.image.data}
          title={book.bookTitle}
          genre={book.bookGenre}
          price={book.bookPrice}
        />
      ))}
    </div>
  );
}

export default Books;
