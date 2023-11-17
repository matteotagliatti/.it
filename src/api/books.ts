const API_URL = "http://bklst-api.vercel.app/matteotagliatti";

const get = (path: string) =>
  fetch(path).then((r) => (r.status === 200 ? r.json() : JSON.stringify({})));

const getReadingBooks = async () => {
  return get(`${API_URL}/reading`);
};

const getReadBooks = async () => {
  return get(`${API_URL}/read`);
};

const getToReadBooks = async () => {
  return get(`${API_URL}/to-read`);
};

export const getBooks = async () => {
  const [reading, read, toRead] = await Promise.all([
    getReadingBooks(),
    getReadBooks(),
    getToReadBooks(),
  ]);

  return { reading, read, toRead };
};
