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
        <div className="containerTitleProfileExtend"><h3 className="titleProfileExtend">Creator Profile</h3></div>
      <div className="CardInfoCreatorProfile">
        <button className="close-btnProfile" onClick={onClose}>✖</button>
        <h3 className="title-profileExtend">User Profile</h3>
        <div className="containerInfoCreatorProfile">
          <p><strong className="InfoCreator">Username</strong> <br />{user.nombre}</p>
          <p><strong className="InfoCreator">Email</strong> <br />{user.email}</p>
          <p><strong className="InfoCreator">Location</strong> <br />{user.location}</p>
        </div>

        <div className="books-sectionExtendProfile">
          <h4 className="ProfileExtendBooks">Exchanged Books ({exchangedBooks.length})</h4>
          {exchangedBooks.length > 0 ? (
            <ul className="bookUlExtendd">
              {exchangedBooks.map((book) => (
                <li key={book.id} className="bookLiExtend">
                  <strong className="infoBookExtend">{book.namebook}</strong> — {book.authorbook}
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
