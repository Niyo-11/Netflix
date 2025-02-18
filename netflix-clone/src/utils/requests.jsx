const api_key = import.meta.env.VITE_api_key;

const requests = {
	fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${api_key}&language=en-US`,
	fetchActionMovies: `/dicover/movie?api_key=${api_key}&with_genres=28`,
	fetchComedyMovies: `/dicover/movie?api_key=${api_key}&with_genres=35`,
	fetchHorrorMovies: `/dicover/movie?api_key=${api_key}&with_genres=27`,
	fetchRomanceMovies: `/dicover/movie?api_key=${api_key}&with_genres=10749`,
	fetchDocumentaries: `/dicover/movie?api_key=${api_key}&with_genres=99`,
	fetchTvShows: `/trending/all/week?api_key=${api_key}&language=en-US&page=1`,
};

export default requests;
