import React from 'react';
import type { Book } from '../types/book';

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

export const BookItem: React.FC<BookItemProps> = ({
  book,
  onDelete,
  onToggleStatus,
}) => {
  const isAvailable = book.status === 'Tersedia';

  return (
    <article className="book-card" aria-label={`Buku: ${book.title}`}>
      <div className="book-card-header">
        <span className="book-category">{book.category}</span>
        <span className={`status-badge ${isAvailable ? 'available' : 'borrowed'}`}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isAvailable ? (
              <polyline points="20 6 9 17 4 12" />
            ) : (
              <line x1="18" y1="6" x2="6" y2="18" />
            )}
          </svg>
          {book.status}
        </span>
      </div>

      <div className="book-card-body">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-meta">
          <span className="book-author">Oleh: {book.author}</span>
          <span className="book-year">({book.year})</span>
        </p>
      </div>

      <div className="book-card-actions">
        <button
          type="button"
          onClick={() => onToggleStatus(book.id)}
          className="btn-status"
          title="Ubah Status Ketersediaan"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
          </svg>
          Ubah ke {isAvailable ? 'Dipinjam' : 'Tersedia'}
        </button>

        <button
          type="button"
          onClick={() => onDelete(book.id)}
          className="btn-delete"
          title="Hapus Buku"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Hapus
        </button>
      </div>
    </article>
  );
};
