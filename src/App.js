import { useEffect } from "react";
import useBooksContext from "./hooks/use-books-context";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

export default function App() {
  const { fetchBooks } = useBooksContext()

  useEffect(() => {
      fetchBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
