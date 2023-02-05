import { useState } from "react";

export default function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input value={title} onChange={handleChange} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  );
}