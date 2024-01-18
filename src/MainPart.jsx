import { useState } from "react";
import BookList from "./books/BookList";
import Header from "./header/Header";

const defaultBooks = [
  {
    id: crypto.randomUUID(),
    photoUrl: "https://i.ibb.co/QXXxcfJ/image.jpg",
    name: "Habluder Jonno Programming",
    author: "Jhankar Mahbub",
    price: 250,
    rating: 4,
    publishYear: 2019,
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    photoUrl: "https://i.ibb.co/p2d9mS3/a36832000f6be243a78f1704827bffe9.jpg",
    name: "Computer Programming",
    author: "Tamim Shahriar Subin",
    price: 220,
    rating: 5,
    publishYear: 2015,
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    photoUrl: "https://i.ibb.co/0jnGD1J/e53af8191-202772.png",
    name: "Haate Kolome Javascript",
    author: "Junayed Ahmed",
    price: 230,
    rating: 4,
    publishYear: 2021,
    isFavourite: false,
  },
];

export default function MainPart() {
  const [books, setBooks] = useState(defaultBooks);

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
    // alert(searchTerm);
    const filterdBooks = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filterdBooks);
  }

  return (
    <main className="my-10 lg:my-14">
      <Header onSearch={handleSearch} />
      <BookList books={books} onFav={handleFav} />
    </main>
  );
}
