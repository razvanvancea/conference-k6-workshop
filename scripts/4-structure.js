import http from 'k6/http';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export function getBooks() {
  return http.get(`${BASE_URL}/books`);
}

export function getBookById(id) {
  return http.get(`${BASE_URL}/books/${id}`);
}

export default function () {
  const res = getBooks();
  const books = res.json();

  if (books.length > 0) {
    getBookById(books[0].id);
  }
}
