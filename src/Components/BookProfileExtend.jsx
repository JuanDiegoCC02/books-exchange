import React, { useEffect, useState } from "react";
import "../Styles/BookProfileExtend.css";

function BookProfileExtend({ usuario, onClose }) {
  const [user, setUser] = useState(null);
  const [exchangedBooks, setExchangedBooks] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        // Traer todos los usuarios
        const usersResponse = await fetch("http://localhost:3000/users");
        const usersData = await usersResponse.json();
        const foundUser = usersData.find((u) => u.nombre === usuario);

        if (foundUser) {
          setUser(foundUser);

          // Traer libros del usuario
          const booksResponse = await fetch("http://localhost:3000/books");
          const booksData = await booksResponse.json();
          const userBooks = booksData.filter(
            (book) => book.usuario === usuario && book.statusChanged === true
          );
          setExchangedBooks(userBooks);
        }
      } catch (error) {
        console.error("Error al obtener datos del perfil:", error);
      }
    }
    fetchData();
  }, [usuario]);

  // Cerrar modal al hacer click fuera del card
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  if (!user) return null;

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
        <div><h3>Creator Profile</h3></div>
      <div className="modal-card">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h3 className="title-profile">User Profile</h3>
        <div className="user-info">
          <p><strong>Username:</strong> {user.nombre}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
        </div>

        <div className="books-section">
          <h4>Exchanged Books ({exchangedBooks.length})</h4>
          {exchangedBooks.length > 0 ? (
            <ul className="book-list">
              {exchangedBooks.map((book) => (
                <li key={book.id} className="book-item">
                  <strong>{book.namebook}</strong> — {book.authorbook}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-books">No exchanged books yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookProfileExtend;
