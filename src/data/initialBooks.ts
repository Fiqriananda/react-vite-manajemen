import type { Book } from '../types/book';

export const initialBooks: Book[] = [
  {
    id: 'buku-1',
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    year: 2005,
    category: 'Fiksi / Sastra',
    status: 'Tersedia',
  },
  {
    id: 'buku-2',
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    year: 1980,
    category: 'Sejarah / Sastra',
    status: 'Dipinjam',
  },
  {
    id: 'buku-3',
    title: 'Filosofi Teras',
    author: 'Henry Manampiring',
    year: 2018,
    category: 'Pengembangan Diri',
    status: 'Tersedia',
  },
  {
    id: 'buku-4',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    year: 2008,
    category: 'Teknologi',
    status: 'Tersedia',
  },
];
