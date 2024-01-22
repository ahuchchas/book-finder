import { useState } from "react";
import BookList from "./books/BookList";
import { defaultBooks } from "./books/data";
import Header from "./header/Header";

export default function MainPart() {
  const [books, setBooks] = useState(defaultBooks);
  const [searchedBooks, setSearchedBooks] = useState(null);

  function handleFav(bookId) {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return {
          ...book,
          isFavourite: !book.isFavourite,
        };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  }

  function handleSearch(searchTerm) {
    const filterdBooks = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedBooks(filterdBooks);
  }

  function handleSort(sortTerm) {
    const sortedBooks = [...books].sort((a, b) => {
      if (sortTerm === "name_asc") {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      } else if (sortTerm === "name_desc") {
        return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
      } else if (sortTerm === "year_asc") {
        return a.publishYear - b.publishYear;
      } else if (sortTerm === "year_desc") {
        return b.publishYear - a.publishYear;
      }
    });

    setBooks(sortedBooks);
  }

  return (
    <main className="my-10 lg:my-14">
      <Header onSearch={handleSearch} onSort={handleSort} />
      <BookList
        books={searchedBooks ? searchedBooks : books}
        onFav={handleFav}
      />
    </main>
  );
}
