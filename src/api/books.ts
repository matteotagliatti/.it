const API_URL = "https://bklst.matteotagliatti.it/api/books";

const get = (path: string) =>
  fetch(path).then((r) => (r.status === 200 ? r.json() : JSON.stringify({})));

const getReadingBooks = async () => {
  return get(`${API_URL}?username=matteotagliatti&status=reading&limit=3`);
};

const getReadBooks = async () => {
  return get(
    `${API_URL}?username=matteotagliatti&status=read&limit=10?order=finished`
  );
};

const getToReadBooks = async () => {
  return get(`${API_URL}?username=matteotagliatti&status=to-read&limit=3`);
};

export const getBooks = async () => {
  const [reading, read, toRead] = await Promise.all([
    getReadingBooks(),
    getReadBooks(),
    getToReadBooks(),
  ]);

  return { reading, read, toRead };
};
