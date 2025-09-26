import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios'
import type { Book } from './components/types';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookSearchSortFilter from './components/BookSearchSortFilter';
import { Button } from '@mui/material';

// const initialBooks: Book[] = [
//   {
//     id: '1',
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925,
//     category: 'Novel',
//   },
//   {
//     id: '2',
//     title: 'A Brief History of Time',
//     author: 'Stephen Hawking',
//     year: 1988,
//     category: 'Science',
//   },
//   {
//     id: '3',
//     title: 'Sapiens',
//     author: 'Yuval Noah Harari',
//     year: 2011,
//     category: 'History',
//   },
// ];

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Book> | undefined>();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const categories = useMemo(
    () => Array.from(new Set(books.map((b) => b.category))).sort(),
    [books],
  );
  
  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((res)=>{
      setBooks(res.data);
    })
    .catch((err)=>{
      console.log("Lỗi khi lấy dữ liệu: ",err);
    });
  },[]);

  const handleSubmit = (data: {
    id?: string;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => {
    if (data.id) {
      setBooks((prev) =>
        prev.map((b) => (b.id === data.id ? ({ ...b, ...data } as Book) : b)),
      );
    } else {
      const id = Date.now().toString();
      setBooks((prev) => [{ id, ...data }, ...prev]);
    }
    setOpenForm(false);
  };

  const filteredSorted = useMemo(() => {
    let out = books.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q),
      );
    }
    if (category !== 'all') out = out.filter((b) => b.category === category);

    out.sort((a, b) => {
      if (sortBy === 'title') {
        const r = a.title.localeCompare(b.title);
        return sortDir === 'asc' ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === 'asc' ? r : -r;
      }
    });
    return out;
  }, [books, search, category, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

      <Button
        variant="contained"
        onClick={() => {
          setEditing(undefined);
          setOpenForm(true);
        }}
      >
        Add Book
      </Button>

      <div className="mt-4">
        <BookSearchSortFilter
          search={search}
          category={category}
          sortBy={sortBy}
          sortDir={sortDir}
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={(by, dir) => {
            setSortBy(by);
            setSortDir(dir);
          }}
          onClear={() => {
            setSearch('');
            setCategory('all');
            setSortBy('title');
            setSortDir('asc');
          }}
        />
      </div>

      <div className="mt-6">
        <BookList
          books={filteredSorted}
          onEdit={(b) => {
            setEditing(b);
            setOpenForm(true);
          }}
          onDelete={(id) => setBooks((prev) => prev.filter((b) => b.id !== id))}
        />
      </div>

      <BookForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;