import React from 'react';
import type { Book } from '../types/book';
import { BookItem } from './BookItem';

interface BookListProps {
  books: Book[];
  onDeleteBook: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

export const BookList: React.FC<BookListProps> = ({
  books,
  onDeleteBook,
  onToggleStatus,
}) => {
  return (
    <section className="list-section" aria-label="Daftar Buku">
      <div className="list-header">
        <h2 className="section-title">Katalog Buku</h2>
        <span className="list-counter">{books.length} Buku</span>
      </div>

      {books.length === 0 ? (
        <div className="empty-box">
          <svg
            className="empty-icon"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="9" y1="9" x2="15" y2="9" />
          </svg>
          <p className="empty-message">Belum ada data buku perpustakaan</p>
        </div>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={onDeleteBook}
              onToggleStatus={onToggleStatus}
            />
          ))}
        </div>
      )}
    </section>
  );
};
