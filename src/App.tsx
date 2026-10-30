import { useState } from 'react';
import type { Book } from './types/book';
import { initialBooks } from './data/initialBooks';
import { Header } from './components/Header';
import { BookSummary } from './components/BookSummary';
import { BookForm } from './components/BookForm';
import { BookList } from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleAddBook = (newBook: Omit<Book, 'id'>) => {
    const bookWithId: Book = {
      ...newBook,
      id: `buku-${Date.now()}`,
    };
    setBooks((prev) => [bookWithId, ...prev]);
  };

  const handleDeleteBook = (id: string) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              status: b.status === 'Tersedia' ? 'Dipinjam' : 'Tersedia',
            }
          : b
      )
    );
  };

  const handleResetData = () => {
    setBooks(initialBooks);
  };

  const handleClearAll = () => {
    setBooks([]);
  };

  const total = books.length;
  const available = books.filter((b) => b.status === 'Tersedia').length;
  const borrowed = books.filter((b) => b.status === 'Dipinjam').length;

  return (
    <main className="app-container">
      <Header />

      <BookSummary
        total={total}
        available={available}
        borrowed={borrowed}
      />

      <div className="main-content">
        <BookForm onAddBook={handleAddBook} />

        <div className="catalog-wrapper">
          <div className="action-bar">
            <button
              type="button"
              className="btn-outline"
              onClick={handleResetData}
            >
              Reset Data Awal
            </button>
            {books.length > 0 && (
              <button
                type="button"
                className="btn-outline danger"
                onClick={handleClearAll}
              >
                Kosongkan Semua
              </button>
            )}
          </div>

          <BookList
            books={books}
            onDeleteBook={handleDeleteBook}
            onToggleStatus={handleToggleStatus}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
