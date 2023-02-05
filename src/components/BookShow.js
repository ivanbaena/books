import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

export default function BookShow({ book }) {
  const { deleteBookById } = useBooksContext()
  const [showEdit, setShowEdit] = useState(false);

  const { title, id } = book;
  const handleDeleteClick = () => {
    deleteBookById(id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  }

  let content = <h3>{title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
