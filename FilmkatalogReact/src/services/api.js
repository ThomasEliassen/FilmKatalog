const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN; // token i .env.local

async function tmdbFetch(path) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`TMDB ${response.status}: ${text}`);
  }

  return response.json();
}

export const getPopularMovies = async () => {
  const data = await tmdbFetch(`/movie/popular?language=en-US&page=1`);
  return data.results;
};

export const searchMovies = async (query) => {
  const data = await tmdbFetch(
    `/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`
  );
  return data.results;
};





/* export const getPopularMovies = async () => {
    const respone = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await respone.json();
    return data.results;
}


export const searchMovies = async (query) => {
    const respone = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await respone.json();
    return data.results;
} */