const API_KEY = process.env.API_KEY;

export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

export default {
	trending: {
		title: "Trending",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	topRated: {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	action: {
		title: "Action",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	comedy: {
		title: "Comedy",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	horror: {
		title: "Horror",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	romance: {
		title: "Romance",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	mystery: {
		title: "Mystery",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	scifi: {
		title: "Sci-Fi",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	western: {
		title: "Western",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	animated: {
		title: "Animation",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	tv: {
		title: "Tv",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
	},
};
