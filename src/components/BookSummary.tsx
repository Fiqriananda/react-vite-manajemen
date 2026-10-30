import React from 'react';

interface BookSummaryProps {
  total: number;
  available: number;
  borrowed: number;
}

export const BookSummary: React.FC<BookSummaryProps> = ({
  total,
  available,
  borrowed,
}) => {
  return (
    <section className="summary-container" aria-label="Ringkasan Koleksi">
      <div className="summary-card">
        <div className="summary-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>
        <div className="summary-info">
          <span className="summary-label">Total Buku</span>
          <strong className="summary-count">{total}</strong>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon success">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div className="summary-info">
          <span className="summary-label">Tersedia</span>
          <strong className="summary-count">{available}</strong>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon warning">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <div className="summary-info">
          <span className="summary-label">Dipinjam</span>
          <strong className="summary-count">{borrowed}</strong>
        </div>
      </div>
    </section>
  );
};
