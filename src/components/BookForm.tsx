import React, { useState } from 'react';
import type { Book } from '../types/book';

interface BookFormProps {
  onAddBook: (newBook: Omit<Book, 'id'>) => void;
}

export const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState<number | ''>(new Date().getFullYear());
  const [category, setCategory] = useState('Fiksi / Sastra');
  const [status, setStatus] = useState<'Tersedia' | 'Dipinjam'>('Tersedia');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !year) {
      alert('Harap isi judul, penulis, dan tahun terbit.');
      return;
    }

    onAddBook({
      title: title.trim(),
      author: author.trim(),
      year: Number(year),
      category,
      status,
    });

    setTitle('');
    setAuthor('');
    setYear(new Date().getFullYear());
    setCategory('Fiksi / Sastra');
    setStatus('Tersedia');
  };

  return (
    <section className="form-card" aria-label="Form Tambah Buku">
      <h2 className="section-title">Tambah Buku Baru</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label htmlFor="book-title">Judul Buku</label>
          <input
            id="book-title"
            type="text"
            placeholder="Masukkan judul buku..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="book-author">Penulis</label>
          <input
            id="book-author"
            type="text"
            placeholder="Nama penulis..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="book-year">Tahun Terbit</label>
            <input
              id="book-year"
              type="number"
              min="1800"
              max={new Date().getFullYear() + 1}
              value={year}
              onChange={(e) => setYear(e.target.value === '' ? '' : Number(e.target.value))}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="book-category">Kategori</label>
            <select
              id="book-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Fiksi / Sastra">Fiksi / Sastra</option>
              <option value="Sejarah / Sastra">Sejarah / Sastra</option>
              <option value="Teknologi">Teknologi</option>
              <option value="Sains">Sains</option>
              <option value="Pengembangan Diri">Pengembangan Diri</option>
              <option value="Bisnis & Ekonomi">Bisnis & Ekonomi</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="book-status">Status</label>
            <select
              id="book-status"
              value={status}
              onChange={(e) => setStatus(e.target.value as 'Tersedia' | 'Dipinjam')}
            >
              <option value="Tersedia">Tersedia</option>
              <option value="Dipinjam">Dipinjam</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Tambah
        </button>
      </form>
    </section>
  );
};
